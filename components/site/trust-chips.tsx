import { CheckCircle2 } from "lucide-react"

export function TrustChips({ points }: { points: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2" aria-label="Señales de confianza">
      {points.map((point) => (
        <li
          key={point}
          className="flex items-center gap-2 rounded-lg border border-[#E7DED2] bg-[#FBF7EF]/80 px-3 py-2.5 text-sm font-extrabold text-[#17363A]"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#215E5B]" aria-hidden="true" />
          {point}
        </li>
      ))}
    </ul>
  )
}
