import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Escape Lounge | Fine Dining Experience",
  description:
    "Savor in our culinary delights crafted with love and care. We are committed to giving you an elegancy experience in Art of fine dining.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

