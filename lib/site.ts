export const siteUrl = "https://www.hogarluzbahia.com"

export const seoTitle = "Geriátrico en Bahía Blanca | Hogar Luz"
export const seoDescription =
  "Residencia para adultos mayores en Bahía Blanca con cuidado diario, actividades y ambiente familiar. Consultá disponibilidad en Hogar Luz, Zona Centro."

export const landingSeoTitle = "Geriátrico en Bahía Blanca | Hogar Luz"
export const landingSeoDescription =
  "Hogar geriátrico en Bahía Blanca con trato familiar, acompañamiento diario y actividades. Consultá disponibilidad en Hogar Luz, Zona Centro."

/** Completar cuando el cliente confirme publicar la dirección exacta en web y schema. */
export const businessStreetAddress = ""
export const businessPostalCode = "8000"
export const businessGeo = {
  latitude: -38.7196,
  longitude: -62.2724,
}
export const visitPolicyNote = "Visitas únicamente con turno previo por WhatsApp."

export const whatsappPhone = "5492914417951"
export const whatsappUrl = `https://wa.me/${whatsappPhone}`

export type WhatsappTopicId = "disponibilidad" | "visita" | "informacion"

export const whatsappTopics: Array<{ id: WhatsappTopicId; label: string; message: string }> = [
  {
    id: "disponibilidad",
    label: "Disponibilidad",
    message: "Hola, quisiera consultar disponibilidad en Hogar Luz (Bahía Blanca).",
  },
  {
    id: "visita",
    label: "Coordinar visita",
    message: "Hola, me gustaría coordinar una visita o consulta en Hogar Luz.",
  },
  {
    id: "informacion",
    label: "Información general",
    message: "Hola, quisiera recibir más información sobre Hogar Luz para adultos mayores.",
  },
]

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
}
export const phoneHref = "tel:+5492914417951"
export const phoneLabel = "+54 9 2914 41-7951"

export const mapsUrl =
  "https://www.google.com/maps/place/Rondeau+350,+B8000FZH+Bah%C3%ADa+Blanca,+Provincia+de+Buenos+Aires/@-38.7207383,-62.275666,17z/data=!3m1!4b1!4m6!3m5!1s0x95edbcb06a3237ad:0x3b56377572ab88e9!8m2!3d-38.7207425!4d-62.2730911!16s%2Fg%2F11r_gthmz9?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"

export const locationLabel = "Zona Centro, Bahía Blanca"
export const instagramUrl = "https://www.instagram.com/hogar_luz/"

export const heroImage = "/gallery/optimized/hogar-luz-acompanamiento.jpg"
export const heroCoverImage = "/images/hero-portada.png"
export const heroCoverWidth = 1024
export const heroCoverHeight = 576

export type SitePhoto = {
  src: string
  alt: string
  title: string
  caption: string
  width: number
  height: number
  objectPosition?: string
}

/** Orden visual: convivencia → descanso → actividades */
export const galleryPhotos: SitePhoto[] = [
  {
    src: "/gallery/optimized/hogar-luz-sala-estar.jpg",
    alt: "Sala de estar del geriátrico Hogar Luz en Bahía Blanca",
    title: "Espacios para compartir",
    caption: "Sala común del hogar, preparada para la convivencia cotidiana.",
    width: 1400,
    height: 1050,
    objectPosition: "object-[center_54%]",
  },
  {
    src: "/gallery/optimized/hogar-luz-habitacion.jpg",
    alt: "Habitación de la residencia para adultos mayores Hogar Luz, Bahía Blanca",
    title: "Descanso y comodidad",
    caption: "Espacios pensados para el descanso diario dentro del hogar.",
    width: 1400,
    height: 1050,
    objectPosition: "object-center",
  },
  {
    src: "/gallery/optimized/hogar-luz-actividades.jpg",
    alt: "Actividades recreativas en el geriátrico Hogar Luz, Bahía Blanca",
    title: "Momentos de actividad",
    caption: "Propuestas que acompañan el bienestar físico, cognitivo y emocional.",
    width: 1400,
    height: 1050,
    objectPosition: "object-[center_48%]",
  },
]

export const galleryPhotosWithPatio: SitePhoto[] = [
  galleryPhotos[0],
  {
    src: "/gallery/optimized/hogar-luz-patio.jpg",
    alt: "Patio exterior de Hogar Luz en la zona Centro de Bahía Blanca",
    title: "Patio y aire libre",
    caption: "Un espacio abierto para descansar y tomar aire.",
    width: 1400,
    height: 1050,
    objectPosition: "object-[center_52%]",
  },
  galleryPhotos[2],
]

export const habitacionPhoto: SitePhoto = {
  src: "/gallery/optimized/hogar-luz-habitacion.jpg",
  alt: "Habitación del hogar geriátrico Hogar Luz en Bahía Blanca",
  title: "Descanso y comodidad",
  caption: "Espacios pensados para el descanso diario dentro del hogar.",
  width: 1400,
  height: 1050,
  objectPosition: "object-center",
}

export function focusRingClass() {
  return "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6653A]"
}

export function jsonLdScript(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
