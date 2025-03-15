"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 bg-[#2D1E0F] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">About Escape Lounge</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>

          <p className="text-lg mb-8">
            Escape Lounge offers an elegant dining experience with culinary delights crafted with love and care. Our
            menu features a diverse selection of dishes from breakfast to dinner, with special attention to quality
            ingredients and exquisite presentation.
          </p>

          <p className="text-lg mb-8">
            Whether you&apos;re joining us for a hearty breakfast, a business lunch, or a romantic dinner, our dedicated team
            ensures that every visit to Escape Lounge is memorable.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#D4AF37] text-[#2D1E0F] font-semibold rounded-md"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

