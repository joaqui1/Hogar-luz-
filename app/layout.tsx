import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Hogar en Bahía Blanca | Geriátrico Bahía Blanca | Hogar Luz",
  description:
    "Hogar de ancianos en Bahía Blanca con atención médica, enfermería, emergencias, equipo interdisciplinario y menú por nutricionistas. Ubicación céntrica y ambiente familiar.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Hogar en Bahía Blanca | Geriátrico Bahía Blanca | Hogar Luz",
    description:
      "Hogar de ancianos en Bahía Blanca con atención médica, enfermería, emergencias, equipo interdisciplinario y menú por nutricionistas. Ubicación céntrica y ambiente familiar.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hogar en Bahía Blanca | Geriátrico Bahía Blanca | Hogar Luz",
    description: "Hogar de ancianos en Bahía Blanca con atención médica integral y ambiente familiar",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Hogar Luz",
              description: "Hogar de ancianos en Bahía Blanca con atención médica integral y ambiente familiar",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bahía Blanca",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              telephone: "+54 9 2914 41-7951",
              openingHours: "Mo-Su 00:00-23:59",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-38.7183",
                longitude: "-62.2669",
              },
              sameAs: ["https://wa.me/5492914417951"],
              serviceType: "Nursing Home",
              areaServed: "Bahía Blanca, Buenos Aires, Argentina",
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
