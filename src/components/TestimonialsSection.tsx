"use client"
import { useState, useEffect, useRef } from "react"

// Define a type for testimonials
interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
}

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 md:w-5 md:h-5 ${
            star <= rating ? 'text-green-500 fill-current' : 'text-gray-300'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// Testimonial Card Component
function TestimonialCard({ testimonial, onHover, onLeave }: { 
  testimonial: Testimonial;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div 
      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 w-[240px] h-[240px] md:w-[260px] md:h-[260px] mx-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-grab active:cursor-grabbing select-none flex flex-col justify-between"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex-1">
        <div className="mb-3">
          <StarRating rating={testimonial.rating} />
        </div>
        {/* Use single quotes to avoid unescaped double quote error */}
        <p className="text-gray-700 text-xs leading-relaxed line-clamp-4 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {'"'}{testimonial.review}{'"'}
        </p>
      </div>
      <div className="flex items-center mt-auto">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-xs mr-2 flex-shrink-0">
          {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-[#15442F] text-xs truncate" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {testimonial.name}
          </h4>
          <p className="text-gray-500 text-xs truncate" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {testimonial.location.split(',')[0]}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      review: "Love these natural products! My hair is so soft and healthy now. Highly recommended!"
    },
    {
      id: 2,
      name: "Anjali Gupta",
      location: "Delhi, India",
      rating: 5,
      review: "Amazing hair oil! Been using for 3 months. Hair fall reduced and beautiful shine."
    },
    {
      id: 3,
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 4,
      review: "Great service and authentic products. Beautiful packaging. Curly hair more manageable."
    },
    {
      id: 4,
      name: "Kavya Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      review: "Impressed with natural ingredients! Hair texture improved dramatically. Love it!"
    },
    {
      id: 5,
      name: "Ritu Agarwal",
      location: "Jaipur, Rajasthan",
      rating: 4,
      review: "Excellent range! Traditional recipes that work. Hair feels nourished and healthier."
    },
    {
      id: 6,
      name: "Sneha Nair",
      location: "Kochi, Kerala",
      rating: 5,
      review: "Outstanding quality! Gentle yet effective products. Will definitely repurchase!"
    }
  ]

  // No duplication needed - CSS will handle the infinite scroll
  const displayTestimonials = testimonials

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
    setIsPaused(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current.offsetLeft || 0)
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setTimeout(() => setIsPaused(false), 1000) // Resume after 1 second
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setTimeout(() => setIsPaused(false), 1000)
  }

  const handleCardHover = () => {
    setIsPaused(true)
  }

  const handleCardLeave = () => {
    setIsPaused(false)
  }

  // Infinite marquee scroll effect (JS-based, pixel-perfect pause)
  useEffect(() => {
    let frame: number;
    const speed = 0.5; // px per frame
    function animate() {
      const c = containerRef.current;
      if (c && !isPaused && !isDragging) {
        c.scrollLeft += speed;
        if (c.scrollLeft >= c.scrollWidth / 2) {
          c.scrollLeft = c.scrollLeft - c.scrollWidth / 2;
        }
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused, isDragging]);

  // Seamless loop on manual scroll/drag
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleScroll() {
      const c = containerRef.current;
      if (!c) return;
      if (c.scrollLeft >= c.scrollWidth / 2) {
        c.scrollLeft = c.scrollLeft - c.scrollWidth / 2;
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-green-50/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-start justify-center mb-6">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 mt-2 md:mt-3 mr-4 flex-shrink-0"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#15442F] leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
              What our users have to say
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Hear from our satisfied customers who have transformed their hair care routine with our natural products.
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsPaused(true)}
            onMouseOut={() => setIsPaused(false)}
          >
            <div 
              ref={marqueeRef}
              className="flex"
            >
              {/* First set of testimonials */}
              {displayTestimonials.map((testimonial: Testimonial, index: number) => (
                <div key={`first-${testimonial.id}-${index}`} className="flex-shrink-0">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    onHover={handleCardHover}
                    onLeave={handleCardLeave}
                  />
                </div>
              ))}
              
              {/* Second set for seamless loop */}
              {displayTestimonials.map((testimonial: Testimonial, index: number) => (
                <div key={`second-${testimonial.id}-${index}`} className="flex-shrink-0">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    onHover={handleCardHover}
                    onLeave={handleCardLeave}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="text-center mt-8">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm transition-all duration-300 ${
            isPaused 
              ? 'text-orange-600 bg-orange-50 border border-orange-200' 
              : 'text-green-600 bg-green-50 border border-green-200'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${isPaused ? 'bg-orange-500' : 'bg-green-500 animate-pulse'}`}></div>
            <span style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {isPaused ? 'Paused • Hover to pause, drag to scroll' : 'Auto-scrolling • Hover to pause, drag to scroll'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
