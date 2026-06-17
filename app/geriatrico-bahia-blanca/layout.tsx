import type { Metadata } from "next"
import { landingSeoDescription, landingSeoTitle, siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: landingSeoTitle,
  description: landingSeoDescription,
  alternates: {
    canonical: `${siteUrl}/geriatrico-bahia-blanca`,
  },
  openGraph: {
    title: landingSeoTitle,
    description: landingSeoDescription,
    type: "website",
    locale: "es_AR",
    url: `${siteUrl}/geriatrico-bahia-blanca`,
    siteName: "Hogar Luz",
    images: [
      {
        url: "/gallery/optimized/hogar-luz-sala-estar.jpg",
        width: 1400,
        height: 1050,
        alt: "Sala de estar del geriátrico Hogar Luz en Bahía Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: landingSeoTitle,
    description: landingSeoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GeriatricoLayout({ children }: { children: React.ReactNode }) {
  return children
}
