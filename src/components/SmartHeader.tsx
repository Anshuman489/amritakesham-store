"use client"

import { useState, useEffect, useRef } from "react"

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  User,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react"
import { authClient } from "@/lib/auth-client";
import { Logout } from "./logout";
import Link from "next/link";
import Image from "next/image"

interface SmartHeaderProps {
  onCartClick: () => void
  cartItemCount?: number
  logoSrc?: string
}

export function SmartHeader({ onCartClick, cartItemCount = 2, logoSrc = "/logo.png" }: SmartHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const isLoggedIn = !!user;
  const name = user?.name ?? (user?.email ? user.email.split("@")[0] : undefined) ?? "there";
  // Dropdown close on outside click/scroll/Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (toggleRef.current?.contains(target)) return;
      if (dropdownRef.current?.contains(target)) return;
      setShowDropdown(false);
    }
    function handleScroll() { setShowDropdown(false); }
    function handleKeydown(e: KeyboardEvent) { if (e.key === "Escape") setShowDropdown(false); }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("keydown", handleKeydown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [showDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide smart header when:
      // 1. At the very top (currentScrollY <= 50) - close to original header
      // 2. OR when scrolling down
      
      // Show smart header only when:
      // 1. User has scrolled down past 100px (not at the very top)
      // 2. User is scrolling UP (currentScrollY < lastScrollY)
      // 3. But not too close to the top (currentScrollY > 10)
      
      if (currentScrollY <= 10) {
        // Close to original header/nav area - hide smart header
        setIsVisible(false)
      } else if (currentScrollY > 100 && currentScrollY < lastScrollY) {
        // Scrolling up and far enough from top - show smart header
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide smart header
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleCartClick = () => {
    // Hide smart header immediately when starting to scroll to top
    setIsVisible(false)
    
    // Open cart immediately (no delay)
    onCartClick()
    
    // Scroll to top smoothly (happens in parallel with cart opening)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-30 bg-white border-b-4 border-[#15442F] shadow-lg transition-opacity duration-200 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ marginRight: 0 }}
    >
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
          <div className="flex items-center justify-center space-x-2 logo cursor-pointer" onClick={() => window.location.href = '/'}>
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
          <div className="flex items-center justify-end space-x-1 sm:space-x-2 relative">
            <button
              ref={toggleRef}
              className="p-1 sm:p-2 hover:bg-gray-200 rounded-md transition-colors cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
              aria-haspopup="menu"
              aria-expanded={showDropdown}
              aria-label="User menu"
            >
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
            </button>
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 top-12 z-50 min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col py-2 px-0 animate-fade-in"
              >
                {/* Arrow */}
                <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45 z-10"></div>
                {/* Profile section */}
                <div className="px-4 py-3 border-b border-gray-100 text-sm text-gray-700 font-medium flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-500" />
                  {isPending
                    ? "Checking..."
                    : isLoggedIn
                    ? `Hi, ${name}`
                    : "Welcome!"}
                </div>
                <div className="flex flex-col py-1 z-10">
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/account"
                        className="px-4 py-2 hover:bg-gray-50 transition-colors text-left text-sm rounded-md"
                        onClick={() => setShowDropdown(false)}
                      >
                        My Account
                      </Link>
                      <div
                        className="px-2 pt-1"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Logout />
                      </div>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      className="px-4 py-2 hover:bg-gray-50 transition-colors text-left text-sm cursor-pointer rounded-md"
                      onClick={() => setShowDropdown(false)}
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            )}
            <button
              onClick={handleCartClick}
              className="p-1 sm:p-2 hover:bg-gray-200 rounded-md transition-colors relative cursor-pointer"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-green-700 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold">
                {cartItemCount}
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
    </div>
  )
}
