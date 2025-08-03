"use client"

export function Navigation() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-14">
          <div className="flex space-x-12">
            <a 
              href="#" 
              className="text-gray-700 hover:text-green-600 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
            >
              SHOP
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-green-600 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
            >
              PRODUCTS
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-green-600 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
            >
              ABOUT US
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
