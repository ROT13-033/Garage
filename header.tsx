"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Gauge, Wrench, FileCheck, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Diagnose", href: "#diagnose", icon: Gauge },
  { label: "Reparatie", href: "#werkplaats", icon: Wrench },
  { label: "APK", href: "#apk", icon: FileCheck },
  { label: "Locatie", href: "#locatie", icon: MapPin },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glassmorphism py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="6" y="4" width="12" height="16" rx="1" className="fill-primary-foreground" />
                    <circle cx="12" cy="8" r="2" className="fill-primary" />
                    <rect x="9" y="12" width="6" height="2" rx="0.5" className="fill-primary" />
                    <rect x="9" y="16" width="6" height="1" rx="0.5" className="fill-primary" />
                  </svg>
                </div>
                <motion.div
                  className="absolute inset-0 bg-primary rounded opacity-0 group-hover:opacity-30 blur-lg transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground">D-GARAGE</span>
                <span className="text-[10px] font-mono text-muted-foreground tracking-[0.2em] uppercase">Amersfoort</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
                >
                  <item.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  <span>{item.label}</span>
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-px bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 group"
              >
                <a href="tel:+31338880631">
                  <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Afspraak Plannen
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 glassmorphism lg:hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary/50 rounded transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </motion.a>
              ))}
              <Button
                asChild
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <a href="tel:+31338880631">
                  <Calendar className="w-4 h-4 mr-2" />
                  Afspraak Plannen
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
