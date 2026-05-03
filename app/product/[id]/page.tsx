import { notFound } from "next/navigation"
import { Star, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductImageGallery from "@/components/product-image-gallery"
import RelatedProducts from "@/components/related-products"
import ReviewsList from "@/components/reviews-list"
import { allProducts } from "@/lib/data"
import DynamicBreadcrumbs from "@/components/dynamic-breadcrumbs"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Mock product images for gallery
  const productImages = [
    product.image,
    product.image.replace(".jpg", "-2.jpg"),
    product.image.replace(".jpg", "-3.jpg"),
    product.image.replace(".jpg", "-4.jpg"),
  ].filter((img) => img)

  return (
    <div className="container-custom py-8 md:py-12">
      <DynamicBreadcrumbs />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <ProductImageGallery images={productImages} />

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="heading-lg mb-2">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < 4 ? "h-5 w-5 fill-primary text-primary" : "h-5 w-5 fill-muted text-muted"}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">(24 reviews)</span>
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold">₹{product.price.toLocaleString()}</div>

          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              This exquisite {product.name.toLowerCase()} is handcrafted with premium materials and meticulous attention
              to detail. Perfect for adding a touch of elegance to your home or as a thoughtful gift for someone
              special.
            </p>
            <p>
              Each piece is carefully created by our skilled artisans, ensuring exceptional quality and a unique
              character that mass-produced items simply cannot match.
            </p>
          </div>

          {product.isCustomizable && (
            <div className="space-y-4 border-t border-b py-4">
              <h3 className="font-playfair font-semibold text-lg">Personalization</h3>
              <div className="space-y-2">
                <label htmlFor="customText" className="block text-sm font-medium">
                  Custom Text
                </label>
                <input
                  type="text"
                  id="customText"
                  placeholder="Enter name, date, or message"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-green-600">In Stock</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AddToCartButton product={product} />
              <Button variant="outline" className="btn-outline bg-transparent">
                Add to Wishlist
              </Button>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-sm">Free shipping on orders over ₹1999</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-sm">Handcrafted with premium materials</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-sm">30-day return policy</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-sm">Complimentary gift wrapping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose prose-sm max-w-none">
              <h3 className="font-playfair font-semibold text-lg mb-4">Product Description</h3>
              <p>
                Our {product.name} represents the perfect fusion of traditional craftsmanship and contemporary design.
                Each piece is meticulously handcrafted by skilled artisans who bring decades of experience to their
                work.
              </p>
              <p>
                The attention to detail is evident in every aspect of this product, from the carefully selected
                materials to the precise finishing touches. Whether you're looking to enhance your own living space or
                searching for the perfect gift, this piece is sure to make a lasting impression.
              </p>
              <h4 className="font-playfair font-semibold mt-6 mb-3">Key Features:</h4>
              <ul>
                <li>Premium quality materials</li>
                <li>Handcrafted by skilled artisans</li>
                <li>Unique design with attention to detail</li>
                <li>Durable construction for long-lasting beauty</li>
                <li>Perfect for gifting or personal use</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="space-y-4">
              <h3 className="font-playfair font-semibold text-lg mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Material:</span>
                    <span>Premium Wood & Metal</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Dimensions:</span>
                    <span>12" x 8" x 2"</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Weight:</span>
                    <span>500g</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Color:</span>
                    <span>Natural Wood Finish</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Care:</span>
                    <span>Dust with soft cloth</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Origin:</span>
                    <span>Handmade in India</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <ReviewsList productId={product.id} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} />
    </div>
  )
}
