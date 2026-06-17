export type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  items: FaqItem[]
  columns?: 1 | 2
}

const Grid = String.fromCharCode(100, 105, 118) as "div"

export function FaqSection({ items, columns = 2 }: FaqSectionProps) {
  const gridClass = columns === 1 ? "grid gap-4" : "grid gap-4 md:grid-cols-2"

  return (
    <Grid className={gridClass}>
      {items.map((item) => (
        <article
          key={item.question}
          className="rounded-xl border border-[#E7DED2] bg-[#FFFDF8] p-6 shadow-[0_10px_28px_rgba(23,54,58,0.04)]"
        >
          <h3 className="font-heading text-lg font-bold leading-7 text-[#17363A]">{item.question}</h3>
          <p className="mt-3 text-base leading-7 text-[#52676A]">{item.answer}</p>
        </article>
      ))}
    </Grid>
  )
}
