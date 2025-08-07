"use client"

import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"
import CursorProximityText from "@/components/CursorProximityText"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)
      const handleResize = () => setScreenWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    height: 280px;
  }
  
  @media (min-width: 480px) {
    .swiper-slide {
      width: 320px;
      height: 320px;
    }
    .swiper {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  
  @media (min-width: 640px) {
    .swiper-slide {
      width: 380px;
      height: 380px;
    }
    .swiper {
      padding-left: 50px;
      padding-right: 50px;
      padding-bottom: 40px;
    }
  }
  
  @media (min-width: 1024px) {
    .swiper-slide {
      width: 411px;
      height: 411px;
    }
    .swiper {
      padding-left: 60px;
      padding-right: 60px;
    }
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  /* Pagination styling */
  .swiper-pagination {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    bottom: 10px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
  }
  
  .swiper-pagination-bullet {
    background: #15442F !important;
    opacity: 0.3 !important;
    width: 8px !important;
    height: 8px !important;
    margin: 0 4px !important;
    border-radius: 50% !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 2px 4px rgba(21, 68, 47, 0.2) !important;
  }
  
  .swiper-pagination-bullet-active {
    background: #15442F !important;
    opacity: 1 !important;
    width: 12px !important;
    height: 12px !important;
    box-shadow: 0 4px 8px rgba(21, 68, 47, 0.4), 0 0 0 2px rgba(21, 68, 47, 0.1) !important;
    transform: scale(1.1) !important;
  }
  
  .swiper-pagination-bullet:hover {
    opacity: 0.7 !important;
    transform: scale(1.05) !important;
    box-shadow: 0 3px 6px rgba(21, 68, 47, 0.3) !important;
  }
  `
  
  if (!isMounted) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <style>{css}</style>
        <div className="w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-stone-200/60 p-2 sm:p-3 lg:p-4 shadow-lg bg-gradient-to-br from-stone-50/90 to-neutral-100/80 backdrop-blur-sm">
          <div className="relative flex w-full flex-col rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] border border-stone-100/80 bg-gradient-to-br from-stone-25/60 to-neutral-50/70 p-2 sm:p-3 lg:p-4 shadow-inner">
            <div className="flex flex-col items-center justify-center pb-4 sm:pb-6 pt-8 sm:pt-12 lg:pt-14 w-full">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-90 tracking-normal leading-tight" style={{ fontFamily: 'var(--font-pt-serif), serif' }}>
                  A blend of earthy ingredients
                </h3>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2 sm:gap-4 px-1 sm:px-2 lg:px-4">
              <div className="w-full max-w-sm sm:max-w-4xl lg:max-w-6xl h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center">
                <div className="animate-pulse bg-gray-200 rounded-lg sm:rounded-2xl w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <style>{css}</style>
      <div className="w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-stone-200/60 p-3 sm:p-4 lg:p-6 shadow-lg bg-gradient-to-br from-stone-50/90 to-neutral-100/80 backdrop-blur-sm">
        <div className="relative flex w-full flex-col rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] border border-stone-100/80 bg-gradient-to-br from-stone-25/60 to-neutral-50/70 p-3 sm:p-4 lg:p-6 shadow-inner">
          <div className="flex flex-col items-center justify-center pb-2 sm:pb-3 pt-4 sm:pt-6 lg:pt-8 w-full">
            <div className="text-center max-w-4xl mx-auto px-2">
              <CursorProximityText
                as="h3"
                className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl pb-6 sm:pb-8 lg:pb-10 opacity-90 tracking-normal leading-tight"
                style={{ fontFamily: 'var(--font-pt-serif), serif' }}
                containerRef={containerRef as React.RefObject<HTMLDivElement>}
                radius={120}
              >
                A blend of earthy ingredients
              </CursorProximityText>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-2 sm:gap-4 px-1 sm:px-2 lg:px-4">
            <div className="w-full max-w-sm sm:max-w-4xl lg:max-w-6xl">
              <Swiper
                spaceBetween={15}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: screenWidth < 480 ? 60 : screenWidth < 640 ? 70 : 80,
                  modifier: screenWidth < 480 ? 1.0 : screenWidth < 640 ? 1.1 : 1.4,
                }}
                pagination={showPagination ? { clickable: true, dynamicBullets: false } : false}
                navigation={
                  showNavigation && screenWidth >= 768
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-sm sm:shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src={image.src}
                        width={421}
                        height={421}
                        className="size-full object-cover hover:scale-105 transition-transform duration-500"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
