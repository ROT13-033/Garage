"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [rpm, setRpm] = useState(2500)
  const [cylinders, setCylinders] = useState<boolean[]>(Array(12).fill(true))
  const canvasRef = useRef<HTMLDivElement>(null)

  // Simulate RPM fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setRpm(prev => {
        const change = Math.random() * 400 - 200
        return Math.max(800, Math.min(6000, prev + change))
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Simulate cylinder firing
  useEffect(() => {
    const interval = setInterval(() => {
      const firingOrder = [0, 6, 3, 9, 1, 7, 4, 10, 2, 8, 5, 11]
      const currentIndex = Math.floor((Date.now() / 50) % 12)
      setCylinders(prev => {
        const newState = [...prev]
        newState[firingOrder[currentIndex]] = !newState[firingOrder[currentIndex]]
        return newState
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-concrete">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,34,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,34,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              width: '200%',
              left: '-50%',
              top: `${20 + i * 15}%`,
              transform: 'rotate(-15deg)',
            }}
            animate={{
              x: ['-10%', '10%'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Werkplaats Online
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-foreground">High-End</span>
              <br />
              <span className="text-primary text-glow">Automotive</span>
              <br />
              <span className="text-foreground">Service</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Waar techniek een kunstvorm is. Ervaar de precisie van{" "}
              <span className="text-foreground font-medium">vakmanschap</span> op de Isselt, Amersfoort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
              >
                <a href="tel:+31338880631">
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  033 888 0631
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary text-foreground font-semibold text-lg px-8 py-6"
              >
                <a href="#werkplaats">
                  Bekijk Diensten
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - V12 Engine Placeholder with HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Engine Canvas Container */}
            <div 
              ref={canvasRef}
              id="canvas-container"
              className="relative aspect-square max-w-lg mx-auto"
            >
              {/* Central Engine Visualization Placeholder */}
              <div className="absolute inset-8 bg-steel rounded border border-border/50 overflow-hidden">
                {/* Engine Block Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    {/* V12 Cylinder Banks */}
                    <div className="absolute inset-0 flex justify-center gap-4">
                      {/* Left Bank */}
                      <div className="flex flex-col justify-center gap-1">
                        {cylinders.slice(0, 6).map((active, i) => (
                          <motion.div
                            key={`l-${i}`}
                            className={`w-8 h-6 rounded-sm border transition-colors duration-75 ${
                              active 
                                ? 'bg-primary/80 border-primary shadow-[0_0_10px_rgba(255,34,0,0.5)]' 
                                : 'bg-secondary/50 border-border'
                            }`}
                            animate={{ scale: active ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 0.1 }}
                          />
                        ))}
                      </div>
                      {/* Center Block */}
                      <div className="w-12 bg-secondary/30 rounded border border-border/30 flex items-center justify-center">
                        <div className="w-2 h-full bg-border/20" />
                      </div>
                      {/* Right Bank */}
                      <div className="flex flex-col justify-center gap-1">
                        {cylinders.slice(6, 12).map((active, i) => (
                          <motion.div
                            key={`r-${i}`}
                            className={`w-8 h-6 rounded-sm border transition-colors duration-75 ${
                              active 
                                ? 'bg-primary/80 border-primary shadow-[0_0_10px_rgba(255,34,0,0.5)]' 
                                : 'bg-secondary/50 border-border'
                            }`}
                            animate={{ scale: active ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Engine Label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground">
                      V12 ENGINE BLOCK
                    </div>
                  </div>
                </div>

                {/* Scan Lines Effect */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                  }}
                />
              </div>

              {/* HUD Panels */}
              {/* Top Left - RPM */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-0 left-0 w-40 bg-card/90 border border-border rounded p-3 border-glow"
              >
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  Engine RPM
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-mono font-bold text-primary">
                    {Math.round(rpm)}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">rpm</span>
                </div>
                <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    animate={{ width: `${(rpm / 6000) * 100}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </motion.div>

              {/* Top Right - Cylinder Status */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute top-0 right-0 w-40 bg-card/90 border border-border rounded p-3"
              >
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  Cylinder Status
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-mono text-green-500">All Active</span>
                </div>
                <div className="mt-2 grid grid-cols-6 gap-0.5">
                  {cylinders.map((active, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-colors ${
                        active ? 'bg-primary' : 'bg-secondary'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Bottom Left - Compression */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-0 left-0 w-40 bg-card/90 border border-border rounded p-3"
              >
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  Kompressie Status
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-mono font-bold text-green-500">98</span>
                  <span className="text-xs font-mono text-muted-foreground">%</span>
                </div>
                <div className="text-[10px] font-mono text-green-500/70 mt-1">Optimaal</div>
              </motion.div>

              {/* Bottom Right - Thermal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-0 right-0 w-40 bg-card/90 border border-border rounded p-3"
              >
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  Thermal Dynamics
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-foreground">92°C</span>
                  <span className="text-[10px] font-mono text-green-500">Optimaal</span>
                </div>
                <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-gradient-to-r from-green-500 to-yellow-500 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#diagnose"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
