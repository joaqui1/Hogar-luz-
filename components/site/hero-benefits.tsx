import { CheckCircle2 } from "lucide-react"

const defaultBenefits = [
  "Cuidado diario con trato cercano",
  "Información clara para decidir",
  "Consulta directa por WhatsApp o teléfono",
]

export function HeroBenefits({ items = defaultBenefits }: { items?: string[] }) {
  return (
    <ul className="mt-6 space-y-2.5" aria-label="Beneficios principales">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm font-bold leading-6 text-[#17363A] sm:text-base">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#215E5B]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}
