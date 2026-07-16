import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, ArrowRight, Shield, Heart } from "lucide-react";
import logo from "../assets/logo.jpg";

const comparativasLinks = [
  { key: "sub_remitly_wu", path: "/comparativas/remitly-vs-western-union" },
  { key: "sub_wise_remitly", path: "/comparativas/wise-vs-remitly" },
  { key: "sub_enviar_mexico", path: "/comparativas/mejores-apps-enviar-dinero-mexico" },
  { key: "sub_enviar_colombia", path: "/comparativas/mejores-apps-enviar-dinero-colombia" },
  { key: "sub_enviar_rd", path: "/comparativas/mejores-apps-enviar-dinero-republica-dominicana" },
];

const guiasLinks = [
  { key: "sub_guia_mexico", path: "/guias/como-enviar-dinero-mexico-paso-a-paso" },
  { key: "sub_guia_comision", path: "/guias/enviar-dinero-sin-comision" },
  { key: "sub_guia_urgente", path: "/guias/enviar-dinero-urgente-efectivo" },
  { key: "sub_guia_wu", path: "/guias/cuanto-cobra-western-union-100" },
  { key: "sub_guia_horas", path: "/guias/mejores-horas-tasas-cambio" },
];

const paisesLinks = [
  { key: "mexico", flag: "\u{1F1F2}\u{1F1FD}", slug: "mexico" },
  { key: "colombia", flag: "\u{1F1E8}\u{1F1F4}", slug: "colombia" },
  { key: "rd", flag: "\u{1F1E9}\u{1F1F4}", slug: "republica-dominicana" },
  { key: "guatemala", flag: "\u{1F1EC}\u{1F1F9}", slug: "guatemala" },
  { key: "el_salvador", flag: "\u{1F1F8}\u{1F1FB}", slug: "el-salvador" },
  { key: "honduras", flag: "\u{1F1ED}\u{1F1F7}", slug: "honduras" },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-dark text-text border-t border-border/60">
      <div id="newsletter" className="bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/10 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text">{t("footer.newsletter_t")}</h3>
                <p className="text-sm text-text-light">{t("footer.newsletter_p")}</p>
              </div>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={t("footer.email_p")} className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-card text-text placeholder-text-lighter border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all" />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl hover:from-primary-light hover:to-primary transition-all text-sm flex items-center gap-2 whitespace-nowrap shadow-lg shadow-primary/20">
                {t("footer.suscribirme")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="RemesaClara" className="h-10 w-auto rounded-lg object-contain" />
            </Link>
            <p className="text-sm text-text-light leading-relaxed">{t("footer.descripcion")}</p>
            <div className="flex items-center gap-2 mt-4 text-xs text-text-lighter">
              <Shield className="w-4 h-4" />
              <span>{t("footer.verificada")}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-text uppercase tracking-wider mb-4">{t("footer.comparativas")}</h4>
            <ul className="space-y-2">
              {comparativasLinks.map((link) => (
                <li key={link.key}>
                  <Link to={link.path} className="text-sm text-text-light hover:text-primary transition-colors">
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-text uppercase tracking-wider mb-4">{t("footer.guias")}</h4>
            <ul className="space-y-2">
              {guiasLinks.map((link) => (
                <li key={link.key}>
                  <Link to={link.path} className="text-sm text-text-light hover:text-primary transition-colors">
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-text uppercase tracking-wider mb-4">{t("footer.envios_pais")}</h4>
            <ul className="space-y-2">
              {paisesLinks.map((pais) => (
                <li key={pais.slug}>
                  <Link to={`/comparativas/mejores-apps-enviar-dinero-${pais.slug}`} className="text-sm text-text-light hover:text-primary transition-colors flex items-center gap-2">
                    <span>{pais.flag}</span>
                    {t(`paises.${pais.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-lighter">&copy; 2026 RemesaClara. {t("footer.derechos")}</p>
            <div className="flex items-center gap-6 text-xs text-text-lighter">
              <Link to="/contacto" className="hover:text-primary transition-colors">{t("footer.privacidad")}</Link>
              <Link to="/contacto" className="hover:text-primary transition-colors">{t("footer.terminos")}</Link>
              <Link to="/contacto" className="hover:text-primary transition-colors">{t("footer.contacto")}</Link>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-1 text-xs text-text-lighter">
            <span>{t("footer.hecho")}</span>
            <Heart className="w-3 h-3 text-danger fill-danger" />
            <span>{t("footer.para")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}