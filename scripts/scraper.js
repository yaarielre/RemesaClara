/**
 * RemesaClara - Web Scraper
 * 
 * Extrae datos de las mejores páginas de comparativas de remesas
 * para mantener nuestra información actualizada y competitiva.
 * 
 * Uso: node scripts/scraper.js
 * 
 * IMPORTANTE: Este script es para uso educativo/legítimo.
 * Respeta los robots.txt de cada sitio y los términos de servicio.
 */

import { load } from "cheerio";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "es-US,es;q=0.9,en;q=0.8",
  "Accept-Encoding": "gzip, deflate, br",
  "Connection": "keep-alive",
  "Upgrade-Insecure-Requests": "1",
};

const SOURCES = [
  {
    name: "Wise - Envío a México",
    url: "https://wise.com/us/send-money/send-money-to-mexico",
    type: "official",
    parser: "wise",
  },
  {
    name: "Wise - Envío a Colombia",
    url: "https://wise.com/us/send-money/send-money-to-colombia",
    type: "official",
    parser: "wise",
  },
  {
    name: "Remitly - México",
    url: "https://www.remitly.com/us/en/mexico",
    type: "official",
    parser: "remitly",
  },
  {
    name: "Remitly - Colombia",
    url: "https://www.remitly.com/us/en/colombia",
    type: "official",
    parser: "remitly",
  },
  {
    name: "Western Union - Home",
    url: "https://www.westernunion.com/us/en/home.html",
    type: "official",
    parser: "westernunion",
  },
  {
    name: "Monito - US a México",
    url: "https://www.monito.com/send-money/united-states/mexico/usd/mxn",
    type: "aggregator",
    parser: "monito",
  },
  {
    name: "Monito - US a Colombia",
    url: "https://www.monito.com/send-money/united-states/colombia/usd/cop",
    type: "aggregator",
    parser: "monito",
  },
  {
    name: "Remitly - Rep. Dominicana",
    url: "https://www.remitly.com/us/en/dominican-republic",
    type: "official",
    parser: "remitly",
  },
];

async function fetchWithRetry(url, retries = 3, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: HEADERS,
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      return await response.text();
    } catch (error) {
      console.error(`  Intento ${i + 1}/${retries} falló: ${error.message}`);
      if (i < retries - 1) await new Promise((r) => setTimeout(r, delay * (i + 1)));
    }
  }
  return null;
}

function extractText($, selectors) {
  const results = [];
  selectors.forEach((sel) => {
    $(sel).each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 5 && text.length < 1000) results.push(text);
    });
  });
  return [...new Set(results)].slice(0, 30);
}

function parseWise(html, url) {
  const $ = load(html);
  return {
    source: "Wise", url, extractedAt: new Date().toISOString(),
    fees: extractText($, ["[class*='fee']", "[class*='price']", "[class*='cost']"]),
    exchangeRate: $("[class*='rate'], [class*='exchange']").first().text().trim() || null,
    deliveryTime: $("[class*='speed'], [class*='delivery']").first().text().trim() || null,
    contentSummary: extractText($, ["h1", "h2", "h3", "p"]),
  };
}

function parseRemitly(html, url) {
  const $ = load(html);
  return {
    source: "Remitly", url, extractedAt: new Date().toISOString(),
    fees: extractText($, ["[class*='fee']", "[class*='price']", "[class*='rate']"]),
    features: extractText($, ["[class*='feature']", "[class*='benefit']"]),
    contentSummary: extractText($, ["h1", "h2", "h3", "p"]),
  };
}

function parseWesternUnion(html, url) {
  const $ = load(html);
  return {
    source: "Western Union", url, extractedAt: new Date().toISOString(),
    fees: extractText($, ["[class*='fee']", "[class*='price']", "[class*='amount']"]),
    contentSummary: extractText($, ["h1", "h2", "h3", "p", "li"]),
  };
}

function parseMonito(html, url) {
  const $ = load(html);
  const providers = [];
  $("[class*='provider'], [class*='company'], table tr").each((_, el) => {
    const text = $(el).text().trim();
    if (text.length > 20 && text.length < 500) providers.push(text);
  });
  return {
    source: "Monito", url, extractedAt: new Date().toISOString(),
    providers: [...new Set(providers)].slice(0, 15),
    bestOption: $("[class*='best'], [class*='top'], [class*='winner']").first().text().trim() || null,
    contentSummary: extractText($, ["h1", "h2", "h3", "p"]),
  };
}

const PARSERS = { wise: parseWise, remitly: parseRemitly, westernunion: parseWesternUnion, monito: parseMonito };

async function scrapeAll() {
  console.log("╔══════════════════════════════════════════════╗");
  console.log("║   RemesaClara - Web Scraper de Remesas      ║");
  console.log("╚══════════════════════════════════════════════╝\n");

  const results = {
    metadata: { scrapedAt: new Date().toISOString(), sourcesAttempted: SOURCES.length, sourcesSuccessful: 0 },
    data: [],
  };

  for (const source of SOURCES) {
    console.log(`📡 ${source.name}`);
    const html = await fetchWithRetry(source.url);
    if (!html) { console.log(`   ❌ Falló\n`); continue; }
    console.log(`   ✅ ${(html.length / 1024).toFixed(1)} KB`);

    const parser = PARSERS[source.parser];
    if (parser) {
      try {
        const data = parser(html, source.url);
        data.sourceType = source.type;
        results.data.push(data);
        results.metadata.sourcesSuccessful++;
        console.log(`   ✅ Extraído\n`);
      } catch (e) { console.log(`   ❌ Error: ${e.message}\n`); }
    }
  }

  const outputPath = path.join(__dirname, "..", "src", "data", "scraped-data.json");
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\n💾 Guardado en: ${outputPath}`);
  console.log(`\n📊 Resumen: ${results.metadata.sourcesSuccessful}/${results.metadata.sourcesAttempted} fuentes exitosas`);
  return results;
}

scrapeAll().catch(console.error);
