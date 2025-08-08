"use client"

import { Header } from "@/components/Header"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { Carousel } from "@/components/Carousel"
import {Footer} from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <HeroSection />
      <Carousel />
      <Footer />
    </div>
  )
}
