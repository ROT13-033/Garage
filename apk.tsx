"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileCheck, Shield, Clock, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const apkSteps = [
  {
    step: "01",
    title: "Pre-Check",
    description: "Gratis visuele controle vooraf",
    icon: AlertTriangle,
  },
  {
    step: "02",
    title: "APK Keuring",
    description: "Officiële RDW keuring",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Resultaat",
    description: "Direct duidelijkheid",
    icon: CheckCircle2,
  },
]

export function APK() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="apk" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <FileCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary uppercase tracking-wider">
                APK Keuring
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">RDW</span>{" "}
              <span className="text-primary">Erkend</span>
              <br />
              <span className="text-foreground">Keurstation</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Uw APK keuring in vertrouwde handen. Wij bieden een gratis pre-check 
              om verrassingen te voorkomen. Afkeuring? Wij repareren direct.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Gratis visuele pre-check",
                "Geen wachttijd bij afspraak",
                "Directe reparatie bij afkeuring",
                "Gratis herkeuring binnen 2 weken",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Price Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-6 p-6 bg-card border border-border rounded-lg"
            >
              <div>
                <div className="text-sm text-muted-foreground mb-1">APK Keuring</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary font-mono">€39</span>
                  <span className="text-muted-foreground">,-</span>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Shield className="w-4 h-4" />
                  RDW Erkend
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  30 minuten
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Process Steps */}
            <div className="space-y-6">
              {apkSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="relative"
                >
                  <div className="flex gap-6">
                    {/* Step Number */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-secondary border border-border rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-mono font-bold text-primary">
                          {item.step}
                        </span>
                      </div>
                      {index < apkSteps.length - 1 && (
                        <div className="flex-1 w-px bg-border my-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6">
                      <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 ml-[88px]"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
              >
                <a href="tel:+31338880631">
                  Plan APK Keuring
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
