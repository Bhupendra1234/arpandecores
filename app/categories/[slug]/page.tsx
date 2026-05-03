import { notFound } from "next/navigation"
import Link from "next/link"
import ProductCard from "@/components/product-card"
import { allProducts, categories } from "@/lib/data"
import DynamicBreadcrumbs from "@/components/dynamic-breadcrumbs"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.id === params.slug)

  if (!category) {
    notFound()
  }

  // Filter products by category
  const categoryProducts = allProducts.filter((product) => {
    const productCategory = product.category.toLowerCase().replace(" ", "-")
    return (
      productCategory === params.slug ||
      (params.slug === "festive" && productCategory === "festive-decor") ||
      (params.slug === "wedding" && (productCategory === "wedding-gifts" || productCategory === "wedding-decor"))
    )
  })

  return (
    <div className="container-custom py-8 md:py-12">
      <DynamicBreadcrumbs />

      <div className="text-center mb-12">
        <h1 className="heading-lg mb-4">{category.name}</h1>
        <p className="body-md text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="heading-sm mb-4">No products found</h3>
          <p className="text-muted-foreground mb-6">We're working on adding products to this category.</p>
          <Link href="/shop">
            <button className="btn-primary">Browse All Products</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{categoryProducts.length}</span> products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
