"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { SmartHeader } from "@/components/SmartHeader"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { Carousel } from "@/components/Carousel"
import { Footer } from "@/components/Footer"
import { Cart } from "@/components/Cart"
import { ScrollToTop } from "@/components/ScrollToTop"
import { CertificationsBadges } from "@/components/CertificationsBadges"
import { AboutSection } from "@/components/AboutSection"
import { ProductCollage } from "@/components/ProductCollage"
import { FAQSection } from "@/components/FAQSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCartOpen = () => {
    setIsCartOpen(true)
  }

  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  return (
    <div>
      <Header onCartClick={handleCartOpen} />
      <SmartHeader onCartClick={handleCartOpen} />
      <Navigation />
      <HeroSection />
      <Carousel />
      <ProductCollage />
      <AboutSection />
      <CertificationsBadges />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      
      {/* Global Cart */}
      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
