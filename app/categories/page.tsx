import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight } from "lucide-react"
import { categories } from "@/lib/data"

export default function CategoriesPage() {
  return (
    <div className="container-custom py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="text-foreground font-medium">Categories</span>
      </nav>

      <div className="text-center mb-12">
        <h1 className="heading-lg mb-4">Shop by Category</h1>
        <p className="body-md text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collections designed for every special occasion and space
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group relative overflow-hidden rounded-2xl shadow-elegant card-hover"
          >
            <div className="aspect-[4/5] relative">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-playfair font-bold text-2xl mb-2">{category.name}</h3>
                <p className="text-white/80 mb-4 max-w-xs">{category.description}</p>
                <div className="flex items-center font-medium">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
