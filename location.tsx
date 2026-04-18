"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Clock, Navigation, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const openingHours = [
  { day: "Maandag", hours: "08:00 - 17:30" },
  { day: "Dinsdag", hours: "08:00 - 17:30" },
  { day: "Woensdag", hours: "08:00 - 17:30" },
  { day: "Donderdag", hours: "08:00 - 17:30" },
  { day: "Vrijdag", hours: "08:00 - 17:30" },
  { day: "Zaterdag", hours: "09:00 - 13:00" },
  { day: "Zondag", hours: "Gesloten" },
]

export function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const today = new Date().getDay()
  const dayIndex = today === 0 ? 6 : today - 1

  return (
    <section id="locatie" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, white 1px, transparent 1px),
              linear-gradient(white 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">
              Locatie
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Vakmanschap in het Hart van de</span>{" "}
            <span className="text-primary">Keistad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gemakkelijk bereikbaar op industrieterrein de Isselt, vlakbij de A28
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative aspect-[16/10] bg-background border border-border rounded-lg overflow-hidden"
          >
            {/* Dark styled map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.8!2d5.3847!3d52.1744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c64670e8e1e8f9%3A0x8b5d2b5e5b5b5b5b!2sDe%20Isselt%2C%20Amersfoort!5e0!3m2!1snl!2snl!4v1699999999999!5m2!1snl!2snl"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="D-Garage Locatie"
            />

            {/* Map Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-card via-transparent to-transparent" />

            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
              </motion.div>
            </div>

            {/* Navigate Button */}
            <div className="absolute bottom-4 right-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
              >
                <a
                  href="https://www.google.com/maps/dir//De+Isselt,+Amersfoort"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Navigeer
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Adres</h3>
                  <p className="text-muted-foreground">
                    Industrieterrein De Isselt
                    <br />
                    3821 Amersfoort
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefoon</h3>
                  <a 
                    href="tel:+31338880631" 
                    className="text-lg font-mono text-primary hover:underline"
                  >
                    033 888 0631
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                  <a 
                    href="mailto:info@d-garage.nl" 
                    className="text-primary hover:underline"
                  >
                    info@d-garage.nl
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Openingstijden</h3>
              </div>
              <div className="space-y-2">
                {openingHours.map((item, index) => (
                  <div
                    key={item.day}
                    className={`flex justify-between py-2 px-3 rounded text-sm ${
                      index === dayIndex
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span>{item.day}</span>
                    <span className="font-mono">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
