import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Home,
  MessageCircle,
  Phone,
  Shield,
  Users,
} from "lucide-react"
import {
  buildWhatsappUrl,
  focusRingClass,
  heroCoverDesktopImage,
  heroCoverImage,
  locationLabel,
  phoneHref,
  phoneLabel,
  whatsappTopics,
} from "@/lib/site"

const defaultWaMessage = whatsappTopics[0].message
const heroCoverAlt = "Residentes y cuidadores en Hogar Luz, geriátrico en Bahía Blanca"

const trustItems = [
  {
    icon: Users,
    title: "Atención integral",
    description: "Cuidado y acompañamiento profesional",
  },
  {
    icon: Home,
    title: "Ambiente familiar",
    description: "Espacios reales y seguros para su bienestar",
  },
  {
    icon: CalendarDays,
    title: "+15 años de experiencia",
    description: "Trayectoria en cuidado y acompañamiento",
  },
] as const

const desktopTrustItems = [
  {
    icon: Users,
    title: "Atención integral",
  },
  {
    icon: Home,
    title: "Ambiente familiar",
  },
  {
    icon: MessageCircle,
    title: "Comunicación con familias",
  },
  {
    icon: CalendarDays,
    title: "+15 años de experiencia",
  },
] as const

const highlights = [
  {
    icon: CalendarDays,
    title: "Actividades diarias",
    description: "Propuestas recreativas, cognitivas y físicas adaptadas a la rutina del hogar.",
    href: "#servicios",
  },
  {
    icon: Heart,
    title: "Acompañamiento cercano",
    description: "Cuidado diario con trato humano, presencia y ambiente familiar.",
    href: "#cuidado",
  },
  {
    icon: Shield,
    title: "Bienestar y salud",
    description: "Atención médica, enfermería, emergencias y servicios de bienestar.",
    href: "#servicios",
  },
] as const

const heroHeading = (
  <h1 className="mt-2.5 text-pretty font-heading text-[clamp(1.72rem,7.4vw,1.95rem)] font-semibold leading-[1.05] text-[#25221F] lg:mt-6 lg:max-w-[560px] lg:text-left lg:text-[clamp(3.5rem,4.4vw,4.25rem)] lg:font-bold lg:leading-[1.01] lg:tracking-[-0.025em] 2xl:max-w-[610px] 2xl:text-[4.35rem]">
    Geriátrico en
    <br className="hidden lg:block" />
    <span className="lg:hidden"> </span>
    Bahía Blanca |
    <br className="hidden lg:block" />
    <span className="lg:hidden"> </span>
    Hogar Luz
  </h1>
)

const heroSubheading = (
  <h2 className="mx-auto mt-2 max-w-[20rem] font-normal text-[0.76rem] leading-[1.55] text-[#3D4A46] lg:mx-0 lg:mt-5 lg:max-w-[390px] lg:text-[1.16rem] lg:leading-[1.5] lg:text-[#25312E] xl:max-w-[420px] xl:text-[1.22rem]">
    Un espacio de cuidado diario, contención y calidez hogareña.
  </h2>
)

export function HomeHero() {
  const waHref = buildWhatsappUrl(defaultWaMessage)

  return (
    <section
      id="inicio"
      className="scroll-mt-16 overflow-hidden bg-[#F4F1E6] text-[#1D2422] lg:pt-8 xl:pt-9"
      aria-label="Geriátrico en Bahía Blanca — Hogar Luz"
    >
      <div className="hero-mobile lg:relative lg:h-[660px] lg:bg-[#F4F1E6] xl:h-[680px] 2xl:h-[680px]">
        <div className="hero-mobile__image lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-full">
          <picture className="absolute inset-0 block">
            <source media="(min-width: 1024px)" srcSet={heroCoverDesktopImage} />
            <img
              src={heroCoverImage}
              alt={heroCoverAlt}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full scale-[1.07] object-cover object-[50%_42%] saturate-[1.02] lg:scale-100 lg:object-[62%_45%] lg:saturate-[1.14] lg:contrast-[1.06] lg:brightness-[1.06]"
            />
          </picture>
          <div className="hero-mobile__veil-bottom lg:hidden" aria-hidden />
          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#F6F1E5_0%,rgba(246,241,229,0.98)_18%,rgba(246,241,229,0.74)_33%,rgba(246,241,229,0.22)_46%,rgba(246,241,229,0.04)_57%,transparent_64%)] lg:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-[#F4F1E6]/32 to-transparent lg:block" />
        </div>

        <div className="hero-mobile__card lg:absolute lg:left-[clamp(6.8rem,8vw,9rem)] lg:top-[47%] lg:z-10 lg:w-[620px] lg:max-w-none lg:-translate-y-1/2 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:text-left lg:shadow-none 2xl:top-[45%] 2xl:w-[700px]">
          <div className="hero-mobile__welcome lg:hidden">
            <Heart className="h-3 w-3 shrink-0" strokeWidth={1.5} aria-hidden />
            <span>Bienvenidos a Hogar Luz</span>
            <Heart className="h-3 w-3 shrink-0" strokeWidth={1.5} aria-hidden />
          </div>
          <p className="mt-0.5 text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-[#6F8178] sm:text-[0.7rem] lg:mt-0 lg:text-[0.84rem] lg:font-bold lg:tracking-[0.28em] lg:text-[#53654B] xl:text-[0.88rem]">
            <span className="lg:hidden">{locationLabel}</span>
            <span className="hidden lg:inline">Hogar Luz · {locationLabel}</span>
          </p>

          {heroHeading}

          <div className="hero-mobile__divider lg:hidden" aria-hidden>
            <span />
            <Heart className="h-3.5 w-3.5" strokeWidth={1.4} />
            <span />
          </div>

          <div className="mt-6 hidden w-[128px] items-center gap-4 text-[#5F6D50] lg:flex" aria-hidden="true">
            <span className="h-px flex-1 bg-[#8C966F]" />
            <Heart className="h-4 w-4" strokeWidth={1.45} />
          </div>

          {heroSubheading}

          <div className="mt-3.5 grid gap-2 lg:mt-7 lg:flex lg:items-center lg:gap-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${focusRingClass()} inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#2F3822]/10 bg-[#3A462E] px-6 text-[0.8rem] font-bold text-white shadow-[0_14px_28px_rgba(58,70,46,0.22)] transition-[background-color,box-shadow,transform] hover:bg-[#303A26] lg:h-[56px] lg:w-auto lg:px-9 lg:text-[1rem] lg:shadow-[0_18px_34px_rgba(58,70,46,0.26)] lg:hover:-translate-y-0.5 lg:hover:shadow-[0_22px_40px_rgba(58,70,46,0.3)]`}
              aria-label="Consultar por WhatsApp"
            >
              <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
              Consultar por WhatsApp
            </a>

            <a
              href={phoneHref}
              className={`${focusRingClass()} inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#B8BBA3] bg-white px-6 text-[0.8rem] font-bold text-[#25221F] transition-[background-color,border-color,transform,box-shadow] hover:border-[#A8AB96] hover:bg-[#FFFCF8] lg:h-[56px] lg:w-auto lg:border-[#C8C9B3] lg:bg-[#FFFDF7]/82 lg:px-9 lg:text-[1rem] lg:shadow-[0_12px_26px_rgba(54,61,43,0.1),inset_0_1px_0_rgba(255,255,255,0.72)] lg:hover:-translate-y-0.5 lg:hover:border-[#B8BBA3] lg:hover:bg-white`}
              aria-label={`Llamar al ${phoneLabel}`}
            >
              <Phone className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
              Llamar
            </a>
          </div>

          <ul className="hero-mobile__trust lg:hidden">
            {trustItems.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <span className="hero-mobile__trust-icon">
                  <Icon className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="mt-1.5 block text-[0.58rem] font-bold leading-tight text-[#1F2522]">{title}</span>
                <span className="mt-1 block text-[0.52rem] leading-snug text-[#56635D]">{description}</span>
              </li>
            ))}
          </ul>

          <p className="hero-mobile__tagline lg:hidden">
            Más que un hogar, <em>una gran familia</em>.
          </p>
        </div>

        <div className="absolute bottom-[70px] left-[clamp(6.8rem,8vw,9rem)] z-20 hidden h-[78px] w-[min(780px,59vw)] items-center rounded-[1.45rem] border border-[#DDD5C3] bg-[linear-gradient(180deg,rgba(255,253,247,0.98)_0%,rgba(248,244,233,0.96)_100%)] px-6 shadow-[0_18px_42px_rgba(38,54,43,0.14),inset_0_1px_0_rgba(255,255,255,0.92)] lg:flex 2xl:bottom-[74px] 2xl:w-[820px] 2xl:px-7">
          {desktopTrustItems.map(({ icon: Icon, title }, index) => (
            <div key={title} className="flex min-w-0 flex-1 items-center gap-4">
              <Icon className="h-8 w-8 shrink-0 text-[#5D704D]" strokeWidth={1.45} aria-hidden="true" />
              <span className="text-[0.9rem] font-semibold leading-tight text-[#263126]">{title}</span>
              {index < desktopTrustItems.length - 1 ? (
                <span className="ml-auto mr-5 h-10 w-px shrink-0 bg-[#D8D1BF]" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>

        <svg
          className="pointer-events-none absolute bottom-[-1px] left-0 hidden h-[148px] w-full text-[#F8F4E8] lg:block"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-curve-stroke" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7F9368" stopOpacity="0" />
              <stop offset="26%" stopColor="#7F9368" stopOpacity="0.55" />
              <stop offset="64%" stopColor="#7F9368" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#7F9368" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path fill="currentColor" d="M0 102C218 88 420 54 640 51C820 48 994 86 1192 76C1290 71 1374 58 1440 50V110H0V102Z" />
          <path
            d="M-70 104C178 90 412 54 640 51C820 48 994 86 1192 76C1290 71 1374 58 1510 48"
            fill="none"
            stroke="url(#hero-curve-stroke)"
            strokeLinecap="round"
            strokeWidth="4.2"
            opacity="0.78"
          />
        </svg>
      </div>

      <div className="bg-[#F8F4E8]">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-8 sm:grid-cols-3 lg:gap-0 lg:px-10 lg:pb-11 lg:pt-12">
          {highlights.map(({ icon: Icon, title, description, href }) => (
            <article
              key={title}
              className="flex gap-4 rounded-xl border border-[#E4DDCF] bg-[#FFFDF8] p-5 shadow-[0_12px_30px_rgba(38,54,43,0.07)] lg:gap-7 lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-[#D8D0BF] lg:bg-transparent lg:px-11 lg:py-0 lg:shadow-none first:lg:border-l-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-[#EEF1DE] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] lg:h-16 lg:w-16 lg:rounded-[1rem]">
                <Icon className="h-6 w-6 text-[#6F7859] lg:h-8 lg:w-8" strokeWidth={1.35} aria-hidden="true" />
              </span>
              <div className="lg:max-w-[300px]">
                <h2 className="font-heading text-[1.08rem] font-bold leading-tight text-[#191D1B] lg:mt-1 lg:text-[1.42rem]">
                  {title}
                </h2>
                <p className="mt-2 text-[0.82rem] leading-[1.65] text-[#213331] lg:mt-3 lg:text-[0.91rem] lg:leading-[1.62] lg:text-[#4C5853]">
                  {description}
                </p>
                <Link
                  href={href}
                  className={`${focusRingClass()} mt-4 inline-flex items-center gap-1 text-[0.8rem] font-bold text-[#394229] hover:text-[#2D3421] lg:mt-6 lg:text-[0.88rem]`}
                >
                  Ver más
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
