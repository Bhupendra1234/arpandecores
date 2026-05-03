"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface AddToCartButtonProps {
  product: Product
  quantity?: number
  customization?: string
}

export default function AddToCartButton({ product, quantity = 1, customization }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      customization,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })

    setIsLoading(false)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isLoading} className="btn-primary flex-1 sm:flex-none">
      <ShoppingBag className="h-4 w-4 mr-2" />
      {isLoading ? "Adding..." : "Add to Cart"}
    </Button>
  )
}
