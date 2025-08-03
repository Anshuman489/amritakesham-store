import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <HeroSection />
      {/* <section className="p-8">About Us</section>
      <section className="p-8">Products & Quick Checkout</section>
      <section className="p-8">Testimonials</section>
      <section className="p-8">FAQ</section> */}
    </div>
  )
}
