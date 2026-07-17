import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  DollarSign,
  Shield,
  Zap,
  TrendingDown,
  ArrowRight,
  Star,
  Globe,
  Users,
  CheckCircle,
  BarChart3,
  Smartphone,
  Clock,
} from "lucide-react";
import heroImg from "../assets/hero.jpeg";
import AdSlot from "../components/AdSlot.jsx";
import ComparisonCard from "../components/ComparisonCard.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import data from "../data/comparisons.json";

const featureKeys = [
  {
    icon: TrendingDown,
    tKey: "tarifas",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Shield,
    tKey: "verificada",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Zap,
    tKey: "instante",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Globe,
    tKey: "paises",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const statsKeys = [
  { value: "60M+", tKey: "hispanos", icon: Users },
  { value: "$70B+", tKey: "remesas", icon: DollarSign },
  { value: "3.5%", tKey: "costo", icon: BarChart3 },
  { value: "30 seg", tKey: "rapido", icon: Clock },
];

const stepsKeys = [
  { step: "01", tKey: "paso1", icon: BarChart3 },
  { step: "02", tKey: "paso2", icon: CheckCircle },
  { step: "03", tKey: "paso3", icon: Smartphone },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    // Hero Section about the website, with a background image and a gradient overlay
    <div className="bg-surface-dark">
      <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px]">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: "50% 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-surface-dark/50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              {t("hero.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {t("hero.h1_1")}{" "}
              <span className="text-gradient">{t("hero.h1_2")}</span>{" "}
              {t("hero.h1_3")}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
              {t("hero.p")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/comparativas"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl hover:from-primary-light hover:to-primary transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-lg"
              >
                {t("hero.btn_comparativas")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/guias"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                {t("hero.btn_guias")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      // this section is about the statistics of the website, with a background
      color and a grid layout
      <section className="bg-surface-dark border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsKeys.map((s) => (
              <div key={s.tKey} className="text-center">
                <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-extrabold text-text">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-text-light mt-1">
                  {t(`stats.${s.tKey}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdSlot position="banner" />
      </div>
      // this section is about the features of the website, with a grid layout
      and icons
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">
              {t("features.titulo")}
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              {t("features.subtitulo")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureKeys.map((f) => (
              <div
                key={f.tKey}
                className="p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 hover:border-primary/20"
              >
                <div
                  className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">
                  {t(`features.${f.tKey}_t`)}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {t(`features.${f.tKey}_d`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        // this section is about the comparisons of the website, with a grid
        layout
      </section>
      <section className="py-16 md:py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-2">
                {t("comparativas_section.titulo")}
              </h2>
              <p className="text-text-light">
                {t("comparativas_section.subtitulo")}
              </p>
            </div>
            <Link
              to="/comparativas"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              {t("comparativas_section.ver_todas")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.comparativas.slice(0, 6).map((comp) => (
              <ComparisonCard key={comp.id} comparativa={comp} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">
              {t("como_funciona.titulo")}
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              {t("como_funciona.subtitulo")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stepsKeys.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">
                  Paso {s.step}
                </div>
                <h3 className="text-xl font-bold text-text mb-3">
                  {t(`como_funciona.${s.tKey}_t`)}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {t(`como_funciona.${s.tKey}_d`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-2">
                {t("guias_section.titulo")}
              </h2>
              <p className="text-text-light">{t("guias_section.subtitulo")}</p>
            </div>
            <Link
              to="/guias"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              {t("guias_section.ver_todas")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.guias.slice(0, 3).map((guia) => (
              <ArticleCard key={guia.id} article={guia} type="guia" />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">
              {t("paises_section.titulo")}
            </h2>
            <p className="text-lg text-text-light">
              {t("paises_section.subtitulo")}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {data.paises.map((pais) => (
              <Link
                key={pais.slug}
                to={`/comparativas/mejores-apps-enviar-dinero-${pais.slug}`}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-4xl">{pais.bandera}</span>
                <span className="text-sm font-semibold text-text">
                  {t(`paises.${pais.slug}`)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdSlot position="banner" />
      </div>
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/10 border-y border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">
            {t("cta.titulo")}
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            {t("cta.p")}
          </p>
          <Link
            to="/comparativas"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl hover:from-primary-light hover:to-primary transition-all shadow-lg shadow-primary/30 text-lg"
          >
            {t("cta.btn")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
