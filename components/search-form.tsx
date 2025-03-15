"use client"
import { useState } from "react"
import type React from "react"

import { Search } from "lucide-react"

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-4">
      <input
        type="text"
        placeholder="Search menu..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
    </form>
  )
}

