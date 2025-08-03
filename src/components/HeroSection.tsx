"use client"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 min-h-[500px] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-green-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-green-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                NEW PRODUCT
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-green-800 leading-tight">
                Free Cleanser
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-green-600 leading-tight">
                Goodness
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg lg:text-xl max-w-md leading-relaxed">
              Discover our new natural cleanser that brings out your skin's natural radiance with pure, organic ingredients.
            </p>
            
            <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-medium uppercase tracking-wider transition-all duration-300 text-sm">
              SHOP NOW
            </button>
          </div>
          
          {/* Right side - Product showcase */}
          <div className="relative flex justify-center items-center">
            {/* Product cards/bottles illustration */}
            <div className="relative">
              {/* Main product bottle */}
              <div className="w-32 h-48 bg-gradient-to-b from-orange-200 to-orange-300 rounded-lg shadow-lg relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-orange-400 rounded"></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-xs font-bold text-orange-800">Logo</div>
                </div>
              </div>
              
              {/* Side product 1 */}
              <div className="absolute -left-8 top-12 w-24 h-32 bg-gradient-to-b from-green-200 to-green-300 rounded-lg shadow-md">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-green-400 rounded"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-xs font-bold text-green-800">DJ</div>
                </div>
              </div>
              
              {/* Side product 2 */}
              <div className="absolute -right-8 top-8 w-24 h-36 bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg shadow-md">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-blue-400 rounded"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-xs font-bold text-blue-800">DJ</div>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full"></div>
              <div className="absolute -top-8 left-8 w-6 h-6 bg-pink-300 rounded-full"></div>
              <div className="absolute top-4 -left-12 w-10 h-10 bg-green-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
