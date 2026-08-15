import type { Metadata } from "next"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader, type NavItem } from "@/components/site/site-header"
import { siteUrl } from "@/lib/site"

const pageUrl = `${siteUrl}/desarrollo-web`
const alturaProjectUrl = "https://www.alturadev.com/proyectos/hogar-luz"

const pageNavItems: NavItem[] = [
  { href: "/#inicio", label: "Inicio", isPage: true },
  { href: "/#cuidado", label: "Cuidado", isPage: true },
  { href: "/#servicios", label: "Servicios", isPage: true },
  { href: "/#fotos", label: "Galería", isPage: true },
  { href: "/#consulta", label: "Consulta", isPage: true },
  { href: "/geriatrico-bahia-blanca", label: "Geriátrico", isPage: true },
  { href: "/#consulta", label: "Contacto", isPage: true },
]

export const metadata: Metadata = {
  title: "Desarrollo web | Hogar Luz",
  description:
    "El sitio web de Hogar Luz fue desarrollado por Altura Software, con foco en una experiencia clara, cálida y accesible.",
  alternates: {
    canonical: "/desarrollo-web",
  },
  openGraph: {
    title: "Desarrollo web | Hogar Luz",
    description: "El sitio web de Hogar Luz fue desarrollado por Altura Software.",
    url: pageUrl,
    type: "website",
    locale: "es_AR",
  },
}

export default function DesarrolloWebPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCFBF7] text-[#17363A]">
      <SiteHeader navItems={pageNavItems} homeHref="/#inicio" />

      <main className="pt-16 lg:pt-24">
        <section className="section-alt section-pad">
          <div className="site-container">
            <div className="mx-auto max-w-4xl py-6 md:py-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#B85F39] sm:text-sm">
                Desarrollo web
              </p>
              <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-[#17363A] md:text-6xl">
                Sitio web desarrollado por Altura Software
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52676A]">
                La presencia digital de Hogar Luz fue desarrollada por Altura Software, respetando la identidad cálida del hogar y priorizando una navegación clara, accesible y simple para las familias.
              </p>

              <article className="mt-10 rounded-2xl border border-[#E7DED2] bg-[#FFFDF8] p-6 shadow-[0_16px_44px_rgba(23,54,58,0.05)] md:mt-14 md:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#B85F39] sm:text-sm">
                  Proyecto digital
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold text-[#17363A] md:text-3xl">
                  Hogar Luz × Altura Software
                </h2>
                <p className="mt-4 text-base leading-7 text-[#52676A]">
                  El proyecto contempló el desarrollo del sitio web de Hogar Luz y su adaptación para comunicar de forma cercana sus servicios, espacios y canales de consulta en Bahía Blanca.
                </p>
                <p className="mt-5 text-base leading-7 text-[#52676A]">
                  Conocé el proyecto realizado por{" "}
                  <a
                    href={alturaProjectUrl}
                    className="font-extrabold text-[#215E5B] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-75"
                  >
                    Altura Software
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter navItems={pageNavItems} />
    </div>
  )
}
