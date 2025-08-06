"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full 
                        h-[450px]        /* base height */
                        sm:h-[500px]     /* small screens and up */
                        md:h-[550px]     /* medium screens and up */
                        lg:h-[630px]     /* large screens and up */
                        overflow-hidden">
      {/* full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="/hero2.jpg"      /* your image in public/hero-products.jpg */
          alt="Product on hair background"
          fill
          className="object-cover object-[center_15%]"  /* pushes the focal point down */
        />
      </div>

      {/* 2) Overlay content */}
      <div className="relative z-10 container mx-auto h-full px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 h-full items-center logo-text">
          {/* Left column */}
          <div className="col-span-2 flex flex-col justify-end">
            <h1 className="font-normal text-3xl sm:text-4xl lg:text-7xl text-white">
              The essence
            </h1>
            <br></br>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-white max-w-md">
              Glow & Shine natural hair care products are made with natural, plant-based ingredients.
            </p>
          </div>

          {/* Spacer column (so your bottle stays in the middle) */}
          <div className="col-span-1" />

          {/* Right column */}
          <div className="col-span-2 flex flex-col justify-end items-start lg:items-end">
            <h1 className="font-normal text-3xl sm:text-4xl lg:text-7xl text-white text-center lg:text-right">
              of healthy hair
            </h1>
            <br></br> 
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-white max-w-md text-center lg:text-right">
              does not contain harsh chemicals or synthetic additives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
