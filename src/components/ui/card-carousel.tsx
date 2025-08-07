"use client"

import React, { useRef } from "react"
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
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
  
  @media (min-width: 640px) {
    .swiper-slide {
      width: 400px;
      height: 400px;
    }
  }
  
  @media (min-width: 1024px) {
    .swiper-slide {
      width: 500px;
      height: 500px;
    }
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <style>{css}</style>
      <div className="w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] border border-black/10 p-3 sm:p-4 lg:p-6 shadow-lg bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
        <div className="relative flex w-full flex-col rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] border border-black/5 bg-gradient-to-br from-neutral-50/80 to-neutral-100/50 p-3 sm:p-4 lg:p-6 shadow-inner">
          <div className="flex flex-col items-center justify-center pb-4 sm:pb-6 pt-8 sm:pt-12 lg:pt-14 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <CursorProximityText
                as="h3"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-90 tracking-normal leading-tight"
                style={{ fontFamily: 'var(--font-pt-serif), serif' }}
                containerRef={containerRef as React.RefObject<HTMLDivElement>}
                radius={120}
              >
                A blend of earthy ingredients
              </CursorProximityText>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4 px-2 sm:px-4">
            <div className="w-full max-w-7xl">
              <Swiper
                spaceBetween={20}
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
                  depth: 100,
                  modifier: window.innerWidth < 640 ? 1.5 : 2.0,
                }}
                pagination={showPagination ? { clickable: true, dynamicBullets: false } : false}
                navigation={
                  showNavigation && window.innerWidth >= 768
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
                    <div className="size-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
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
