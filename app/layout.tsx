import type { Metadata, Viewport } from "next"
import { Lora, Nunito_Sans } from "next/font/google"
import Script from "next/script"
import { jsonLdScript, seoDescription, seoTitle, siteUrl } from "@/lib/site"
import { localBusinessSchema } from "@/lib/schema"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["500", "600", "700"],
})

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  applicationName: "Hogar Luz",
  authors: [{ name: "Hogar Luz" }],
  creator: "Hogar Luz",
  publisher: "Hogar Luz",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: "website",
    siteName: "Hogar Luz",
    locale: "es_AR",
    url: `${siteUrl}/`,
    images: [
      {
        url: "/images/hero-portada.png",
        width: 1024,
        height: 576,
        alt: "Celebración y abrazo en Hogar Luz, geriátrico en Bahía Blanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/images/hero-portada.png"],
  },
  category: "Geriátrico",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${lora.variable} ${nunito.variable} antialiased`}>
      <body className="font-sans">
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17660637922" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17660637922');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(localBusinessSchema),
          }}
        />

        {children}
      </body>
    </html>
  )
}
