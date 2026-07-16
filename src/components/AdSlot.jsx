export default function AdSlot({ position = "banner", className = "" }) {
  const sizes = {
    banner: "h-24 md:h-32",
    sidebar: "h-64 md:h-80",
    inline: "h-48 md:h-64",
    footer: "h-20 md:h-24",
  };

  return (
    <div
      className={`ad-slot ${sizes[position]} ${className}`}
      data-ad-slot={position}
      role="complementary"
      aria-label="Publicidad"
    >
      <span className="opacity-40">Espacio Publicitario</span>
    </div>
  );
}
