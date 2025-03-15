"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import type { MenuItem } from "@/lib/types"
import Image from "next/image"

interface MenuSectionProps {
  title: string
  items: MenuItem[]
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Show only 4 items when collapsed
  const displayItems = isExpanded ? items : items.slice(0, 4)

  return (
    <motion.section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-[#8B4513] mb-8 pb-2 border-b-2 border-[#D4AF37]">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="h-48 bg-[#f0e6d2] relative overflow-hidden">
              <Image src={"/placeholder.svg?height=400&width=600"} className="w-full h-full object-cover" alt={item.name} fill />
              {/* <img src="/placeholder.svg?height=400&width=600" alt={item.name} className="w-full h-full object-cover" /> */}
              <div className="absolute top-2 right-2 bg-[#D4AF37] text-white px-3 py-1 rounded-full font-bold">
                {item.price}
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-bold text-[#2D1E0F] mb-2">{item.name}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {items.length > 4 && (
        <div className="text-center mt-8">
          <button
            className="px-6 py-2 bg-[#8B4513] text-white rounded-md hover:bg-[#6d3710] transition-colors duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </motion.section>
  )
}

