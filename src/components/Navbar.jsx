import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import logo from "../assets/logo.jpg";

const navLinks = [
  { key: "inicio", path: "/" },
  {
    key: "comparativas",
    path: "/comparativas",
    submenu: [
      { key: "sub_remitly_wu", path: "/comparativas/remitly-vs-western-union" },
      { key: "sub_wise_remitly", path: "/comparativas/wise-vs-remitly" },
      { key: "sub_enviar_mexico", path: "/comparativas/mejores-apps-enviar-dinero-mexico" },
      { key: "sub_enviar_colombia", path: "/comparativas/mejores-apps-enviar-dinero-colombia" },
      { key: "sub_enviar_rd", path: "/comparativas/mejores-apps-enviar-dinero-republica-dominicana" },
    ],
  },
  {
    key: "guias",
    path: "/guias",
    submenu: [
      { key: "sub_guia_mexico", path: "/guias/como-enviar-dinero-mexico-paso-a-paso" },
      { key: "sub_guia_comision", path: "/guias/enviar-dinero-sin-comision" },
      { key: "sub_guia_urgente", path: "/guias/enviar-dinero-urgente-efectivo" },
      { key: "sub_guia_wu", path: "/guias/cuanto-cobra-western-union-100" },
    ],
  },
  { key: "contacto", path: "/contacto" },
];

const languages = [
  { code: "es", label: "ES", flag: "\u{1F1EA}\u{1F1F8}" },
  { code: "en", label: "EN", flag: "\u{1F1FA}\u{1F1F8}" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isActive = (path) => location.pathname === path;
  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const switchLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-surface-dark/90 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="RemesaClara" className="h-10 w-auto rounded-lg object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.key}
                className="relative"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.key)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path) ? "text-primary bg-primary/10" : "text-text-light hover:text-text hover:bg-white/5"}`}
                >
                  {t(`nav.${link.key}`)}
                  {link.submenu && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openSubmenu === link.key ? "rotate-180" : ""}`} />}
                </Link>
                {link.submenu && openSubmenu === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-xl shadow-xl border border-border/60 py-2 animate-fade-in-up">
                    {link.submenu.map((sub) => (
                      <Link key={sub.key} to={sub.path} className="block px-4 py-2.5 text-sm text-text-light hover:text-primary hover:bg-primary/5 transition-colors">
                        {t(`nav.${sub.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-text-light hover:text-text hover:bg-white/5 transition-all border border-border/40">
                <Globe className="w-4 h-4" />
                <span>{currentLang.flag}</span>
                <span className="text-xs">{currentLang.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 w-36 bg-card rounded-xl shadow-xl border border-border/60 py-1 animate-fade-in-up">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLang(l.code)}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${i18n.language === l.code ? "text-primary bg-primary/10 font-semibold" : "text-text-light hover:text-primary hover:bg-primary/5"}`}
                    >
                      <span>{l.flag}</span>
                      <span>{t(`lang.${l.code}`)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#newsletter" className="px-4 py-2 bg-gradient-to-r from-secondary to-secondary-dark text-surface-dark text-sm font-bold rounded-lg hover:from-secondary-light hover:to-secondary transition-all shadow-lg shadow-secondary/20">
              {t("nav.recibirOfertas")}
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-text-light hover:bg-white/5 transition-colors" aria-label="Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/60 bg-surface-dark animate-fade-in-up">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.key}>
                <Link to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.path) ? "text-primary bg-primary/10" : "text-text-light hover:text-text hover:bg-white/5"}`}>
                  {t(`nav.${link.key}`)}
                </Link>
                {link.submenu && (
                  <div className="pl-4">
                    {link.submenu.map((sub) => (
                      <Link key={sub.key} to={sub.path} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-xs text-text-lighter hover:text-primary transition-colors">
                        {t(`nav.${sub.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="px-4 py-3 border-t border-border/30 mt-2 pt-4">
              <div className="text-xs text-text-lighter mb-2 font-semibold uppercase tracking-wider">{t("nav.inicio") === "Inicio" ? "Idioma" : "Language"}</div>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { i18n.changeLanguage(l.code); setIsOpen(false); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${i18n.language === l.code ? "bg-primary/15 text-primary border border-primary/20" : "bg-card text-text-light border border-border/50"}`}
                  >
                    <span>{l.flag}</span>
                    <span>{t(`lang.${l.code}`)}</span>
                  </button>
                ))}
              </div>
            </div>

            <a href="#newsletter" onClick={() => setIsOpen(false)} className="block text-center mt-4 px-4 py-3 bg-gradient-to-r from-secondary to-secondary-dark text-surface-dark text-sm font-bold rounded-lg">
              {t("nav.recibirOfertas")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}