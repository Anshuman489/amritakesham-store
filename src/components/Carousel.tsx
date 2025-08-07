import { CardCarousel } from "@/components/ui/card-carousel"
export function Carousel() {
  const images = [
    { src: "/image1.png", alt: "Image 1" },
    { src: "/image2.png", alt: "Image 2" },
    { src: "/image3.png", alt: "Image 3" },
    { src: "/image4.png", alt: "Image 4" },
    { src: "/image5.png", alt: "Image 5" },
  ]

  return (
    <div className="pt-10">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}
