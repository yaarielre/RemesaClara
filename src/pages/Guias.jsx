import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, Filter } from "lucide-react";
import AdSlot from "../components/AdSlot.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import data from "../data/comparisons.json";

const categories = ["Todas", "Guías por País", "Ahorro", "Emergencias", "Costos", "Seguridad"];

export default function Guias() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = data.guias.filter((g) => {
    const matchesCategory = selectedCategory === "Todas" || g.categoria === selectedCategory;
    const matchesSearch = g.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || g.subtitulo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-surface-dark min-h-screen">
      <section className="bg-hero py-16 md:py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t("guias_page.titulo")}</h1>
            <p className="text-lg text-white/70">{t("guias_page.subtitulo")}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-lighter" />
            <input type="text" placeholder={t("guias_page.buscar")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-sm text-text placeholder-text-lighter focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1">
            <Filter className="w-4 h-4 text-text-lighter flex-shrink-0" />
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === cat ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/20" : "bg-card text-text-light hover:bg-card-hover border border-border/50"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AdSlot position="banner" className="mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((guia) => <ArticleCard key={guia.id} article={guia} type="guia" />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-text-light">{t("guias_page.no_resultados")} "{searchTerm}"</p>
          </div>
        )}

        <AdSlot position="banner" className="mt-8" />
      </div>
    </div>
  );
}
