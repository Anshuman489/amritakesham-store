"use client"

export function Navigation() {
  // Single smooth scroll function
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-14 w-full">
          <div className="flex space-x-12 justify-center w-full">
            <a 
              href="#product-details-section"
              onClick={scrollToSection("product-details")}
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
              onClick={scrollToSection("about-us-section")}
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
