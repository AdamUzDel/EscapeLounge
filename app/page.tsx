import { Montserrat } from "next/font/google"
import Hero from "@/components/hero"
import MenuSection from "@/components/menu-section"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import {
  breakfast,
  starters,
  mainMeals,
  chicken,
  beef,
  fish,
  pork,
  goat,
  platters,
  pizzas,
  burgers,
  extras,
  sauces,
} from "@/lib/menu-data"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${montserrat.className} min-h-screen bg-[#f9f5f0]`}>
      <Hero />

      <div className="container mx-auto px-4 py-16">
        <h2 id="menu" className="text-4xl font-bold text-center text-[#8B4513] mb-16">Our Menu</h2>

        <MenuSection title="Breakfast" items={breakfast} />
        <MenuSection title="Starters" items={starters} />
        <MenuSection title="Main Meals" items={mainMeals} />
        <MenuSection title="Chicken" items={chicken} />
        <MenuSection title="Beef" items={beef} />
        <MenuSection title="Fish" items={fish} />
        <MenuSection title="Pork" items={pork} />
        <MenuSection title="Goat" items={goat} />
        <MenuSection title="Platters to Share" items={platters} />
        <MenuSection title="Pizza Galore" items={pizzas} />
        <MenuSection title="The Burger" items={burgers} />
        <MenuSection title="Extras" items={extras} />
        <MenuSection title="Sauces" items={sauces} />
      </div>

      <About />
      <Contact />
      <Footer />
    </main>
  )
}

