"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Gallery images
const galleryImages = [
  {
    id: "1",
    src: "/images/products/name-plate.png",
    alt: "Personalized Name Plate",
    category: "Home Decor",
  },
  {
    id: "2",
    src: "/images/products/wedding-hamper.png",
    alt: "Wedding Gift Hamper",
    category: "Wedding Gifts",
  },
  {
    id: "3",
    src: "/images/products/photo-frame.png",
    alt: "Handcrafted Photo Frame",
    category: "Photo Frames",
  },
  {
    id: "4",
    src: "/images/products/festive-decor.png",
    alt: "Festive Decor Set",
    category: "Festive Decor",
  },
  {
    id: "5",
    src: "/images/products/wall-art.png",
    alt: "Custom Wall Art",
    category: "Wall Art",
  },
  {
    id: "6",
    src: "/images/products/gift-box.png",
    alt: "Anniversary Gift Box",
    category: "Gift Boxes",
  },
  {
    id: "7",
    src: "/images/products/centerpiece.png",
    alt: "Decorative Table Centerpiece",
    category: "Table Decor",
  },
  {
    id: "8",
    src: "/images/products/cushion-set.png",
    alt: "Personalized Cushion Set",
    category: "Home Textiles",
  },
  {
    id: "9",
    src: "/images/products/jewelry-box.png",
    alt: "Handcrafted Jewelry Box",
    category: "Storage",
  },
  {
    id: "10",
    src: "/images/products/neon-sign.png",
    alt: "Custom Name Neon Sign",
    category: "Lighting",
  },
  {
    id: "11",
    src: "/images/products/welcome-board.png",
    alt: "Wedding Welcome Board",
    category: "Wedding Decor",
  },
  {
    id: "12",
    src: "/images/products/calendar.png",
    alt: "Personalized Calendar",
    category: "Stationery",
  },
]

// Gallery categories
const categories = ["All", "Home Decor", "Wedding Gifts", "Festive Decor", "Photo Frames", "Gift Boxes", "Table Decor"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageId: string) => {
    setSelectedImage(imageId)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const currentImage = galleryImages.find((img) => img.id === selectedImage)

  return (
    <div className="container-custom py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="text-foreground font-medium">Gallery</span>
      </nav>

      <div className="text-center mb-12">
        <h1 className="heading-lg mb-4">Our Gallery</h1>
        <p className="body-md text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of handcrafted gifts and decor items that have brought joy to our customers
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn("rounded-full", selectedCategory === category ? "bg-primary text-primary-foreground" : "")}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(image.id)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h3 className="font-playfair font-semibold text-lg">{image.alt}</h3>
                <p className="text-sm text-white/80">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && currentImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full h-full max-h-[80vh] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white rounded-full bg-black/50 hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <h3 className="font-playfair font-semibold text-xl">{currentImage.alt}</h3>
              <p className="text-sm text-white/80">{currentImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
