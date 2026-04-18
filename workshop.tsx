"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Wrench, Settings, Car, Cog, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Wrench,
    title: "Reparatie & Onderhoud",
    description: "Van kleine reparaties tot complete motorrevises. Wij behandelen elk voertuig met dezelfde precisie.",
    features: ["Motorwerk", "Remmen", "Ophanging", "Uitlaat"],
  },
  {
    icon: Settings,
    title: "Service Beurten",
    description: "Periodiek onderhoud volgens fabrieksspecificaties. Behoud van garantie en optimale prestaties.",
    features: ["Kleine beurt", "Grote beurt", "Vloeistoffen", "Filters"],
  },
  {
    icon: Car,
    title: "APK Keuring",
    description: "RDW erkende keuringsstation. Snelle doorloop met uitgebreide pre-check.",
    features: ["RDW erkend", "Pre-check", "Reparatie", "Herkeuring"],
  },
  {
    icon: Cog,
    title: "Specialistisch Werk",
    description: "Distributie, koppeling, turbo en meer. Complexe reparaties door ervaren monteurs.",
    features: ["Distributie", "Koppeling", "Turbo", "Injectoren"],
  },
]

export function Workshop() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="werkplaats" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        {/* Diagonal stripes */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              white 20px,
              white 21px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">
              De Werkplaats
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Pure</span>{" "}
            <span className="text-primary">Techniek</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Geen glimmende showroom, maar een echte werkplaats waar vakmanschap centraal staat
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-8 py-4 bg-secondary/30 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-mono">Ma-Vr 08:00-17:30</span>
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  Beschikbaar
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workshop Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: "3", label: "Hefbruggen", suffix: "+" },
            { value: "15", label: "Jaar Ervaring", suffix: "+" },
            { value: "1000", label: "Tevreden Klanten", suffix: "+" },
            { value: "24", label: "Uur Service", suffix: "h" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-secondary/30 border border-border rounded-lg"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl font-bold text-primary font-mono">
                  {stat.value}
                </span>
                <span className="text-lg text-muted-foreground">{stat.suffix}</span>
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 py-6"
          >
            <a href="tel:+31338880631">
              Maak een Afspraak
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
