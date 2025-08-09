"use client"

import Image from "next/image"

export function CertificationsBadges() {
  const certifications = [
    {
      id: 1,
      image: "/Container.png",
      alt: "Science-Based"
    },
    {
      id: 2,
      image: "/Container-1.png", 
      alt: "Clinically Tested"
    },
    {
      id: 3,
      image: "/Container-2.png",
      alt: "Dermatologically Tested"
    },
    {
      id: 4,
      image: "/Container-3.png",
      alt: "Non-Toxic"
    },
    {
      id: 5,
      image: "/Container-4.png",
      alt: "Cruelty Free and Vegan"
    }
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="flex flex-col items-center text-center group"
            >
              {/* Badge Image */}
              <div className="relative w-56 h-56 xs:w-56 xs:h-56 sm:w-56 sm:h-56 md:w-66 md:h-66 lg:w-66 lg:h-66 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 480px) 160px, (max-width: 640px) 176px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 224px"
                  quality={100}
                  priority={true}
                  unoptimized={true}
                  
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
