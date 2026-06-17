import Image from "next/image"
import type { SitePhoto } from "@/lib/site"

type PhotoGalleryProps = {
  photos: SitePhoto[]
  columns?: 2 | 3
}

export function PhotoGallery({ photos, columns = 3 }: PhotoGalleryProps) {
  const gridClass =
    columns === 2
      ? "grid gap-5 sm:grid-cols-2"
      : "grid gap-5 md:grid-cols-2 lg:grid-cols-3"

  return (
    <div className={gridClass}>
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="group overflow-hidden rounded-xl border border-[#E7DED2] bg-[#FFFDF8] shadow-[0_14px_36px_rgba(23,54,58,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(23,54,58,0.1)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE4D7]">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={columns === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${photo.objectPosition ?? "object-center"}`}
            />
          </div>
          <figcaption className="border-t border-[#F0E8DC] p-5">
            <strong className="block font-heading text-lg font-bold text-[#17363A]">{photo.title}</strong>
            <span className="mt-2 block text-sm leading-6 text-[#52676A]">{photo.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
