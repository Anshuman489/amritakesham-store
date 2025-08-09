"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
  ShoppingCart,
  Menu,
  X
} from "lucide-react"
import { Cart } from "./Cart"

export function Header({ logoSrc = "/logo.png" }: { logoSrc?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header className="bg-white border-b-4 border-[#15442F]">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left side - Social Icons */}
          <div className="flex items-center justify-start space-x-3">
            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-600 hover:text-blue-400 transition-colors duration-200 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer" />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center space-x-2 logo">
              <Image
                src={logoSrc}
                alt="AmrithaKesham Logo"
                width={50}
                height={50}
                />
            <div className="logo-text">
              Amrithakesham
            </div>
          </div>

          {/* Right side - User and Cart Icons */}
          <div className="flex items-center justify-end space-x-1 sm:space-x-2">
            <button className="p-1 sm:p-2 hover:bg-gray-50 rounded-md transition-colors">
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-1 sm:p-2 hover:bg-gray-50 rounded-md transition-colors relative"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 cursor-pointer" />
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Social Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-6">
              <Facebook className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-600 hover:text-blue-400 transition-colors duration-200 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer" />
            </div>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}
