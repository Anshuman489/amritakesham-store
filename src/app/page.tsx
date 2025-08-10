"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/Header"
import { SmartHeader } from "@/components/SmartHeader"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { Carousel } from "@/components/Carousel"
import { ProductDetails } from "@/components/ProductDetails"
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
  const [showToast, setShowToast] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const handleCartOpen = () => {
    setIsCartOpen(true)
  }

  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  // Listen for open-cart event to open the cart and scroll to top
  useEffect(() => {
    const openCartHandler = () => {
      setIsCartOpen(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1800);
    };
    window.addEventListener("open-cart", openCartHandler);
    return () => window.removeEventListener("open-cart", openCartHandler);
  }, []);

  // Sync cart count with localStorage
  useEffect(() => {
    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartCount(cart.length);
      } catch {
        setCartCount(0);
      }
    };
    updateCartCount();
    window.addEventListener("cart-updated", updateCartCount);
    return () => window.removeEventListener("cart-updated", updateCartCount);
  }, []);

  return (
    <div>
      {/* Toast Notification */}
      <div
        className={`fixed top-6 left-1/2 z-[100] -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-base font-medium transition-opacity duration-700 ${showToast ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ pointerEvents: showToast ? 'auto' : 'none' }}
      >
        Added to cart
      </div>
  <Header onCartClick={handleCartOpen} cartItemCount={cartCount} />
  <SmartHeader onCartClick={handleCartOpen} cartItemCount={cartCount} />
      <Navigation />
      <HeroSection />
      <Carousel />
      <ProductDetails />
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
