"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#15442F] leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
                More About AmrithaKesham
              </h2>
            </div>
            
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Amrithakesham is a heartfelt venture by <span className="font-semibold text-[#15442F]">Amrith Sreejith</span>, a 
                homemaker residing in Bengaluru for over 35 years. Known 
                for her luscious, long hair, Amrith often received inquiries 
                about her hair care secrets.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                During the COVID-19 lockdown, she experimented with various 
                natural ingredients to develop a hair oil recipe that not only 
                enhanced her hair health but also inspired her to share it with 
                others.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed font-medium text-[#15442F]">
                This small-scale business has grown significantly, with weekly 
                sales of over 5 liters to friends, family, and loyal customers.
              </p>
            </div>
          </div>

          {/* Founder Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative w-[420px] h-[500px] rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/founder.png"
                  alt="Amrith Sreejith - Founder of AmrithaKesham"
                  fill
                  className="object-cover object-center"
                  sizes="420px"
                  quality={100}
                  priority={true}
                  style={{
                    objectPosition: 'center 20%'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
