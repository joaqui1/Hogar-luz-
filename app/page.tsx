"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Phone,
  MessageCircle,
  MapPin,
  Shield,
  Heart,
  Users,
  Stethoscope,
  Brain,
  Music,
  Scissors,
  GraduationCap,
  Activity,
  Menu,
  X,
  Home,
} from "lucide-react"

export default function HogarLuzPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showInstagramButton, setShowInstagramButton] = useState(false)

  const services = [
    {
      icon: Stethoscope,
      title: "Médico",
      description: "Atención médica profesional y seguimiento continuo de la salud de nuestros residentes.",
    },
    {
      icon: Heart,
      title: "Enfermera",
      description: "Cuidado especializado con personal de enfermería capacitado.",
    },
    {
      icon: Shield,
      title: "Emergencia",
      description: "Servicio de emergencias disponible las 24 horas del día, los 7 días de la semana.",
    },
    {
      icon: Brain,
      title: "Psicopedagogas",
      description: "Taller con psicopedagoga para mantener y rehabilitar las funciones cognitivas.",
    },
    {
      icon: Activity,
      title: "Kinesiólogo",
      description: "Terapia física y rehabilitación para mantener la movilidad y fuerza.",
    },
    {
      icon: Users,
      title: "Terapista ocupacional",
      description: "Actividades terapéuticas para mantener la independencia y calidad de vida.",
    },
    {
      icon: GraduationCap,
      title: "Maestra",
      description: "Actividades educativas y estimulación cognitiva adaptadas a cada residente.",
    },
    {
      icon: Music,
      title: "Profesor de música",
      description: "Terapia musical y actividades recreativas para el bienestar emocional.",
    },
    {
      icon: Scissors,
      title: "Pedicura",
      description: "Cuidado podológico profesional para la salud y comodidad de los pies.",
    },
  ]

  const galleryImages = [
    {
      src: "/gallery/living-room.jpg",
      alt: "Espacios de convivencia - sala de estar con iluminación cálida",
      title: "Espacios de convivencia",
      highRes: "/gallery/living-room.jpg",
    },
    {
      src: "/gallery/outdoor-patio.jpg",
      alt: "Patio exterior con decoración colorida y espacios de descanso",
      title: "Patio exterior",
      highRes: "/gallery/outdoor-patio.jpg",
    },
    {
      src: "/gallery/shared-bedroom.jpg",
      alt: "Habitación luminosa",
      title: "Habitación luminosa",
      highRes: "/gallery/shared-bedroom.jpg",
    },
    {
      src: "/gallery/celebration-table.jpg",
      alt: "Comedor y actividades",
      title: "Comedor y actividades",
      highRes: "/gallery/celebration-table.jpg",
    },
    {
      src: "/gallery/arts-crafts.jpg",
      alt: "Talleres creativos y manualidades",
      title: "Talleres creativos",
      highRes: "/gallery/arts-crafts.jpg",
    },
    {
      src: "/gallery/birthday-party.jpg",
      alt: "Celebraciones y cumpleaños",
      title: "Celebraciones",
      highRes: "/gallery/birthday-party.jpg",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowInstagramButton(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.onload = () => {
      const center = [-38.7198, -62.2657]
      const initialZoom = 15
      const targetPx = 170

      const map = (window as any).L.map("map-ubicacion", {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView(center, initialZoom)
      ;(window as any).L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap",
      }).addTo(map)

      const BLUE = "#1a73e8"
      const circle = (window as any).L.circle(center, {
        radius: 1,
        color: BLUE,
        weight: 2,
        opacity: 0.9,
        fillColor: BLUE,
        fillOpacity: 0.2,
      }).addTo(map)

      function updateCircleRadius() {
        const cPt = map.latLngToContainerPoint(center)
        const edgePt = (window as any).L.point(cPt.x + targetPx, cPt.y)
        const edgeLL = map.containerPointToLatLng(edgePt)
        const meters = map.distance(center, edgeLL)
        circle.setRadius(meters)
      }
      map.on("zoomend resize", updateCircleRadius)
      updateCircleRadius()

      const q = encodeURIComponent("Rondeau 300, Bahía Blanca, Buenos Aires, Argentina")
      document.getElementById("map-ubicacion")?.addEventListener("dblclick", () => {
        window.open(`https://www.google.com/maps?q=${q}`, "_blank", "noopener")
      })
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(link)
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-2xl font-heading font-bold text-primary">Hogar Luz</span>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Button asChild>
                <a href="https://wa.me/5492914417951" target="_blank" rel="noopener noreferrer">
                  Agendar visita
                </a>
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-2">
                <Button asChild className="mt-4">
                  <a href="https://wa.me/5492914417951" target="_blank" rel="noopener noreferrer">
                    Agendar visita
                  </a>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reuni%C3%B3n%20familiar%20en%20baby%20shower-VeuFuLZwfCGE5DUZGpQsQdEinPHjpT.png')`,
            filter: "blur(1px)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 text-center pb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 text-balance">
              Hogar abuelos Bahía Blanca
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 text-pretty">
              Un hogar centrado en la familia, la dignidad y el bienestar cotidiano
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="#por-que-elegirnos" className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Nuestra esencia
                </a>
              </Button>
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white">
                <a href="#servicios" className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Cómo cuidamos a nuestros abuelos
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="#donde-estamos" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  ¿Dónde estamos?
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="por-que-elegirnos" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-16">
              Por qué elegirnos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-3">
                    <Home className="h-6 w-6 text-primary" />
                    Más de 10 años cuidando y acompañando a nuestros abuelos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Una década de experiencia brindando cuidado especializado y acompañamiento integral a nuestros
                    residentes con calidez y profesionalismo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-3">
                    <Heart className="h-6 w-6 text-accent" />
                    Ambiente familiar y cálido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Creamos un verdadero hogar donde cada residente se siente parte de una gran familia, con calidez y
                    respeto.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-3">
                    <Stethoscope className="h-6 w-6 text-accent" />
                    Atención integral profesional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Equipo multidisciplinario de profesionales especializados en geriatría para una atención completa y
                    personalizada.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-3">
                    <Users className="h-6 w-6 text-accent" />
                    Comunicación cercana con familias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mantenemos una comunicación constante y transparente con las familias, brindando tranquilidad y
                    confianza.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
              Servicios de salud y bienestar
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Equipo multidisciplinario: Médico, Enfermera, Emergencia, Psicopedagogas, Kinesiólogo, Terapista
              ocupacional, Maestra, Profesor de música y Pedicura.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                      <CardHeader className="text-center">
                        <service.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                        <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm text-center">
                          {service.description.substring(0, 80)}...
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-heading flex items-center gap-3">
                        <service.icon className="h-6 w-6 text-accent" />
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="text-base">{service.description}</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-4">
              Conocé nuestro hogar
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Espacios diseñados para el bienestar, la comodidad y la alegría de nuestros residentes
            </p>

            <div className="gallery">
              {galleryImages.map((image, index) => (
                <a key={index} className="tile" href={image.highRes} target="_blank" rel="noreferrer noopener">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                  <span className="cap">{image.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="donde-estamos" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-12">
        ¿Dónde estamos?
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary mb-4 text-center">Nuestra ubicación</h3>
          <div
            id="map-ubicacion"
            style={{
              height: "380px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 24px rgba(0,0,0,.08)",
            }}
          />
          <p className="text-center text-muted-foreground mt-4">
            <a
              href="https://www.google.com/maps?q=Rondeau%20300,%20Bah%C3%ADa%20Blanca,%20Buenos%20Aires,%20Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ver en Google Maps
            </a>
          </p>
        </div>

        <div className="flex flex-col">
          {/* Espacio vacío para alinear con el título del mapa */}
          <div className="h-[28px] mb-4 invisible">
            <h3 className="text-xl font-heading font-semibold text-primary text-center">Contacto</h3>
          </div>
          
          <Card className="border-0 shadow-lg h-[380px] flex flex-col">
            <CardContent className="flex flex-col justify-center flex-grow p-6 space-y-6 text-center">
              <div>
                <div className="flex items-center gap-3 justify-center mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                  <h3 className="font-heading text-xl font-semibold text-primary">Contacto Directo</h3>
                </div>
                <p className="text-2xl font-bold text-primary mb-4">+54 9 2914 41-7951</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="flex items-center gap-2">
                    <a
                      href="https://wa.me/5492914417951"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex items-center gap-2">
                    <a href="tel:+5492914417951">
                      <Phone className="h-4 w-4" />
                      Llamar
                    </a>
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  ¿Listo para conocer nuestro hogar?
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Te invitamos a visitarnos y conocer de primera mano el ambiente cálido y profesional que ofrecemos.
                </p>
                <Button asChild className="w-full flex items-center gap-2">
                  <a
                    href="https://wa.me/5492914417951"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Agendar visita ahora
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Home className="h-6 w-6" />
                  <span className="text-xl font-heading font-bold">Hogar Luz</span>
                </div>
                <p className="text-primary-foreground/80">
                  Tu hogar en el centro de Bahía Blanca, donde la calidez y el cuidado especializado se encuentran.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-semibold mb-4">Enlaces útiles</h4>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li>
                    <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="#donde-estamos" className="hover:text-primary-foreground transition-colors">
                      Ubicación
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-semibold mb-4">Contacto</h4>
                <div className="space-y-2 text-primary-foreground/80">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +54 9 2914 41-7951
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Centro, Bahía Blanca
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
              <p>Hogar en Bahía Blanca • Geriátrico en Bahía Blanca • Hogar de ancianos en Bahía Blanca</p>
              <p className="mt-2">© 2024 Hogar Luz. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Instagram button con animación de scroll */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
          showInstagramButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <a href="https://www.instagram.com/hogar_luz/" target="_blank" rel="noopener noreferrer" className="btn-ig">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A5.2 5.2 0 1 1 6.8 13 5.2 5.2 0 0 1 12 7.8Zm0 2a3.2 3.2 0 1 0 3.2 3.2A3.2 3.2 0 0 0 12 9.8Zm5.55-3.05a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"
            />
          </svg>
          <span>Seguinos en Instagram</span>
        </a>
      </div>

      {/* Professional gallery CSS styles */}
      <style jsx>{`
        .btn-ig {
          --ig-grad: linear-gradient(45deg, #F58529 0%, #FEDA77 15%, #DD2A7B 45%, #8134AF 70%, #515BD4 100%);
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 1rem;
          border-radius: 9999px;
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.2px;
          background: #8134AF;
          background: var(--ig-grad);
          box-shadow: 0 10px 24px rgba(81, 91, 212, 0.25);
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
          text-decoration: none;
        }
        .btn-ig:hover {
          transform: translateY(-1px);
          filter: saturate(1.05);
          box-shadow: 0 14px 28px rgba(81, 91, 212, 0.32);
        }
        .btn-ig:active {
          transform: translateY(0);
        }
        .btn-ig svg {
          width: 18px;
          height: 18px;
          display: block;
        }

        .gallery {
          display: grid;
          gap: clamp(12px, 2vw, 20px);
          grid-template-columns: repeat(3, 1fr);
        }
        .tile {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          display: block;
          text-decoration: none;
        }
        .tile img {
          width: 100%;
          height: 100%;
          aspect-ratio: 3/2;
          object-fit: cover;
          display: block;
          transform: scale(1.01);
          transition: transform 0.35s ease, filter 0.35s ease;
        }
        .tile::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.05));
          opacity: 0.9;
          transition: opacity 0.35s ease;
        }
        .cap {
          position: absolute;
          left: 12px;
          bottom: 10px;
          z-index: 2;
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.2px;
          background: rgba(0, 0, 0, 0.35);
          padding: 0.4rem 0.6rem;
          border-radius: 10px;
          backdrop-filter: blur(2px);
        }
        .tile:hover img {
          transform: scale(1.05);
          filter: saturate(1.05) contrast(1.04);
        }
        .tile:hover::after {
          opacity: 1;
        }
        @media (max-width: 1024px) {
          .gallery {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .gallery {
            grid-template-columns: 1fr;
          }
          .cap {
            font-weight: 600;
          }
        }
      `}</style>
    </div>
  )
}