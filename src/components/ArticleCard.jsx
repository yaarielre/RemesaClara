import { Link } from "react-router-dom";
import { Clock, ArrowRight, Smartphone, Shield, Clock3 } from "lucide-react";

const guiaVisuals = {
  "como-enviar-dinero-mexico-paso-a-paso": {
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png",
    ],
    gradient: "from-emerald-600/25 via-green-500/10 to-red-500/10",
    flag: "🇲🇽",
    icon: Smartphone,
    iconColor: "text-emerald-400",
    accent: "#10B981",
  },
  "enviar-dinero-sin-comision": {
    images: [
      "https://panorama.com.do/wp-content/uploads/2025/03/remesas-familiares-2017-e1741789414479.jpg",
    ],
    gradient: "from-primary/25 via-cyan-500/10 to-secondary/10",
    flag: "💸",
    icon: Smartphone,
    iconColor: "text-primary",
    accent: "#06B6D4",
  },
  "enviar-dinero-urgente-efectivo": {
    images: [
      "https://thumbs.dreamstime.com/b/cr%C3%A9dito-en-dinero-r%C3%A1pido-concepto-32574066.jpg",
    ],
    gradient: "from-orange-500/25 via-red-500/10 to-yellow-500/10",
    flag: "⚡",
    icon: Smartphone,
    iconColor: "text-orange-400",
    accent: "#F97316",
  },
  "cuanto-cobra-western-union-100": {
    images: [
      "https://cdn0.uncomo.com/es/posts/2/4/6/como_hacer_un_pago_por_western_union_24642_600.jpg",
    ],
    gradient: "from-yellow-500/25 via-amber-500/10 to-red-500/10",
    flag: "💰",
    icon: Smartphone,
    iconColor: "text-yellow-400",
    accent: "#EAB308",
  },
  "mejores-horas-tasas-cambio": {
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_Time_Zones_Map.svg/langes-500px-World_Time_Zones_Map.svg.png",
    ],
    gradient: "from-primary/25 via-cyan-500/10 to-blue-500/10",
    flag: "📊",
    icon: Clock3,
    iconColor: "text-primary",
    accent: "#06B6D4",
  },
  "es-seguro-enviar-dinero-apps": {
    images: [
      "https://revistaseguridad360.com/wp-content/uploads/2021/10/Que-es-Seguridad-scaled.jpg",
    ],
    gradient: "from-purple-500/25 via-indigo-500/10 to-primary/10",
    flag: "🛡️",
    icon: Shield,
    iconColor: "text-purple-400",
    accent: "#A855F7",
  },
};

const defaultVisual = {
  gradient: "from-primary/20 via-primary/5 to-secondary/10",
  flag: "📖",
  icon: Smartphone,
  iconColor: "text-primary",
  accent: "#06B6D4",
};

export default function ArticleCard({ article, type = "guia" }) {
  const basePath = type === "guia" ? "/guias" : "/comparativas";
  const visual = guiaVisuals[article.slug] || defaultVisual;
  const Icon = visual.icon;

  return (
    <Link
      to={`${basePath}/${article.slug}`}
      className="group block bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border/50 overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={`relative h-44 bg-gradient-to-br ${visual.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
        {visual.images && visual.images.length > 0 ? (
          visual.images.length === 1 ? (
            <img
              src={visual.images[0]}
              alt={visual.flag}
              className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 relative z-0"
            />
          ) : (
            <div className="w-full h-full grid grid-cols-2 gap-0.5 relative z-0">
              {visual.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${visual.flag} ${i + 1}`}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                />
              ))}
            </div>
          )
        ) : (
          <span className="text-7xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 relative z-0 select-none">
            {visual.flag}
          </span>
        )}
        <div className="absolute top-4 right-4 z-20">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10"
            style={{ background: `${visual.accent}25` }}
          >
            <Icon className={`w-5 h-5 ${visual.iconColor}`} />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <span className="px-3 py-1 bg-surface-dark/70 backdrop-blur-sm text-text text-xs font-bold rounded-full border border-border/30">
            {article.categoria}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors leading-snug mb-2">
          {article.titulo}
        </h3>
        <p className="text-sm text-text-light line-clamp-2 mb-4">
          {article.subtitulo}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-border/30">
          <span className="flex items-center gap-1 text-xs text-text-lighter">
            <Clock className="w-3 h-3" />
            {article.tiempoLectura}
            <span className="mx-1">·</span>
            {new Date(article.fechaActualizacion).toLocaleDateString("es-ES")}
          </span>
          <ArrowRight className="w-4 h-4 text-text-lighter group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
