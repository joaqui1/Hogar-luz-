"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  Brain,
  CheckCircle2,
  Heart,
  MapPin,
  Phone,
  Users,
  type LucideIcon,
} from "lucide-react"
import { ConsultaActions } from "@/components/site/consulta-actions"
import { HeroBenefits } from "@/components/site/hero-benefits"
import { WhatsappConsult } from "@/components/site/whatsapp-consult"
import { FaqSection, type FaqItem } from "@/components/site/faq-section"
import { FinalCta } from "@/components/site/final-cta"
import { PhotoGallery } from "@/components/site/photo-gallery"
import { SectionIntro } from "@/components/site/section-intro"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { landingNavItems } from "@/lib/nav"
import {
  focusRingClass,
  galleryPhotosWithPatio,
  heroImage,
  jsonLdScript,
  locationLabel,
  phoneHref,
  phoneLabel,
} from "@/lib/site"

const decisionPoints = [
  "Cómo es el trato cotidiano con quienes viven en el hogar",
  "Qué tan clara es la comunicación con la familia",
  "Qué servicios y acompañamiento ofrece cada día",
  "Cómo son los espacios y las actividades",
  "Dónde está ubicado y si conviene visitarlo antes de decidir",
]

const offers: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Heart,
    title: "Atención integral",
    description: "Acompañamiento en la vida diaria con servicios de salud presentes en la propuesta del hogar.",
  },
  {
    icon: Activity,
    title: "Acompañamiento diario",
    description: "Presencia y cuidado cotidiano para sostener rutinas, comodidad y bienestar.",
  },
  {
    icon: Brain,
    title: "Actividades y estimulación",
    description: "Propuestas para compartir, participar y mantener momentos significativos.",
  },
  {
    icon: Users,
    title: "Comunicación con familias",
    description: "Un canal cercano para conversar dudas sobre el cuidado y las necesidades de cada persona.",
  },
  {
    icon: Heart,
    title: "Ambiente familiar",
    description: "Un hogar pensado para que quienes viven allí se sientan contenidos y acompañados.",
  },
  {
    icon: MapPin,
    title: locationLabel,
    description: "Ubicación en el centro de Bahía Blanca. La dirección exacta se coordina en la consulta.",
  },
]

const steps = [
  {
    title: "Escribí o llamá",
    description: "Contactá por WhatsApp o al teléfono publicado en esta web.",
  },
  {
    title: "Contá qué necesita la familia",
    description: "Compartí dudas sobre cuidado, servicios, actividades o disponibilidad.",
  },
  {
    title: "Coordiná una consulta o visita",
    description: "La ubicación exacta no está publicada; para conocerla, consultá directamente con Hogar Luz.",
  },
]

const faqItems: FaqItem[] = [
  {
    question: "¿Dónde está Hogar Luz?",
    answer: `Hogar Luz se encuentra en ${locationLabel}, Buenos Aires. No se publica una dirección exacta en esta web.`,
  },
  {
    question: "¿Cómo consultar disponibilidad?",
    answer: `Podés consultar por WhatsApp o llamar al ${phoneLabel}.`,
  },
  {
    question: "¿Qué ofrece Hogar Luz para adultos mayores?",
    answer:
      "Acompañamiento diario, atención integral, actividades, comunicación con las familias y un ambiente familiar para adultos mayores.",
  },
  {
    question: "¿Qué conviene preguntar antes de elegir un geriátrico en Bahía Blanca?",
    answer:
      "Conviene preguntar por el trato cotidiano, los servicios disponibles, la comunicación con la familia, los espacios, las actividades y la posibilidad de conocer el lugar personalmente.",
  },
  {
    question: "¿Se puede coordinar una visita?",
    answer:
      "Sí, podés consultar por WhatsApp o teléfono para coordinar una visita o una primera conversación con Hogar Luz.",
  },
  {
    question: "¿Publican la dirección exacta?",
    answer:
      "No. En esta web solo se indica la zona Centro de Bahía Blanca. Para la ubicación exacta, consultá directamente con Hogar Luz.",
  },
]

const landingPhotos = galleryPhotosWithPatio

const geriatricHeroBenefits = [
  "Hogar geriátrico en Zona Centro, Bahía Blanca",
  "Acompañamiento diario y comunicación con la familia",
  "Consultá disponibilidad o una visita por WhatsApp",
]

export default function GeriatricoBahiaBlancaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF7EF] text-[#17363A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(faqSchema) }} />

      <a
        href="#contenido"
        className="sr-only rounded-md bg-white px-4 py-3 text-sm font-bold text-[#17363A] shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Saltar al contenido
      </a>

      <SiteHeader navItems={landingNavItems} homeHref="/" />

      <main id="contenido" className="pt-16">
        <section id="inicio" className="scroll-mt-24 section-surface section-pad">
          <div className="site-container grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
            <figure className="relative order-2 overflow-hidden rounded-2xl border border-[#E7DED2] bg-white p-3 shadow-[0_22px_56px_rgba(23,54,58,0.11)] lg:order-1">
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-[#EDE4D7] sm:aspect-[4/3]">
                <Image
                  src={heroImage}
                  alt="Acompañamiento en Hogar Luz, geriátrico en Bahía Blanca"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-[center_40%] saturate-[0.88] contrast-[1.02] lg:saturate-[0.82]"
                />
              </div>
            </figure>

            <div className="order-1 lg:order-2">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D7E4DF] bg-[#EFF7F3] px-4 py-2 text-xs font-extrabold text-[#215E5B] sm:text-sm">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                Hogar geriátrico · Bahía Blanca
              </p>
              <h1 className="mt-5 max-w-2xl font-heading text-hero font-bold text-[#17363A]">
                Geriátrico en Bahía Blanca con trato familiar y acompañamiento diario
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#52676A] md:text-lg md:leading-8">
                Hogar Luz es una opción local para familias que buscan un hogar geriátrico en Bahía Blanca con
                cuidado cotidiano, actividades y la posibilidad de consultar disponibilidad o coordinar una visita de
                forma directa.
              </p>
              <HeroBenefits items={geriatricHeroBenefits} />

              <div className="mt-8 max-w-lg">
                <WhatsappConsult />
              </div>
              <p className="mt-6 text-sm leading-6 text-[#607476]">
                ¿Buscás información general del hogar?{" "}
                <Link href="/" className={`${focusRingClass()} font-extrabold text-[#215E5B] underline-offset-2 hover:underline`}>
                  Ver página principal de Hogar Luz
                </Link>
              </p>
            </div>

            
          </div>
        </section>

        <section id="decision" className="scroll-mt-24 section-alt section-pad">
          <div className="site-container">
            <SectionIntro
              eyebrow="Para comparar con tranquilidad"
              title="Qué suelen mirar las familias al elegir un geriátrico en Bahía Blanca"
            >
              Elegir un hogar de ancianos o una residencia para adultos mayores implica muchas preguntas. Estas son
              algunas de las que conviene tener presentes antes de avanzar con una consulta.
            </SectionIntro>
            <ul className="grid gap-3 sm:grid-cols-2">
              {decisionPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-xl border border-[#E7DED2] bg-[#FFFDF8] p-4 text-sm leading-6 text-[#52676A] sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#215E5B]" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="ofrece" className="scroll-mt-24 section-surface section-pad">
          <div className="site-container">
            <SectionIntro eyebrow="Hogar Luz" title="Qué ofrece Hogar Luz como hogar geriátrico en Bahía Blanca">
              Una propuesta de cuidado diario, acompañamiento y comunicación cercana con las familias, en un ambiente
              familiar en la zona Centro.
            </SectionIntro>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {offers.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-[#E7DED2] bg-white p-5 shadow-[0_12px_30px_rgba(23,54,58,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F2EE] text-[#215E5B]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-[#17363A]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#52676A] sm:text-base sm:leading-7">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fotos" className="scroll-mt-24 section-warm section-pad">
          <div className="site-container">
            <SectionIntro eyebrow="Espacios reales" title="Conocé el hogar antes de consultar">
              Fotos de espacios y momentos cotidianos de Hogar Luz para que la familia pueda mirar el lugar con más
              calma.
            </SectionIntro>
            <PhotoGallery photos={landingPhotos} columns={3} />
          </div>
        </section>

        <section id="consulta" className="scroll-mt-24 section-surface section-pad">
          <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#B85F39] sm:text-sm">Cómo consultar</p>
              <h2 className="mt-3 font-heading text-display font-bold text-[#17363A]">Tres pasos para empezar</h2>
              <p className="mt-4 max-w-md text-base leading-7 text-[#52676A]">
                Si estás buscando un geriátrico en Bahía Blanca, podés iniciar la conversación por WhatsApp o teléfono.
              </p>
              <div className="mt-6 grid gap-3 text-sm font-extrabold text-[#17363A] sm:text-base">
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-[#215E5B]" aria-hidden="true" />
                  {locationLabel}
                </p>
                <a href={phoneHref} className={`${focusRingClass()} flex items-center gap-2 text-[#215E5B]`}>
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {phoneLabel}
                </a>
              </div>
            </div>

            <ol className="grid gap-4">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="list-none rounded-xl border border-[#E7DED2] bg-[#FBF7EF] p-5 shadow-[0_10px_28px_rgba(23,54,58,0.04)]"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#B85F39]">Paso {index + 1}</p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-[#17363A]">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#52676A]">{step.description}</p>
                </li>
              ))}
              <li className="list-none">
                <ConsultaActions />
              </li>
            </ol>
          </div>
        </section>

        <section id="preguntas" className="scroll-mt-24 section-alt section-pad">
          <div className="site-container">
            <SectionIntro eyebrow="Preguntas frecuentes" title="Dudas sobre geriátricos en Bahía Blanca y Hogar Luz">
              Respuestas breves y honestas para familias que buscan un hogar para adultos mayores o una residencia en la
              ciudad.
            </SectionIntro>
            <FaqSection items={faqItems} />
          </div>
        </section>

        <FinalCta
          title="Consultá con calma si Hogar Luz es la opción para tu familia"
          subtitle="Escribinos por WhatsApp o llamanos para hablar de disponibilidad y coordinar una visita."
        />
      </main>

      <SiteFooter
        navItems={landingNavItems}
        extraLinks={[{ href: "/geriatrico-bahia-blanca", label: "Geriátrico Bahía Blanca" }]}
      />
    </div>
  )
}
