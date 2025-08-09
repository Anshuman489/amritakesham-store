"use client"

import Image from "next/image"

export function ProductCollage() {
  const products = [
    { id: 1, image: "/prod1.png" },
    { id: 2, image: "/prod2.png" },
    { id: 3, image: "/prod3.png" },
    { id: 4, image: "/prod4.png" },
    { id: 5, image: "/prod5.png" },
    { id: 6, image: "/prod6.png" }
  ]

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover opacity-100"
          quality={100}
          priority={false}
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#15442F] leading-tight mb-6" style={{ fontFamily: 'PT Serif, serif' }}>
            Natural Hair Care Collection
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Discover our range of premium hair care products, crafted with natural ingredients and traditional wisdom.
          </p>
        </div>

        {/* Perfect Rectangle Collage */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout - Two Row Grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 grid-rows-2 gap-3 lg:gap-4 aspect-[3/2] p-6 lg:p-8">
              {/* Row 1 */}
              <div className="relative z-10 group cursor-pointer rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={products[0].image}
                  alt="Hair Care Product"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
              </div>
              <div className="relative z-10 group cursor-pointer rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={products[1].image}
                  alt="Hair Care Product"
                  fill
                  className="object-fill transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
              </div>
              <div className="relative z-10 group cursor-pointer rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={products[2].image}
                  alt="Hair Care Product"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
              </div>

              {/* Row 2 */}
              <div className="relative z-10 group cursor-pointer rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={products[3].image}
                  alt="Hair Care Product"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
              </div>
              <div className="relative z-10 group cursor-pointer rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={products[4].image}
                  alt="Hair Care Product"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
              </div>
              <div className="relative z-10 group cursor-pointer rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={products[5].image}
                  alt="Hair Care Product"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="400px"
                />
              </div>
            </div>
          </div>

          {/* Tablet Layout - 3x2 Perfect Rectangle */}
          <div className="hidden sm:block md:hidden">
            <div className="grid grid-cols-3 grid-rows-2 gap-3 aspect-[3/2] p-5">
              {products.map((product, index) => (
                <div key={product.id} className="relative z-10 group cursor-pointer rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={product.image}
                    alt="Hair Care Product"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="250px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - 2x3 Perfect Rectangle */}
          <div className="sm:hidden">
            <div className="grid grid-cols-2 grid-rows-3 gap-2 aspect-[2/3] p-4">
              {products.map((product, index) => (
                <div key={product.id} className="relative z-10 group cursor-pointer rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src={product.image}
                    alt="Hair Care Product"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="180px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
