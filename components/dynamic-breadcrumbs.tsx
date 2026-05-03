"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { allProducts, categories } from "@/lib/data"

interface BreadcrumbItem {
  label: string
  href: string
}

export default function DynamicBreadcrumbs() {
  const pathname = usePathname()

  // Generate breadcrumb items based on pathname
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split("/").filter((s) => s)
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

    let currentPath = ""

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1

      // Handle product pages
      if (segment === "product" && segments[index + 1]) {
        const productId = segments[index + 1]
        const product = allProducts.find((p) => p.id === productId)
        if (product) {
          breadcrumbs.push({
            label: "Shop",
            href: "/shop",
          })
          if (isLast || index === segments.length - 2) {
            breadcrumbs.push({
              label: product.name,
              href: `/product/${productId}`,
            })
          }
        }
        return
      }

      // Handle category pages
      if (segment === "categories") {
        if (segments[index + 1]) {
          const categorySlug = segments[index + 1]
          const category = categories.find((c) => c.id === categorySlug)
          if (category) {
            breadcrumbs.push({
              label: "Categories",
              href: "/categories",
            })
            if (isLast || index === segments.length - 2) {
              breadcrumbs.push({
                label: category.name,
                href: `/categories/${categorySlug}`,
              })
            }
          }
        } else {
          breadcrumbs.push({
            label: "Categories",
            href: "/categories",
          })
        }
        return
      }

      // Default route labeling
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      breadcrumbs.push({
        label,
        href: currentPath,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav className="flex items-center text-sm mb-8" aria-label="breadcrumb">
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1

        return (
          <div key={item.href} className="flex items-center">
            {isLast ? (
              <span className="text-foreground font-medium truncate">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            )}
            {!isLast && <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground flex-shrink-0" />}
          </div>
        )
      })}
    </nav>
  )
}
