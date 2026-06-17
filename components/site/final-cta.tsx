import { Sparkles } from "lucide-react"
import { WhatsappConsult } from "@/components/site/whatsapp-consult"

type FinalCtaProps = {
  title: string
  subtitle?: string
}

export function FinalCta({ title, subtitle }: FinalCtaProps) {
  return (
    <section className="section-pad bg-[#FBF7EF]" aria-label="Consulta final">
      <div className="site-container">
        <div className="overflow-hidden rounded-2xl border border-[#D7E4DF] bg-gradient-to-br from-[#F5FAF8] via-[#FFFDF8] to-[#F8F4EC] p-6 shadow-[0_16px_40px_-12px_rgba(23,54,58,0.1)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-start lg:gap-12">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#215E5B]">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Hogar Luz
              </p>
              <h2 className="mt-3 font-heading text-display-sm font-semibold text-[#17363A]">{title}</h2>
              {subtitle ? <p className="mt-3 text-base leading-7 text-[#52676A]">{subtitle}</p> : null}
            </div>
            <WhatsappConsult compact showPhoneLink />
          </div>
        </div>
      </div>
    </section>
  )
}
