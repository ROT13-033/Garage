"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="bg-card/95 backdrop-blur-lg border-t border-border p-4">
        <div className="flex gap-3">
          <a
            href="tel:+31338880631"
            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Bellen</span>
          </a>
          <a
            href="https://wa.me/31338880631"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold py-4 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
