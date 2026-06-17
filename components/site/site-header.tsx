"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, MessageCircle, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Brand } from "@/components/site/brand"
import { focusRingClass, phoneHref, phoneLabel, whatsappUrl } from "@/lib/site"

export type NavItem = {
  href: string
  label: string
  isPage?: boolean
}

type SiteHeaderProps = {
  navItems: NavItem[]
  homeHref?: string
  overlay?: boolean
}

export function SiteHeader({ navItems, homeHref = "/", overlay = false }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!overlay) return
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [overlay])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const onHero = overlay && !scrolled

  const renderNavLink = (item: NavItem, className: string) => {
    if (item.isPage) {
      return (
        <Link href={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
          {item.label}
        </Link>
      )
    }
    return (
      <a href={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
        {item.label}
      </a>
    )
  }

  const navLinkBase =
    "relative rounded-full px-2.5 py-2 text-[0.78rem] font-medium transition-[color,background-color,box-shadow] duration-200 lg:text-[0.9rem]"

  const linkClass = onHero
    ? `${navLinkBase} text-white/82 hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A574]`
    : `${navLinkBase} text-[#25221F] hover:bg-[#E8E6D4]/80 hover:text-[#394229] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6653A]`

  const headerClass = onHero
    ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#17363A]/20 shadow-[0_8px_32px_rgba(8,24,26,0.12)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[#17363A]/15"
    : "fixed inset-x-0 top-0 z-50 border-b border-[#DDD8C4]/85 bg-[#FBF8EC]/94 shadow-[0_8px_28px_rgba(57,66,41,0.055)] backdrop-blur-md"
  const brandMark = (
    <span className="flex min-w-0 items-center gap-2.5 lg:gap-3.5">
      <Brand inverse={onHero} />
      <span className="hidden min-[360px]:block">
        <span className={`block font-heading text-[0.95rem] font-semibold leading-none lg:text-[1.55rem] ${onHero ? "text-white" : "text-[#25221F]"}`}>
          Hogar Luz
        </span>
        <span
          className={`mt-0.5 block text-[0.56rem] font-bold uppercase leading-none tracking-[0.14em] lg:mt-1 lg:text-[0.76rem] lg:tracking-[0.19em] ${
            onHero ? "text-white/78" : "text-[#6F8178]"
          }`}
        >
          Adultos mayores
        </span>
      </span>
    </span>
  )

  return (
    <header className={headerClass}>
      <div className="w-full px-4 sm:px-6 lg:px-11">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-24 lg:gap-5 xl:h-[100px]">
          {homeHref === "/" ? (
            <a href="#inicio" aria-label="Ir al inicio de Hogar Luz" className={`${focusRingClass()} min-w-0 shrink-0 rounded-xl`}>
              {brandMark}
            </a>
          ) : (
            <Link href={homeHref} aria-label="Ir al inicio de Hogar Luz" className={`${focusRingClass()} min-w-0 shrink-0 rounded-xl`}>
              {brandMark}
            </Link>
          )}

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-1.5" aria-label="Navegación principal">
            {navItems.map((item) => (
              <span key={`${item.href}-${item.label}`}>
                {renderNavLink(
                  item,
                  `${linkClass} ${
                    item.href === "#inicio"
                      ? "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-current after:opacity-70"
                      : ""
                  }`,
                )}
              </span>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
            <a
              href={phoneHref}
              className={`${focusRingClass()} hidden h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors lg:inline-flex xl:h-12 xl:px-6 xl:text-[0.98rem] ${
                onHero ? "text-white/85 hover:bg-white/10 hover:text-white" : "border border-[#CBCBB7] bg-white/55 text-[#25221F] hover:bg-white"
              }`}
              aria-label={`Llamar al ${phoneLabel}`}
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="hidden xl:inline">Llamar</span>
            </a>

            <Button
              asChild
              className={`hidden h-10 rounded-full px-4 text-sm font-bold shadow-none lg:inline-flex xl:h-12 xl:px-6 xl:text-[0.98rem] ${
                onHero
                  ? "bg-[#394229] text-white shadow-[0_8px_24px_rgba(57,66,41,0.28)] hover:bg-[#2D3421]"
                  : "bg-[#394229] text-white shadow-[0_10px_24px_rgba(57,66,41,0.16)] hover:bg-[#2D3421]"
              }`}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consultar por WhatsApp"
                className={`${focusRingClass()} gap-2`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar por WhatsApp"
              className={`${focusRingClass()} inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#394229] px-3 text-[0.78rem] font-bold text-white shadow-[0_10px_22px_rgba(57,66,41,0.16)] transition hover:bg-[#2D3421] lg:hidden`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span className="hidden min-[380px]:inline">WhatsApp</span>
            </a>

            <button
              type="button"
              className={`${focusRingClass()} flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
                onHero
                  ? "border-white/25 bg-white/10 text-white hover:bg-white/18"
                  : "border-[#C9CCB6] bg-white/50 text-[#394229] hover:bg-white"
              }`}
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              aria-controls="menu-movil"
            >
              {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            id="menu-movil"
            className={`grid gap-0.5 border-t py-4 lg:hidden ${onHero ? "border-white/12" : "border-[#D7D6C4]"}`}
            aria-label="Navegación móvil"
          >
            <div className="mb-3 grid gap-2 px-0.5 sm:grid-cols-2">
              <Button asChild className="h-12 w-full rounded-full bg-[#394229] font-bold text-white hover:bg-[#2D3421]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Consultar por WhatsApp"
                  className={focusRingClass()}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`h-12 w-full rounded-full font-bold ${
                  onHero ? "border-white/30 bg-white/10 text-white hover:bg-white/18" : "border-[#C9CCB6] bg-white/50 text-[#25221F]"
                }`}
              >
                <a href={phoneHref} className={focusRingClass()} onClick={() => setIsMenuOpen(false)} aria-label={`Llamar al ${phoneLabel}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Llamar
                </a>
              </Button>
            </div>
            {navItems.map((item) => (
              <div key={`${item.href}-${item.label}-mobile`}>
                {renderNavLink(
                  item,
                  onHero
                    ? `${linkClass} block w-full text-left text-[0.9375rem]`
                    : `${linkClass} block w-full text-left text-[0.9375rem] text-[#25221F]`,
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
