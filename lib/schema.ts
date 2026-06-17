import {
  businessGeo,
  businessPostalCode,
  businessStreetAddress,
  heroCoverImage,
  instagramUrl,
  phoneHref,
  siteUrl,
} from "@/lib/site"

const telephone = phoneHref.replace("tel:", "")

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "NursingHome"],
  "@id": `${siteUrl}/#organization`,
  name: "Hogar Luz",
  alternateName: "Hogar Luz Bahía Blanca",
  description:
    "Geriátrico y residencia para adultos mayores en Bahía Blanca con acompañamiento diario, actividades y ambiente familiar.",
  url: `${siteUrl}/`,
  telephone,
  image: [`${siteUrl}${heroCoverImage}`, `${siteUrl}/gallery/optimized/hogar-luz-sala-estar.jpg`],
  logo: `${siteUrl}/hogar-luz-icon.png`,
  address: {
    "@type": "PostalAddress",
    ...(businessStreetAddress ? { streetAddress: businessStreetAddress } : {}),
    addressLocality: "Bahía Blanca",
    addressRegion: "Buenos Aires",
    postalCode: businessPostalCode,
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessGeo.latitude,
    longitude: businessGeo.longitude,
  },
  areaServed: {
    "@type": "City",
    name: "Bahía Blanca",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone,
    contactType: "Consultas por disponibilidad y visitas",
    areaServed: "AR",
    availableLanguage: ["es", "es-AR"],
  },
  sameAs: [instagramUrl],
  priceRange: "$$",
  knowsAbout: [
    "Geriátrico en Bahía Blanca",
    "Residencia para adultos mayores",
    "Cuidado de adultos mayores",
  ],
}
