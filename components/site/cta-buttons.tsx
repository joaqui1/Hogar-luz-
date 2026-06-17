import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { focusRingClass, phoneHref, phoneLabel, whatsappUrl } from "@/lib/site"

type CtaButtonsProps = {
  layout?: "row" | "stack"
  size?: "default" | "large"
  showConsultLabel?: boolean
  /** Secundario como enlace de texto (mayor foco en WhatsApp) */
  phoneAsLink?: boolean
}

export function CtaButtons({
  layout = "row",
  size = "default",
  showConsultLabel = true,
  phoneAsLink = true,
}: CtaButtonsProps) {
  const isLarge = size === "large"
  const height = isLarge ? "h-[52px] sm:h-[54px]" : "h-11 sm:h-12"
  const text = isLarge ? "text-base" : "text-sm"
  const icon = isLarge ? "h-5 w-5" : "h-4 w-4"

  return (
    <div className="space-y-3">
      <div className={layout === "stack" ? "grid gap-3" : "grid gap-3 sm:block"}>
        <Button
          asChild
          size={isLarge ? "lg" : "default"}
          className={`${height} w-full rounded-full bg-[#D66F3D] px-6 font-extrabold text-white shadow-[0_14px_32px_rgba(214,111,61,0.24)] hover:bg-[#BF5F32] sm:w-auto sm:min-w-[260px] ${text}`}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar por WhatsApp"
            className={focusRingClass()}
          >
            <MessageCircle className={icon} aria-hidden="true" />
            {showConsultLabel ? "Consultar por WhatsApp" : "WhatsApp"}
          </a>
        </Button>

        {!phoneAsLink ? (
          <Button
            asChild
            size={isLarge ? "lg" : "default"}
            variant="outline"
            className={`${height} w-full rounded-full border border-[#E0D6C8] bg-transparent px-6 text-sm font-bold text-[#607476] shadow-none hover:bg-[#F7F1E8] hover:text-[#215E5B] sm:w-auto ${text}`}
          >
            <a href={phoneHref} aria-label={`Llamar a Hogar Luz al ${phoneLabel}`} className={focusRingClass()}>
              <Phone className={icon} aria-hidden="true" />
              Llamar
            </a>
          </Button>
        ) : null}
      </div>

      {phoneAsLink ? (
        <p className="text-sm text-[#607476]">
          <a
            href={phoneHref}
            className={`${focusRingClass()} inline-flex items-center gap-1.5 font-extrabold text-[#215E5B] underline-offset-2 hover:underline`}
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            O llamar al {phoneLabel}
          </a>
        </p>
      ) : null}
    </div>
  )
}
