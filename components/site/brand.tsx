import Image from "next/image"

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex items-center" translate="no">
      <span
        className={
          inverse
            ? "flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/90 shadow-sm lg:h-16 lg:w-16 lg:rounded-2xl"
            : "flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl shadow-[inset_0_0_0_1px_rgba(101,111,78,0.1)] lg:h-16 lg:w-16 lg:rounded-2xl"
        }
      >
        <Image
          src="/hogar-luz-icon.png"
          alt=""
          width={150}
          height={150}
          priority
          className="h-full w-full object-contain"
        />
      </span>
    </span>
  )
}
