import { useTranslation } from "react-i18next";
import { Shield, FileText, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Legal() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("comparativa_detalle.volver")}
        </Link>

        <div className="space-y-16">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-text">
                {t("legal.privacidad_t")}
              </h1>
            </div>
            <div className="space-y-6 text-text-light leading-relaxed">
              <p>{t("legal.privacidad_p1")}</p>
              <h2 className="text-xl font-semibold text-text mt-8">
                {t("legal.privacidad_h1")}
              </h2>
              <p>{t("legal.privacidad_p2")}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t("legal.privacidad_li1")}</li>
                <li>{t("legal.privacidad_li2")}</li>
                <li>{t("legal.privacidad_li3")}</li>
              </ul>
              <h2 className="text-xl font-semibold text-text mt-8">
                {t("legal.privacidad_h2")}
              </h2>
              <p>{t("legal.privacidad_p3")}</p>
              <h2 className="text-xl font-semibold text-text mt-8">
                {t("legal.privacidad_h3")}
              </h2>
              <p>{t("legal.privacidad_p4")}</p>
              <h2 className="text-xl font-semibold text-text mt-8">
                {t("legal.privacidad_h4")}
              </h2>
              <p>{t("legal.privacidad_p5")}</p>
            </div>
          </section>

          <hr className="border-border/60" />

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-text">
                {t("terminos.terminos_t")}
              </h2>
            </div>
            <div className="space-y-6 text-text-light leading-relaxed">
              <p>{t("terminos.terminos_p1")}</p>
              <h3 className="text-xl font-semibold text-text mt-8">
                {t("legal.terminos_h1")}
              </h3>
              <p>{t("terminos.terminos_p2")}</p>
              <h3 className="text-xl font-semibold text-text mt-8">
                {t("terminos.terminos_h2")}
              </h3>
              <p>{t("terminos.terminos_p3")}</p>
              <h3 className="text-xl font-semibold text-text mt-8">
                {t("terminos.terminos_h3")}
              </h3>
              <p>{t("terminos.terminos_p4")}</p>
              <h3 className="text-xl font-semibold text-text mt-8">
                {t("terminos.terminos_h4")}
              </h3>
              <p>{t("terminos.terminos_p5")}</p>
            </div>
          </section>

          <hr className="border-border/60" />

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-text">
                {t("aviso.aviso_t")}
              </h2>
            </div>
            <div className="space-y-6 text-text-light leading-relaxed">
              <p>{t("aviso.aviso_p1")}</p>
              <p>{t("aviso.aviso_p2")}</p>
              <p>{t("aviso.aviso_p3")}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
