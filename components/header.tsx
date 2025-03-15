"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#2D1E0F] py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl">
          ESCAPE LOUNGE
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
            Home
          </Link>
          <Link href="#menu" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
            Menu
          </Link>
          <Link href="#about" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
            About
          </Link>
          <Link href="#contact" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
            Contact
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#D4AF37] text-[#2D1E0F] font-medium rounded-md"
          >
            Book a Table
          </motion.button>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#2D1E0F] z-50 flex flex-col p-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-end">
              <button className="text-white" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              <Link href="/" className="text-white text-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="#menu" className="text-white text-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                Menu
              </Link>
              <Link href="#about" className="text-white text-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#contact" className="text-white text-2xl" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#D4AF37] text-[#2D1E0F] font-medium rounded-md text-xl"
              >
                Book a Table
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

