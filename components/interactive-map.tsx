"use client"

import { useEffect, useRef } from "react"

interface InteractiveMapProps {
  className?: string
}

export default function InteractiveMap({ className = "" }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current) {
      // Dynamically import Leaflet to avoid SSR issues
      import("leaflet").then((L) => {
        // Clear any existing map
        if (mapRef.current) {
          mapRef.current.innerHTML = ""
        }

        // Coordinates for Bahía Blanca center (approximate area near Rondeau 300)
        const bahiaBlancaCoords: [number, number] = [-38.7183, -62.2669]

        // Create map
        const map = L.map(mapRef.current!).setView(bahiaBlancaCoords, 15)

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map)

        // Add a circle marker with low opacity blue
        const circle = L.circle(bahiaBlancaCoords, {
          color: "#3b82f6",
          fillColor: "#3b82f6",
          fillOpacity: 0.3,
          radius: 150,
          weight: 2,
        }).addTo(map)

        // Add popup
        circle.bindPopup("<b>Hogar Luz</b><br>Zona céntrica de Bahía Blanca")

        // Cleanup function
        return () => {
          map.remove()
        }
      })
    }
  }, [])

  return <div ref={mapRef} className={`w-full h-80 rounded-lg shadow-lg ${className}`} style={{ minHeight: "320px" }} />
}
