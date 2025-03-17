"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative h-screen flex items-center justify-center bg-[#2D1E0F] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/90">
        <Image
          src="/hero-bg.jpg?height=1080&width=1920"
          alt="Escape Lounge Background"
          fill
          className="object-cover"
          priority
        />    

      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">ESCAPE LOUNGE</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Savor in our culinary delights crafted with love and care. We are committed to giving you an elegancy
            experience in Art of fine dining.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#D4AF37] text-[#2D1E0F] font-semibold rounded-md"
            onClick={scrollToMenu}
          >
            View Our Menu
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        onClick={scrollToMenu}
      >
        <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
      </motion.div>
    </div>
  )
}

