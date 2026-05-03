"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)
  const { toast } = useToast()

  const handleApplyCoupon = () => {
    if (!couponCode) return

    setIsApplyingCoupon(true)

    // Simulate API call
    setTimeout(() => {
      setIsApplyingCoupon(false)
      setCouponCode("")

      toast({
        title: "Invalid coupon code",
        description: "The coupon code you entered is invalid or has expired.",
        variant: "destructive",
      })
    }, 1000)
  }

  // Calculate shipping cost (free over ₹1999)
  const shippingCost = subtotal >= 1999 ? 0 : 149
  const totalCost = subtotal + shippingCost

  return (
    <div className="container-custom py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8">
        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="text-foreground font-medium">Shopping Cart</span>
      </nav>

      <h1 className="heading-lg mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="heading-md mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link href="/shop">
            <Button size="lg" className="btn-primary">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-card rounded-lg shadow-elegant">
                <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-playfair font-medium text-lg truncate hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <span className="font-semibold">₹{item.price.toLocaleString()}</span>
                  </div>

                  {item.customization && (
                    <p className="text-sm text-muted-foreground mt-1">Customization: {item.customization}</p>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded-full">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Link href="/shop">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-card rounded-lg shadow-elegant p-6">
            <h2 className="font-playfair font-semibold text-xl mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shippingCost === 0 ? "Free" : `₹${shippingCost}`}</span>
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{totalCost.toLocaleString()}</span>
              </div>
            </div>

            {/* Coupon code */}
            <div className="space-y-2 mb-6">
              <label htmlFor="coupon" className="text-sm font-medium">
                Coupon Code
              </label>
              <div className="flex gap-2">
                <Input
                  id="coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1"
                />
                <Button onClick={handleApplyCoupon} disabled={!couponCode || isApplyingCoupon}>
                  {isApplyingCoupon ? "Applying..." : "Apply"}
                </Button>
              </div>
            </div>

            <Link href="/checkout">
              <Button className="w-full btn-primary">Proceed to Checkout</Button>
            </Link>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>Secure checkout powered by trusted payment gateways</p>
              <div className="flex justify-center gap-2 mt-2">{/* Payment icons would go here */}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
