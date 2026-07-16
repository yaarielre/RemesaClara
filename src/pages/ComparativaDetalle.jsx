import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Star, Clock, Check, X, ArrowLeft, DollarSign, Zap, AlertTriangle } from "lucide-react";
import AdSlot from "../components/AdSlot.jsx";
import data from "../data/comparisons.json";

export default function ComparativaDetalle() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const comparativa = data.comparativas.find((c) => c.slug === slug);

  if (!comparativa) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center bg-surface-dark min-h-screen">
        <h1 className="text-2xl font-bold text-text mb-4">Comparativa no encontrada</h1>
        <Link to="/comparativas" className="text-primary hover:underline">{t("comparativa_detalle.volver")}</Link>
      </div>
    );
  }

  return (
    <div className="bg-surface-dark min-h-screen">
      <section className="bg-hero py-16 md:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/comparativas" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />{t("comparativa_detalle.volver")}</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/15 text-white text-xs font-semibold rounded-full">{comparativa.categoria}</span>
            <span className="flex items-center gap-1 text-sm text-white/60"><Clock className="w-3.5 h-3.5" />{comparativa.tiempoLectura} {t("comparativa_detalle.lectura")}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">{comparativa.titulo}</h1>
          <p className="text-lg text-white/70">{comparativa.subtitulo}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AdSlot position="banner" />
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50"><p className="text-text-light leading-relaxed">{comparativa.descripcion}</p></div>

            {comparativa.plataformas.map((p) => (
              <div key={p.nombre} className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
                <div className="p-6 md:p-8 border-b border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-lg font-bold text-primary">{p.nombre.slice(0, 2)}</div>
                      <div>
                        <h3 className="text-xl font-bold text-text">{p.nombre}</h3>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(p.rating) ? "text-secondary fill-secondary" : "text-border"}`} />)}
                          <span className="text-sm text-text-lighter ml-1">{p.rating}</span>
                        </div>
                      </div>
                    </div>
                    {p.promo && <span className="px-3 py-1.5 bg-emerald-500/15 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">{p.promo}</span>}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border/50">
                  <div className="p-4 text-center border-r border-border/50"><DollarSign className="w-5 h-5 text-primary mx-auto mb-1" /><div className="text-xs text-text-lighter mb-1">{t("comparativa_detalle.tarifa")}</div><div className="text-lg font-bold text-text">{p.tarifaEnvio100}</div></div>
                  <div className="p-4 text-center border-r border-border/50"><DollarSign className="w-5 h-5 text-secondary mx-auto mb-1" /><div className="text-xs text-text-lighter mb-1">{t("comparativa_detalle.tipo_cambio")}</div><div className="text-sm font-bold text-text">{p.tipoCambio}</div></div>
                  <div className="p-4 text-center border-r border-border/50"><Zap className="w-5 h-5 text-emerald-400 mx-auto mb-1" /><div className="text-xs text-text-lighter mb-1">{t("comparativa_detalle.velocidad")}</div><div className="text-sm font-bold text-text">{p.velocidad}</div></div>
                  <div className="p-4 text-center"><span className="text-xs text-text-lighter block mb-1">{t("comparativa_detalle.metodos")}</span><div className="flex flex-wrap justify-center gap-1">{p.metodosEnvio.map((m) => <span key={m} className="px-2 py-0.5 bg-surface-dark rounded text-xs font-medium text-text-light">{m}</span>)}</div></div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2"><Check className="w-4 h-4" />{t("comparativa_detalle.fuertes")}</h4>
                      <ul className="space-y-2">{p.puntosFuertes.map((pt) => <li key={pt} className="flex items-start gap-2 text-sm text-text-light"><Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />{pt}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-danger mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4" />{t("comparativa_detalle.debiles")}</h4>
                      <ul className="space-y-2">{p.puntosDebiles.map((pt) => <li key={pt} className="flex items-start gap-2 text-sm text-text-light"><X className="w-4 h-4 text-danger mt-0.5 flex-shrink-0" />{pt}</li>)}</ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-surface-dark/50 rounded-xl border border-border/30"><span className="text-sm font-semibold text-text">{t("comparativa_detalle.ideal_para")}</span><span className="text-sm text-text-light">{p.idealPara}</span></div>
                </div>
              </div>
            ))}

            {comparativa.veredicto && (
              <div className="bg-gradient-to-r from-primary/15 to-secondary/15 rounded-2xl p-6 md:p-8 border border-primary/20 glow-primary">
                <h3 className="text-xl font-bold text-text mb-3 flex items-center gap-2"><Star className="w-5 h-5 text-primary fill-primary" />{t("comparativa_detalle.veredicto")}</h3>
                <p className="text-text-light leading-relaxed">{comparativa.veredicto}</p>
                {comparativa.ganador && comparativa.ganador !== "N/A" && (
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-secondary-dark text-surface-dark font-bold rounded-full text-sm shadow-lg shadow-secondary/20">
                    <Star className="w-4 h-4" />{t("comparativa_detalle.ganador")}: {comparativa.ganador}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <AdSlot position="sidebar" />
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-bold text-text mb-4">{t("comparativa_detalle.resumen")}</h3>
              {comparativa.plataformas.map((p) => <div key={p.nombre} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"><span className="text-sm font-semibold text-text">{p.nombre}</span><span className="text-sm font-bold text-secondary">{p.tarifaEnvio100}</span></div>)}
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-bold text-text mb-4">{t("comparativa_detalle.relacionadas")}</h3>
              <div className="space-y-3">
                {data.comparativas.filter((c) => c.slug !== slug).slice(0, 4).map((c) => (
                  <Link key={c.slug} to={`/comparativas/${c.slug}`} className="block p-3 bg-surface-dark/50 rounded-xl hover:bg-primary/5 transition-colors border border-border/30">
                    <div className="text-sm font-semibold text-text hover:text-primary transition-colors">{c.titulo}</div>
                    <div className="text-xs text-text-lighter mt-1">{c.tiempoLectura} {t("comparativa_detalle.lectura")}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
