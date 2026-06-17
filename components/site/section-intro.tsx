export function SectionIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <div className={`mb-10 max-w-3xl md:mb-12 ${centered ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow-label">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-display font-semibold text-[#17363A]">{title}</h2>
      <p
        className={`mt-4 text-base leading-7 text-[#52676A] md:text-lg md:leading-8 ${
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {children}
      </p>
    </div>
  )
}
