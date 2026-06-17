"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import {
  buildWhatsappUrl,
  focusRingClass,
  phoneHref,
  phoneLabel,
  whatsappTopics,
  type WhatsappTopicId,
} from "@/lib/site"

type WhatsappConsultProps = {
  compact?: boolean
  showTopics?: boolean
  showPhoneLink?: boolean
  className?: string
}

export function WhatsappConsult({ compact = false, showTopics = true, showPhoneLink = true, className = "" }: WhatsappConsultProps) {
  const [topicId, setTopicId] = useState<WhatsappTopicId>("disponibilidad")
  const selected = whatsappTopics.find((t) => t.id === topicId) ?? whatsappTopics[0]
  const waHref = buildWhatsappUrl(selected.message)

  return (
    <div className={`${compact ? "space-y-3" : "space-y-4"} ${className}`.trim()}>
      {showTopics ? (
        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold text-[#17363A]">¿Qué querés consultar?</legend>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Motivo de consulta">
            {whatsappTopics.map((topic) => {
              const active = topic.id === topicId
              return (
                <button
                  key={topic.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setTopicId(topic.id)}
                  className={`${focusRingClass()} rounded-full px-3.5 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-[#215E5B] text-white shadow-sm"
                      : "bg-white text-[#52676A] ring-1 ring-[#E7DED2] hover:ring-[#BFD2CD]"
                  }`}
                >
                  {topic.label}
                </button>
              )
            })}
          </div>
        </fieldset>
      ) : null}

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir WhatsApp para ${selected.label.toLowerCase()}`}
        className={`${focusRingClass()} btn-primary w-full sm:w-auto`}
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        Continuar por WhatsApp
      </a>

      {showPhoneLink ? (
        <p className="text-sm text-[#607476]">
          Sin compromiso.{" "}
          <a href={phoneHref} className={`${focusRingClass()} font-semibold text-[#215E5B] underline-offset-2 hover:underline`}>
            O llamar al {phoneLabel}
          </a>
        </p>
      ) : null}
    </div>
  )
}
