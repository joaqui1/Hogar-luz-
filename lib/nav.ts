import type { NavItem } from "@/components/site/site-header"

export const homeNavItems: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#cuidado", label: "Cuidado" },
  { href: "#servicios", label: "Servicios" },
  { href: "#fotos", label: "Galería" },
  { href: "#consulta", label: "Consulta" },
  { href: "/geriatrico-bahia-blanca", label: "Geriátrico", isPage: true },
  { href: "#consulta", label: "Contacto" },
]

export const landingNavItems: NavItem[] = [
  { href: "#decision", label: "Qué buscar" },
  { href: "#ofrece", label: "Qué ofrece" },
  { href: "#fotos", label: "Fotos" },
  { href: "#consulta", label: "Consulta" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "/", label: "Inicio", isPage: true },
]
