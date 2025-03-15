"use client"
import { motion } from "framer-motion"
import { Phone, MapPin, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-[#f9f5f0]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#8B4513] mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Visit us or get in touch to make a reservation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#2D1E0F] mb-6">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#D4AF37] mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">0788013518 / 0707748353</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#D4AF37] mr-4" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">Kigo Road, Lubowa Next To National Water Offices Kitiko</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#D4AF37] mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@escapelounge.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-5 h-5 text-[#D4AF37] mr-4" />
                <div>
                  <p className="font-medium">Opening Hours</p>
                  <p className="text-gray-600">Monday - Sunday: 7:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#2D1E0F] mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-[#8B4513] text-white font-medium rounded-md hover:bg-[#6d3710] transition-colors duration-300"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

