"use client"

export function Navigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // stop default jump
    const targetSection = document.getElementById("about-us-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-14 w-full">
          <div className="flex space-x-12 justify-center w-full">
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
              href="#about-us-section"
              onClick={scrollToSection}
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
