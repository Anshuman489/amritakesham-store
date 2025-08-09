"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(1) // Start at index 1 (first real slide)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0) // Real-time drag offset
  const [dragStartTime, setDragStartTime] = useState(0) // Track drag start time for velocity calculation
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false) // Prevent rapid navigation
  const [isButtonNavigation, setIsButtonNavigation] = useState(false) // Track button navigation specifically
  const sliderRef = useRef<HTMLDivElement>(null)
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Slider data - simple slides without text
  const slides = [
    {
      id: 1,
      image: "/heronew.png",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/hero2.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "/hero3.jpg",
      alt: "Slide 3"
    }
  ]

  // Auto-slide functionality (pause when dragging or button navigating)
  useEffect(() => {
    if (isDragging || isButtonNavigation) return // Don't auto-slide when user is interacting
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1
        if (next === slides.length + 1) {
          // After reaching duplicate first slide, reset to actual first slide
          setTimeout(() => {
            setIsTransitioning(false)
            setCurrentSlide(1)
            setTimeout(() => setIsTransitioning(true), 50)
          }, 500)
        }
        return next
      })
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length, isDragging, isButtonNavigation])

  // Cleanup navigation timeout on unmount
  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current)
      }
    }
  }, [])

  const goToSlide = (index: number) => {
    if (isButtonNavigation) return // Prevent rapid button navigation only
    setIsButtonNavigation(true)
    setCurrentSlide(index + 1) // Add 1 to account for duplicate last slide at beginning
    
    // Reset button navigation lock after much shorter duration
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current)
    navigationTimeoutRef.current = setTimeout(() => {
      setIsButtonNavigation(false)
    }, 100) // Reduced to 100ms
  }

  // Navigation functions for arrow buttons with infinite scrolling
  const goToNextSlide = () => {
    if (isButtonNavigation) return // Prevent rapid button navigation only
    setIsButtonNavigation(true)
    
    const next = currentSlide + 1
    setCurrentSlide(next)
    
    if (next === slides.length + 1) {
      // After reaching duplicate first slide, reset to actual first slide
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(1)
        setTimeout(() => {
          setIsTransitioning(true)
          // Clear navigation lock immediately after reset to allow continuous scrolling
          setIsButtonNavigation(false)
        }, 50)
      }, 500)
      return // Don't set timeout below for reset cases
    }
    
    // Reset button navigation lock after shorter duration (only for normal navigation)
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current)
    navigationTimeoutRef.current = setTimeout(() => {
      setIsButtonNavigation(false)
    }, 200) // Much shorter for arrow clicks
  }

  const goToPrevSlide = () => {
    if (isButtonNavigation) return // Prevent rapid button navigation only
    setIsButtonNavigation(true)
    
    const prev = currentSlide - 1
    setCurrentSlide(prev)
    
    if (prev === 0) {
      // After reaching duplicate last slide, reset to actual last slide
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(slides.length)
        setTimeout(() => {
          setIsTransitioning(true)
          // Clear navigation lock immediately after reset to allow continuous scrolling
          setIsButtonNavigation(false)
        }, 50)
      }, 500)
      return // Don't set timeout below for reset cases
    }
    
    // Reset button navigation lock after much shorter duration (only for normal navigation)
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current)
    navigationTimeoutRef.current = setTimeout(() => {
      setIsButtonNavigation(false)
    }, 100) // Reduced to 100ms
  }

  // Get the active dot index - account for the duplicate slides
  const getActiveDotIndex = () => {
    if (currentSlide === 0) return slides.length - 1 // Duplicate last slide
    if (currentSlide === slides.length + 1) return 0 // Duplicate first slide
    return currentSlide - 1 // Actual slides (subtract 1 for duplicate last slide at start)
  }

  // Drag-specific navigation functions (bypass button navigation locks)
  const dragToNextSlide = () => {
    const next = currentSlide + 1
    setCurrentSlide(next)
    
    if (next === slides.length + 1) {
      // After reaching duplicate first slide, reset to actual first slide
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(1)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 500)
    }
  }

  const dragToPrevSlide = () => {
    const prev = currentSlide - 1
    setCurrentSlide(prev)
    
    if (prev === 0) {
      // After reaching duplicate last slide, reset to actual last slide
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentSlide(slides.length)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 500)
    }
  }

  // Touch/Mouse drag handlers with real-time feedback
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault()
    
    // Clear any existing navigation lock to allow immediate dragging
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current)
      setIsButtonNavigation(false)
    }
    
    setIsDragging(true)
    setIsTransitioning(false) // Disable transitions during drag
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
    setCurrentX(clientX)
    setDragOffset(0)
    setDragStartTime(Date.now()) // Capture start time for velocity calculation
  }

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setCurrentX(clientX)
    
    // Calculate real-time drag offset
    const containerWidth = sliderRef.current?.offsetWidth || window.innerWidth
    const dragDistance = clientX - startX
    const dragPercent = (dragDistance / containerWidth) * 100
    setDragOffset(dragPercent)
  }

  const handleEnd = (e?: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return
    
    if (e) e.preventDefault()
    
    const diff = startX - currentX
    const containerWidth = sliderRef.current?.offsetWidth || window.innerWidth
    const dragDuration = Date.now() - dragStartTime
    const dragDistance = Math.abs(diff)
    
    // Calculate drag velocity (pixels per millisecond)
    const velocity = dragDistance / dragDuration
    
    // Determine if this is a quick swipe or slow drag
    const isQuickSwipe = dragDuration < 300 && velocity > 0.3 // Quick movement
    const isSlowDrag = dragDuration >= 300 // Slow, deliberate drag
    
    let shouldSlide = false
    
    if (isQuickSwipe) {
      // For quick swipes, use a smaller threshold (20% of container width)
      const swipeThreshold = containerWidth * 0.2
      shouldSlide = dragDistance > swipeThreshold
    } else if (isSlowDrag) {
      // For slow drags, require 50% of container width
      const holdThreshold = containerWidth * 0.5
      shouldSlide = dragDistance > holdThreshold
    }
    
    // Re-enable transitions for smooth snap
    setIsTransitioning(true)
    setDragOffset(0) // Reset drag offset
    
    if (shouldSlide) {
      if (diff > 0) {
        // Dragged left - go to next slide (bypass navigation locks)
        dragToNextSlide()
      } else {
        // Dragged right - go to previous slide (bypass navigation locks)
        dragToPrevSlide()
      }
    }
    
    setIsDragging(false)
    setStartX(0)
    setCurrentX(0)
    setDragStartTime(0)
  }

  return (
    <section className="relative w-full 
                        h-[450px]        /* base height */
                        sm:h-[500px]     /* small screens and up */
                        md:h-[550px]     /* medium screens and up */
                        lg:h-[600px]     /* large screens and up */
                        xl:h-[635px]     /* extra large screens */
                        overflow-hidden">
      
      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className={`relative w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={isDragging ? handleMove : undefined}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        style={{ touchAction: 'pan-y pinch-zoom' }} // Allow vertical scroll but prevent horizontal
      >
        {/* Slides with duplicates for infinite scrolling */}
        {[
          // Duplicate of last slide (for backward infinite scroll)
          { ...slides[slides.length - 1], id: `duplicate-last` },
          // Original slides
          ...slides,
          // Duplicate of first slide (for forward infinite scroll)
          { ...slides[0], id: `duplicate-first` }
        ].map((slide, index) => {
          // Calculate the base transform position
          const baseTransform = (index - currentSlide) * 100
          // Add drag offset for real-time feedback
          const finalTransform = baseTransform + dragOffset
          
          return (
            <div
              key={slide.id}
              className={`slideshow__slide absolute inset-0 w-full h-full ${
                isTransitioning && !isDragging ? 'transition-transform duration-500 ease-out' : ''
              } ${
                index === currentSlide ? 'is-selected' : ''
              }`}
              style={{
                transform: `translateX(${finalTransform}%)`,
                willChange: isDragging ? 'transform' : 'auto'
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className={`absolute w-full h-full object-cover ${
                  slide.image === '/hero2.jpg' 
                    ? 'object-[center_15%]' 
                    : 'object-center'
                }`}
              />
            </div>
          )
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-black/50 hover:bg-black/70 text-white rounded-full 
                   w-12 h-12 flex items-center justify-center
                   transition-all duration-200 hover:scale-110
                   backdrop-blur-sm border border-white/20 cursor-pointer"
        aria-label="Previous slide"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-black/50 hover:bg-black/70 text-white rounded-full 
                   w-12 h-12 flex items-center justify-center
                   transition-all duration-200 hover:scale-110
                   backdrop-blur-sm border border-white/20 cursor-pointer"
        aria-label="Next slide"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 border-2 ${
                index === getActiveDotIndex()
                  ? 'bg-emerald-700 border-emerald-700 shadow-lg shadow-emerald-700/30'
                  : 'bg-gray-400 border-gray-400 hover:bg-emerald-500 hover:border-emerald-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
