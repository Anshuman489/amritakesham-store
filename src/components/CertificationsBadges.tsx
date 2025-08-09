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
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="flex flex-col items-center text-center group"
            >
              {/* Badge Image */}
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 group-hover:scale-120 transition-transform duration-300">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 416px, 512px"
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
