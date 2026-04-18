"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Gauge, Cpu, Thermometer, Droplets, Activity, Zap } from "lucide-react"

const diagnosticItems = [
  {
    icon: Gauge,
    title: "OBD-II Uitlezen",
    description: "Complete motormanagement diagnose met professionele apparatuur",
    status: "Beschikbaar",
    value: "100+",
    unit: "foutcodes",
  },
  {
    icon: Cpu,
    title: "ECU Diagnostiek",
    description: "Geavanceerde analyse van de boordcomputer en modules",
    status: "Actief",
    value: "Real-time",
    unit: "monitoring",
  },
  {
    icon: Thermometer,
    title: "Thermische Analyse",
    description: "Detectie van oververhitting en koelsysteemproblemen",
    status: "Optimaal",
    value: "±0.5°C",
    unit: "precisie",
  },
  {
    icon: Droplets,
    title: "Vloeistof Check",
    description: "Controle van alle vitale vloeistoffen en niveaus",
    status: "Compleet",
    value: "8",
    unit: "punten",
  },
  {
    icon: Activity,
    title: "Emissie Test",
    description: "Uitlaatgas analyse conform APK-normen",
    status: "Gecertificeerd",
    value: "RDW",
    unit: "approved",
  },
  {
    icon: Zap,
    title: "Elektronica Scan",
    description: "Controle van alle elektrische systemen en sensoren",
    status: "Actief",
    value: "360°",
    unit: "coverage",
  },
]

export function Diagnostics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="diagnose" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
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
            <Gauge className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">
              Diagnostiek
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Precisie</span>{" "}
            <span className="text-primary">Diagnose</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art diagnoseapparatuur voor complete inzicht in de gezondheid van uw voertuig
          </p>
        </motion.div>

        {/* Diagnostic Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon and Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-green-500 uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-mono font-bold text-foreground">
                      {item.value}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {item.unit}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-secondary/50 border border-border rounded-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-mono text-sm text-foreground">Diagnose vanaf</span>
            </div>
            <span className="text-2xl font-bold text-primary">€49,-</span>
            <span className="text-sm text-muted-foreground">incl. rapport</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
