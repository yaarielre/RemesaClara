import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Clock, CheckCircle, DollarSign, AlertTriangle } from "lucide-react";
import AdSlot from "../components/AdSlot.jsx";
import data from "../data/comparisons.json";

const contenidoGuias = {
  "como-enviar-dinero-mexico-paso-a-paso": {
    pasos: [
      { titulo: "Paso 1: Elige tu app de envío", contenido: "Para enviar dinero a México, las mejores opciones son Remitly (más rápido), Wise (mejor tipo de cambio) y Xoom (integrado con PayPal). Compara sus tarifas reales en nuestra comparativa completa.", destinos: ["Banco (depósito)", "OXXO (efectivo)", "OxxoPay (digital)", "Bancoppel"] },
      { titulo: "Paso 2: Crea tu cuenta", contenido: "Descarga la app o entra a la web. Necesitarás: nombre completo, dirección en EE.UU., número de teléfono, y una forma de pago (tarjeta bancaria o cuenta bancaria).", tips: ["Verificar tu identidad desde el inicio para tener límites más altos", "Usar cuenta bancaria en lugar de tarjeta para ahorrar en comisiones"] },
      { titulo: "Paso 3: Ingresa los datos del destinatario", contenido: "Necesitas: nombre completo del destinatario, número de cuenta bancaria CLABE en México (18 dígitos), o dirección del OXXO más cercano si enviarás en efectivo.", tips: ["La CLABE se encuentra en la app del banco o en el estado de cuenta", "Verifica dos veces — un error puede retrasar el envío"] },
      { titulo: "Paso 4: Envía tu dinero", contenido: "Revisa el resumen: monto a enviar, tarifa de envío, tipo de cambio, y monto que recibirá tu familiar. Confirma y listo. Si usas Remitly Express, puede llegar en minutos.", tips: ["Guarda el número de rastreo (tracking number)", "Comparte el tracking con tu familiar para que pueda dar seguimiento"] },
    ],
    tips: ["Envía en días hábiles para mejor tipo de cambio", "Evita enviar en viernes por la noche — puede tardar el lunes", "Crea tu cuenta y verifica identidad con anticipación", "Compara siempre: misma cantidad de dinero en diferentes apps puede significar $10-20 de diferencia"],
  },
  "enviar-dinero-sin-comision": {
    pasos: [
      { titulo: "Opción 1: Primer envío gratis en Remitly", contenido: "Remitly ofrece el primer envío sin comisión para nuevos usuarios. Puedes enviar hasta $1,000 con tarifa $0 usando su servicio Express.", destinos: ["México", "Colombia", "Rep. Dominicana", "Guatemala"] },
      { titulo: "Opción 2: Wise sin spread", contenido: "Wise usa el tipo de cambio real del mercado (mid-market). Aunque cobra una comisión pequeña (~0.41%), no tiene spread oculto, lo que lo hace más barato para montos altos.", tips: ["Ideal para envíos superiores a $500", "El ahorro en tipo de cambio compensa la comisión"] },
      { titulo: "Opción 3: Referir amigos", contenido: "Todas las principales apps tienen programas de referidos. Si refieres a un amigo, ambos obtienen un bono (generalmente $10-20 en descuento en el siguiente envío).", tips: ["Pide a tu familia que cree su propia cuenta en EE.UU.", "Cada cuenta nueva puede ahorrar $10-20 en el primer envío"] },
    ],
    tips: ["Los mejores ahorros vienen del tipo de cambio, no de la comisión", "Envía montos más grandes y menos frecuentes para ahorrar en comisiones fijas", "Compara siempre el monto final que recibe tu familiar, no solo la tarifa"],
  },
  "enviar-dinero-urgente-efectivo": {
    pasos: [
      { titulo: "Opción 1: Remitly Express a OXXO (México)", contenido: "Remitly Express entrega dinero en minutos en cualquier OXXO de México. El destinatario solo necesita su ID y el número de rastreo.", destinos: ["OXXO — efectivo", "Banco — depósito"] },
      { titulo: "Opción 2: Western Union envío en efectivo", contenido: "Western Union puede entregar en efectivo en minutos en miles de ubicaciones a nivel mundial. Es la opción más universal para emergencias.", tips: ["Funciona incluso los fines de semana", "El destinatario necesita ID vigente"] },
      { titulo: "Opción 3: Xoom envío rápido", contenido: "Xoom (PayPal) permite enviar dinero que puede recogerse en efectivo en minutos.", tips: ["Si ya tienes saldo en PayPal, el proceso es aún más rápido"] },
    ],
    tips: ["Para emergencias, la velocidad justifica una tarifa un poco más alta", "Ten los datos del destinatario listos antes de iniciar el envío", "Guarda siempre el número de rastreo"],
  },
  "cuanto-cobra-western-union-100": {
    pasos: [
      { titulo: "Envío a México", contenido: "Western Union cobra entre $5 y $12 por enviar $100 a México, dependiendo del método de pago y entrega. El tipo de cambio tiene un spread de 2-4%, lo que significa que el destinatario recibe menos.", destinos: ["Efectivo: $5-8", "Depósito bancario: $5-7", "Online: $5-8"] },
      { titulo: "Envío a Colombia", contenido: "Para Colombia, las tarifas suben a $7-12 por $100. El spread en el tipo de cambio es similar (2-4%).", tips: ["WorldRemit o Remitly suelen ser más baratos para Colombia"] },
      { titulo: "Envío a Rep. Dominicana", contenido: "Las tarifas para Rep. Dominicana son $8-15 por $100. Western Union es particularmente caro para este destino.", tips: ["WorldRemit es la opción más económica para RD"] },
    ],
    tips: ["Western Union es generalmente la opción más cara para la mayoría de destinos", "Las tarifas varían según: método de pago, destino, y velocidad", "El costo real incluye la tarifa + el spread del tipo de cambio", "Siempre compara con al menos 2 apps antes de enviar"],
  },
  "mejores-horas-tasas-cambio": {
    pasos: [
      { titulo: "¿Cuándo está mejor el tipo de cambio?", contenido: "El tipo de cambio fluctúa constantemente. En general, los mejores momentos son: martes a jueves en la mañana (horario EST), cuando los mercados están más activos.", tips: ["Evita enviar los lunes por la mañana (alta demanda, peor tipo de cambio)"] },
      { titulo: "Días de la semana", contenido: "Los mejores días son martes, miércoles y jueves. Los viernes el tipo de cambio suele ser peor porque los mercados cierran y hay incertidumbre sobre el fin de semana." },
      { titulo: "Factores que afectan el tipo de cambio", contenido: "El tipo de cambio se afecta por: decisión de tasas de interés del Banco Central, inflación, noticias económicas, y oferta/demanda del mercado.", tips: ["No intentes 'adivinar' el mejor momento — el ahorro entre el mejor y peor momento suele ser 1-2%", "Lo más importante es enviar con una app que tenga buen tipo de cambio, no timing perfecto"] },
    ],
    tips: ["Envía entre martes y jueves por la mañana para mejor tipo de cambio", "Evita enviar en días festivos y fines de semana", "Configura alertas de tipo de cambio en tu app favorita", "El ahorro de timing es pequeño — la elección de la app importa más"],
  },
  "es-seguro-enviar-dinero-apps": {
    pasos: [
      { titulo: "Regulación y licencias", contenido: "Todas las principales apps de remesas (Remitly, Wise, Western Union, Xoom, WorldRemit) están reguladas por autoridades financieras en EE.UU. y operan bajo licencias de transmisión de dinero.", tips: ["Están reguladas por FinCEN (EE.UU.) y autoridades equivalentes en cada país"] },
      { titulo: "Protecciones para el consumidor", contenido: "Si envías dinero y hay un problema (no llega, error en los datos), las apps tienen procesos de disputa y reembolso. Algunas tienen garantía de satisfacción." },
      { titulo: "Cómo evitar estafas", contenido: "Nunca envíes dinero a alguien que no conoces personalmente. Las estafas más comunes incluyen: romance scams, loterías falsas, y supuestos familiares en problemas.", tips: ["Si alguien te pide dinero urgentemente, verifica por otro medio", "No compartas tus credenciales de la app con nadie"] },
    ],
    tips: ["Usa solo las apps oficiales (descarga desde la tienda oficial)", "Activa autenticación de dos factores (2FA)", "Nunca compartas tu contraseña con nadie", "Si algo se sospechoso, contacta soporte inmediatamente"],
  },
};

export default function GuiasDetalle() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const guia = data.guias.find((g) => g.slug === slug);
  const contenido = contenidoGuias[slug];

  if (!guia) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center bg-surface-dark min-h-screen">
        <h1 className="text-2xl font-bold text-text mb-4">Guía no encontrada</h1>
        <Link to="/guias" className="text-primary hover:underline">{t("guia_detalle.volver")}</Link>
      </div>
    );
  }

  return (
    <div className="bg-surface-dark min-h-screen">
      <section className="bg-hero py-16 md:py-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/guias" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />{t("guia_detalle.volver")}</Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/15 text-white text-xs font-semibold rounded-full">{guia.categoria}</span>
            <span className="flex items-center gap-1 text-sm text-white/60"><Clock className="w-3.5 h-3.5" />{guia.tiempoLectura} {t("guia_detalle.lectura")}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">{guia.titulo}</h1>
          <p className="text-lg text-white/70">{guia.subtitulo}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AdSlot position="banner" />
            {contenido ? (
              <>
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50"><p className="text-text-light leading-relaxed">{guia.descripcion}</p></div>
                {contenido.pasos.map((paso, i) => (
                  <div key={i} className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
                    <div className="p-6 md:p-8 border-b border-border/50">
                      <h3 className="text-xl font-bold text-text mb-3">{paso.titulo}</h3>
                      <p className="text-text-light leading-relaxed">{paso.contenido}</p>
                      {paso.destinos && <div className="mt-4 flex flex-wrap gap-2">{paso.destinos.map((d) => <span key={d} className="px-3 py-1.5 bg-primary/15 text-primary text-xs font-medium rounded-full border border-primary/20">{d}</span>)}</div>}
                      {paso.tips && <div className="mt-4 space-y-2">{paso.tips.map((tip) => <div key={tip} className="flex items-start gap-2 text-sm text-text-light"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />{tip}</div>)}</div>}
                    </div>
                  </div>
                ))}
                {contenido.tips && (
                  <div className="bg-gradient-to-r from-primary/15 to-secondary/15 rounded-2xl p-6 md:p-8 border border-primary/20 glow-primary">
                    <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2"><DollarSign className="w-5 h-5 text-primary" />{t("guia_detalle.consejos")}</h3>
                    <div className="space-y-3">{contenido.tips.map((tip) => <div key={tip} className="flex items-start gap-2 text-sm text-text-light"><CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />{tip}</div>)}</div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
                <p className="text-text-light leading-relaxed">{guia.descripcion}</p>
                <div className="mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-xl"><div className="flex items-start gap-2 text-sm text-secondary"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />{t("guia_detalle.desarrollo")}</div></div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <AdSlot position="sidebar" />
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h3 className="text-lg font-bold text-text mb-4">{t("guia_detalle.relacionadas")}</h3>
              <div className="space-y-3">
                {data.guias.filter((g) => g.slug !== slug).slice(0, 4).map((g) => (
                  <Link key={g.slug} to={`/guias/${g.slug}`} className="block p-3 bg-surface-dark/50 rounded-xl hover:bg-primary/5 transition-colors border border-border/30">
                    <div className="text-sm font-semibold text-text hover:text-primary transition-colors">{g.titulo}</div>
                    <div className="text-xs text-text-lighter mt-1">{g.tiempoLectura} {t("guia_detalle.lectura")}</div>
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
