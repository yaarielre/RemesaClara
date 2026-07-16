import { useTranslation } from "react-i18next";
import { Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import AdSlot from "../components/AdSlot.jsx";

export default function Contacto() {
  const { t } = useTranslation();

  return (
    <div className="bg-surface-dark min-h-screen">
      <section className="bg-hero py-16 md:py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t("contacto.titulo")}</h1>
            <p className="text-lg text-white/70">{t("contacto.subtitulo")}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h2 className="text-xl font-bold text-text mb-6">{t("contacto.info_t")}</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20"><Mail className="w-5 h-5 text-primary" /></div>
                  <div><div className="text-sm font-semibold text-text">{t("contacto.correo")}</div><div className="text-sm text-text-light">hola@remesaclara.com</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><div className="text-sm font-semibold text-text">{t("contacto.ubicacion")}</div><div className="text-sm text-text-light">{t("contacto.ubicacion_v")}</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20"><Clock className="w-5 h-5 text-primary" /></div>
                  <div><div className="text-sm font-semibold text-text">{t("contacto.horario")}</div><div className="text-sm text-text-light">{t("contacto.horario_v")}</div></div>
                </div>
              </div>
            </div>

            <AdSlot position="sidebar" />

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-bold text-text mb-3">{t("contacto.contenido_t")}</h3>
              <ul className="space-y-2 text-sm text-text-light">
                {[t("contacto.c1"), t("contacto.c2"), t("contacto.c3"), t("contacto.c4")].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
              <h2 className="text-xl font-bold text-text mb-6 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-primary" />{t("contacto.form_t")}</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-semibold text-text mb-2">{t("contacto.nombre")}</label><input type="text" placeholder={t("contacto.nombre_p")} className="w-full px-4 py-3 bg-surface-dark border border-border rounded-xl text-sm text-text placeholder-text-lighter focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" /></div>
                  <div><label className="block text-sm font-semibold text-text mb-2">{t("contacto.email")}</label><input type="email" placeholder={t("contacto.email_p")} className="w-full px-4 py-3 bg-surface-dark border border-border rounded-xl text-sm text-text placeholder-text-lighter focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" /></div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">{t("contacto.asunto")}</label>
                  <select className="w-full px-4 py-3 bg-surface-dark border border-border rounded-xl text-sm text-text focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                    <option value="">{t("contacto.asunto_sel")}</option>
                    <option value="pregunta">{t("contacto.asunto_1")}</option>
                    <option value="sugerencia">{t("contacto.asunto_2")}</option>
                    <option value="colaboracion">{t("contacto.asunto_3")}</option>
                    <option value="error">{t("contacto.asunto_4")}</option>
                    <option value="otro">{t("contacto.asunto_5")}</option>
                  </select>
                </div>
                <div><label className="block text-sm font-semibold text-text mb-2">{t("contacto.mensaje")}</label><textarea rows={6} placeholder={t("contacto.mensaje_p")} className="w-full px-4 py-3 bg-surface-dark border border-border rounded-xl text-sm text-text placeholder-text-lighter focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" /></div>
                <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl hover:from-primary-light hover:to-primary transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  <Send className="w-4 h-4" />{t("contacto.enviar")}
                </button>
              </form>
            </div>

            <div className="mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
              <p className="text-xs text-secondary leading-relaxed"><strong>Aviso:</strong> {t("contacto.aviso")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
