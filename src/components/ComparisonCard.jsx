import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Star, Clock, ArrowRight } from "lucide-react";

const platformStyles = {
  Remitly: { color: "#0078D4", letter: "Re" },
  "Western Union": { color: "#FFDD00", letter: "WU" },
  Wise: { color: "#9FE870", letter: "Wi" },
  Xoom: { color: "#003087", letter: "Xo" },
  MoneyGram: { color: "#E31837", letter: "MG" },
  WorldRemit: { color: "#1A3DC1", letter: "WR" },
};

const countryFlags = {
  "remitly-vs-western-union": "🌎",
  "wise-vs-remitly": "💱",
  "mejores-apps-enviar-dinero-mexico": "🇲🇽",
  "mejores-apps-enviar-dinero-colombia": "🇨🇴",
  "mejores-apps-enviar-dinero-republica-dominicana": "🇩🇴",
  "comparar-tasas-cambio-remitas": "📊",
};

const countryImages = {
  "mejores-apps-enviar-dinero-mexico": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
  ],
  "mejores-apps-enviar-dinero-republica-dominicana": [
    "https://eldia.com.do/wp-content/uploads/2020/02/bandera-dominicana.webp",
  ],
  "mejores-apps-enviar-dinero-colombia": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/250px-Flag_of_Colombia.svg.png",
  ],
  "comparar-tasas-cambio-remitas": [
    "https://panorama.com.do/wp-content/uploads/2025/03/remesas-familiares-2017-e1741789414479.jpg",
  ],
  "remitly-vs-western-union": [
    "https://www.remitbee.com/_next/image?url=https%3A%2F%2Fprodmtes-cf.remitbee.com%2Fstrapi%2Fuploads%2FWestern_Union_vs_Remitly_1_622ad99d03.png&w=1920&q=75",
  ],
  "wise-vs-remitly": [
    "https://www.thecurrencyshop.com.au/wp-content/uploads/2024/03/Wise-vs-Remitly.png",
  ],
};

const countryColors = {
  "remitly-vs-western-union": "from-primary/20 via-cyan-500/10 to-secondary/10",
  "wise-vs-remitly": "from-emerald-500/20 via-primary/10 to-purple-500/10",
  "mejores-apps-enviar-dinero-mexico":
    "from-emerald-600/20 via-green-500/10 to-red-500/10",
  "mejores-apps-enviar-dinero-colombia":
    "from-yellow-500/20 via-blue-500/10 to-red-500/10",
  "mejores-apps-enviar-dinero-republica-dominicana":
    "from-blue-600/20 via-red-500/10 to-white/5",
  "comparar-tasas-cambio-remitas":
    "from-secondary/20 via-primary/10 to-emerald-500/10",
};

export default function ComparisonCard({ comparativa }) {
  const { t } = useTranslation();
  const { slug, titulo, subtitulo, tiempoLectura, plataformas, ganador } =
    comparativa;
  const flag = countryFlags[slug] || "🌎";
  const countryImg = countryImages[slug];
  const gradient =
    countryColors[slug] || "from-primary/20 via-primary/5 to-secondary/10";

  return (
    <Link
      to={`/comparativas/${slug}`}
      className="group block bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border/50 overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={`relative h-40 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
        {countryImg && countryImg.length > 0 ? (
          countryImg.length === 1 ? (
            <img
              src={countryImg[0]}
              alt={flag}
              className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 relative z-0"
            />
          ) : (
            <div className="w-full h-full grid grid-cols-2 gap-0.5 relative z-0">
              {countryImg.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${flag} ${i + 1}`}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                />
              ))}
            </div>
          )
        ) : (
          <span className="text-7xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 relative z-0 select-none">
            {flag}
          </span>
        )}
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          {plataformas.slice(0, 3).map((p) => {
            const style = platformStyles[p.nombre] || {
              color: "#06B6D4",
              letter: p.nombre.slice(0, 2),
            };
            return (
              <div
                key={p.nombre}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-extrabold text-white shadow-lg backdrop-blur-sm border border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${style.color}CC, ${style.color}66)`,
                }}
                title={p.nombre}
              >
                {style.letter}
              </div>
            );
          })}
        </div>
        {ganador && ganador !== "N/A" && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2.5 py-1 bg-secondary/90 text-surface-dark text-xs font-bold rounded-full backdrop-blur-sm">
            <Star className="w-3 h-3 fill-current" />
            {ganador}
          </div>
        )}
        {plataformas.length >= 2 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 bg-surface-dark/80 backdrop-blur-sm rounded-full border border-border/50">
            <span className="text-xs font-bold text-text">VS</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors leading-snug mb-2">
          {titulo}
        </h3>
        <p className="text-sm text-text-light line-clamp-2 mb-4">{subtitulo}</p>
        <div className="flex items-center gap-3 mb-4">
          {plataformas.slice(0, 2).map((p) => {
            const style = platformStyles[p.nombre] || { color: "#06B6D4" };
            return (
              <div key={p.nombre} className="flex items-center gap-2 flex-1">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: style.color }}
                />
                <div className="min-w-0">
                  <div className="text-xs text-text-lighter truncate">
                    {p.nombre}
                  </div>
                  <div className="text-sm font-bold text-text">
                    {p.tarifaEnvio100}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border/30">
          <span className="flex items-center gap-1 text-xs text-text-lighter">
            <Clock className="w-3 h-3" />
            {tiempoLectura} {t("card.min_lectura")}
          </span>
          <ArrowRight className="w-4 h-4 text-text-lighter group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
