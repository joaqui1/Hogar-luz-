import Link from "next/link"
import { MapPin, MessageCircle, Phone } from "lucide-react"
import { Brand } from "@/components/site/brand"
import type { NavItem } from "@/components/site/site-header"
import {
  businessStreetAddress,
  focusRingClass,
  locationLabel,
  phoneHref,
  phoneLabel,
  visitPolicyNote,
  whatsappUrl,
} from "@/lib/site"

type SiteFooterProps = {
  navItems: NavItem[]
  extraLinks?: { href: string; label: string }[]
}

export function SiteFooter({ navItems, extraLinks = [] }: SiteFooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#17363A] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1140px] gap-10 md:grid-cols-[1.15fr_0.85fr_0.95fr]">
        <div>
          <Brand inverse />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            Hogar para adultos mayores en Bahía Blanca, con ambiente familiar, cuidado diario y canales de consulta directos.
          </p>
        </div>

        <nav aria-label="Enlaces del footer">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/55">Navegación</p>
          <div className="mt-4 grid gap-2 text-sm text-white/74">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className={`${focusRingClass()} w-fit rounded-md transition-colors hover:text-white`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href + item.label}
                  href={item.href}
                  className={`${focusRingClass()} w-fit rounded-md transition-colors hover:text-white`}
                >
                  {item.label}
                </a>
              ),
            )}
            {extraLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${focusRingClass()} w-fit rounded-md transition-colors hover:text-white`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/55">Contacto</p>
          <div className="mt-4 grid gap-3 text-sm text-white/74">
            <a
              href={phoneHref}
              className={`${focusRingClass()} flex w-fit items-center gap-2 rounded-md transition-colors hover:text-white`}
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {phoneLabel}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {businessStreetAddress ? `${businessStreetAddress}, ` : ""}
                {locationLabel}
                {businessStreetAddress ? (
                  <>
                    <br />
                    <span className="text-white/58">{visitPolicyNote}</span>
                  </>
                ) : null}
              </span>
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${focusRingClass()} flex w-fit items-center gap-2 rounded-md font-bold text-white transition-colors hover:text-white/90`}
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1140px] border-t border-white/12 pt-6 text-sm text-white/50">
        © {year} Hogar Luz. Todos los derechos reservados.
        <span aria-hidden="true"> · </span>
        <Link
          href="/desarrollo-web"
          className={`${focusRingClass()} rounded-md underline-offset-4 transition-colors hover:text-white hover:underline`}
        >
          Desarrollo web
        </Link>
      </p>
    </footer>
  )
}
