import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2D1E0F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Escape Lounge</h3>
            <p className="mb-4">
              Savor in our culinary delights crafted with love and care. We are committed to giving you an elegancy
              experience in Art of fine dining.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="mb-2">Kigo Road, Lubowa Next To National Water Offices Kitiko</p>
            <p className="mb-2">Phone: 0788013518 / 0707748353</p>
            <p>Email: info@escapelounge.com</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p className="mb-2">Monday - Friday: 7:00 AM - 11:00 PM</p>
            <p className="mb-2">Saturday: 8:00 AM - 11:00 PM</p>
            <p>Sunday: 8:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Escape Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

