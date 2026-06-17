import {
  Activity,
  Brain,
  CheckCircle2,
  Heart,
  Home,
  MapPin,
  Phone,
  Shield,
  Stethoscope,
  type LucideIcon,
  Users,
} from "lucide-react"
import { HomeHero } from "@/components/site/home-hero"
import { PhotoGallery } from "@/components/site/photo-gallery"
import { SectionIntro } from "@/components/site/section-intro"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { WhatsappConsult } from "@/components/site/whatsapp-consult"
import { homeNavItems } from "@/lib/nav"
import { focusRingClass, galleryPhotos, mapsUrl, phoneHref, phoneLabel } from "@/lib/site"

const whyChooseCards: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Home,
    title: "Ambiente familiar y cálido",
    description:
      "Creamos un verdadero hogar donde cada residente se siente parte de una gran familia, con calidez, respeto y presencia cotidiana.",
  },
  {
    icon: Shield,
    title: "Atención integral profesional",
    description:
      "Acompañamiento diario y seguimiento de bienestar con profesionales y servicios pensados para la rutina de adultos mayores.",
  },
  {
    icon: Users,
    title: "Comunicación cercana con familias",
    description:
      "Mantenemos un vínculo claro y cercano con las familias para conversar dudas, necesidades y próximos pasos con tranquilidad.",
  },
]

const wellbeingServices: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: Stethoscope,
    title: "Médico",
    description: "Atención médica profesional y seguimiento de la salud de los residentes.",
  },
  {
    icon: Heart,
    title: "Enfermería",
    description: "Cuidado cotidiano con personal capacitado para acompañar necesidades diarias.",
  },
  {
    icon: Shield,
    title: "Emergencias",
    description: "Servicio de emergencias disponible para responder ante situaciones de salud.",
  },
  {
    icon: Brain,
    title: "Psicopedagogía",
    description: "Talleres para estimular, sostener y acompañar funciones cognitivas.",
  },
  {
    icon: Activity,
    title: "Kinesiología",
    description: "Terapia física y rehabilitación para acompañar movilidad, fuerza y comodidad.",
  },
  {
    icon: Brain,
    title: "Terapia ocupacional",
    description: "Actividades terapéuticas orientadas a mantener independencia y calidad de vida.",
  },
  {
    icon: CheckCircle2,
    title: "Maestra",
    description: "Actividades educativas y de estimulación adaptadas a cada residente.",
  },
  {
    icon: Users,
    title: "Música y actividades",
    description: "Propuestas recreativas y musicales para el bienestar emocional y social.",
  },
  {
    icon: Heart,
    title: "Pedicura",
    description: "Cuidado podológico para acompañar comodidad, higiene y bienestar.",
  },
]

const mapEmbedUrl =
  "https://www.google.com/maps?q=Rondeau%20350%2C%20Bah%C3%ADa%20Blanca%2C%20Buenos%20Aires%2C%20Argentina&z=16&output=embed"

export default function HogarLuzPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCFBF7] text-[#17363A]">
      <a
        href="#contenido"
        className="sr-only rounded-md bg-white px-4 py-3 text-sm font-bold text-[#17363A] shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Saltar al contenido
      </a>

      <SiteHeader navItems={homeNavItems} />

      <main id="contenido" className="pt-16">
        <HomeHero />

        <section id="cuidado" className="scroll-mt-24 section-alt section-pad">
          <span id="servicios" className="block scroll-mt-24" aria-hidden="true" />
          <div className="site-container">
            <SectionIntro eyebrow="Por qué elegirnos" title="Más de 8 años cuidando y acompañando a nuestros abuelos">
              Experiencia, calidez y acompañamiento integral para que cada residente viva el día a día en un entorno
              familiar, cuidado y profesional.
            </SectionIntro>

            <div className="grid gap-4 lg:grid-cols-3">
              {whyChooseCards.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-[#E7DED2] bg-[#FFFDF8] p-6 shadow-[0_12px_32px_rgba(23,54,58,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F2EE] text-[#215E5B]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#17363A]">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#52676A]">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#E7DED2] bg-[#FFFDF8] p-6 shadow-[0_16px_44px_rgba(23,54,58,0.05)] md:p-8">
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#B85F39] sm:text-sm">
                  Servicios de salud y bienestar
                </p>
                <h3 className="mt-3 font-heading text-display-sm font-bold text-[#17363A]">
                  Equipo multidisciplinario para acompañar cada rutina
                </h3>
                <p className="mt-3 text-base leading-7 text-[#52676A] md:text-lg">
                  Médico, enfermería, emergencias, psicopedagogía, kinesiología, terapia ocupacional, maestra, música,
                  actividades y pedicura.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {wellbeingServices.map(({ icon: Icon, title, description }) => (
                  <article key={title} className="rounded-xl border border-[#ECE4D8] bg-[#FCFBF7] p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F2EE] text-[#215E5B]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-[#17363A]">{title}</h4>
                        <p className="mt-1 text-sm leading-6 text-[#52676A]">{description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="fotos" className="scroll-mt-24 section-warm section-pad">
          <div className="site-container">
            <SectionIntro eyebrow="Momentos del hogar" title="Fotos reales para conocer espacios y rutinas">
              Algunos espacios del hogar y momentos de actividad para que la familia pueda mirar el lugar con más calma
              antes de consultar.
            </SectionIntro>
            <PhotoGallery photos={galleryPhotos} />
          </div>
        </section>

        <section id="consulta" className="scroll-mt-24 section-surface section-pad">
          <div className="site-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#B85F39] sm:text-sm">Cómo consultar</p>
              <h2 className="mt-3 font-heading text-display font-bold text-[#17363A]">
                Consultá disponibilidad o coordiná una visita
              </h2>
              <div className="mt-6 grid gap-3 text-sm font-extrabold text-[#17363A] sm:text-base">
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-[#215E5B]" aria-hidden="true" />
                  Rondeau 350, Bahía Blanca
                </p>
                <a href={phoneHref} className={`${focusRingClass()} flex items-center gap-2 text-[#215E5B]`}>
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {phoneLabel}
                </a>
              </div>
              <div className="mt-7 max-w-md rounded-xl border border-[#E7DED2] bg-[#FBF7EF] p-5 shadow-[0_10px_28px_rgba(23,54,58,0.04)]">
                <WhatsappConsult showTopics={false} showPhoneLink={false} />
              </div>
            </div>

            <article className="overflow-hidden rounded-2xl border border-[#E7DED2] bg-[#FFFDF8] shadow-[0_16px_44px_rgba(23,54,58,0.08)]">
              <iframe
                title="Mapa de Hogar Luz en Rondeau 350, Bahía Blanca"
                src={mapEmbedUrl}
                className="h-[320px] w-full border-0 md:h-[390px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-col gap-3 border-t border-[#E7DED2] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#17363A]">Hogar Luz en el mapa</h3>
                  <p className="mt-1 text-sm leading-6 text-[#52676A]">Rondeau 350, Bahía Blanca.</p>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRingClass()} inline-flex items-center justify-center gap-2 rounded-full border border-[#C9CCB6] bg-white px-5 py-3 text-sm font-bold text-[#215E5B] hover:bg-[#F8F4E8]`}
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Abrir en Google Maps
                </a>
              </div>
            </article>
          </div>
        </section>

      </main>

      <SiteFooter
        navItems={homeNavItems}
        extraLinks={[{ href: "/geriatrico-bahia-blanca", label: "Geriátrico Bahía Blanca" }]}
      />
    </div>
  )
}
