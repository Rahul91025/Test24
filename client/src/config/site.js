export const phone = import.meta.env.VITE_PHONE || "917004237090";
export const displayPhone = import.meta.env.VITE_DISPLAY_PHONE || "+91 70042 37090";
export const mapsUrl = import.meta.env.VITE_MAPS_URL || "https://maps.google.com/?q=Chaibasa%2C%20Jharkhand";
export const mapEmbed =
  import.meta.env.VITE_MAP_EMBED_URL ||
  "https://www.google.com/maps?q=Chaibasa%2C%20Jharkhand&output=embed";
export const whatsappLink = (message = "Hello Gupta Electronics & Electricals, I need an electrical service.") =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
