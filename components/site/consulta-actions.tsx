import { MapPin } from "lucide-react"
import { WhatsappConsult } from "@/components/site/whatsapp-consult"
import { focusRingClass, mapsUrl } from "@/lib/site"

export function ConsultaActions() {
  return (
    <article className="consult-card">
      <WhatsappConsult />
      <p className="mt-5 border-t border-[#E7DED2] pt-4 text-sm text-[#607476]">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${focusRingClass()} inline-flex items-center gap-1.5 font-medium text-[#52676A] underline-offset-2 hover:text-[#215E5B] hover:underline`}
        >
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          Ver ubicación en el mapa
        </a>
      </p>
    </article>
  )
}
