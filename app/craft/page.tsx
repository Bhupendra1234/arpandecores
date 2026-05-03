import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Award, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { productImages } from "@/lib/product-images"

const craftingTechniques = [
  {
    id: "wood",
    name: "Wood Carving",
    description: "Traditional hand carving techniques that bring out the natural beauty of premium hardwoods.",
    image: "/placeholder.svg?height=400&width=600&text=Wood+Carving",
    years: "25+ years of expertise",
  },
  {
    id: "metal",
    name: "Metal Engraving",
    description: "Precision engraving on brass, copper, and other metals for lasting personalization.",
    image: "/placeholder.svg?height=400&width=600&text=Metal+Engraving",
    years: "20+ years of expertise",
  },
  {
    id: "textile",
    name: "Textile Artistry",
    description: "Hand embroidery and fabric work using traditional techniques passed down through generations.",
    image: "/placeholder.svg?height=400&width=600&text=Textile+Artistry",
    years: "30+ years of expertise",
  },
  {
    id: "glass",
    name: "Glass Etching",
    description: "Delicate etching and sandblasting to create intricate designs on premium glassware.",
    image: "/placeholder.svg?height=400&width=600&text=Glass+Etching",
    years: "15+ years of expertise",
  },
]

const artisans = [
  {
    id: "1",
    name: "Rajesh Kumar",
    specialty: "Master Woodworker",
    experience: "25 years",
    image: "/placeholder.svg?height=300&width=300&text=Rajesh",
    bio: "Rajesh brings traditional woodworking techniques to create heirloom-quality pieces that stand the test of time.",
  },
  {
    id: "2",
    name: "Priya Sharma",
    specialty: "Metal Artisan",
    experience: "18 years",
    image: "/placeholder.svg?height=300&width=300&text=Priya",
    bio: "Priya's metal engravings combine precision with artistic flair, creating personalized pieces with intricate detail.",
  },
  {
    id: "3",
    name: "Vikram Singh",
    specialty: "Design Lead",
    experience: "20 years",
    image: "/placeholder.svg?height=300&width=300&text=Vikram",
    bio: "Vikram oversees our design process, ensuring each piece balances traditional craftsmanship with contemporary aesthetics.",
  },
]

export default function CraftPage() {
  return (
    <div className="py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="container-custom">
        <nav className="flex items-center text-sm mb-8">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          <span className="text-foreground font-medium">Our Craft</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative bg-secondary/10 py-16 md:py-24 wood-texture">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="heading-xl">
                The Art of <span className="text-primary">Craftsmanship</span>
              </h1>
              <p className="body-lg text-muted-foreground">
                At Arpan Decores, we preserve traditional crafting techniques while embracing innovation. Each piece
                tells a story of skill, patience, and dedication passed down through generations.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium">Award-winning artisans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">30+ years of expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-medium">Handcrafted excellence</span>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-md overflow-hidden shadow-soft-lg">
              <Image
                src={productImages.craftMaking || "/placeholder.svg"}
                alt="Artisan craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craft Process Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Craft Process</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Every piece we create follows a meticulous journey from concept to completion
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 z-10 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg mb-4 md:mb-0 mx-auto">
                  1
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right space-y-4 md:pr-12">
                    <h3 className="font-heading font-semibold text-2xl">Material Selection</h3>
                    <p className="text-muted-foreground">
                      We begin by carefully selecting premium materials from sustainable sources. Each wood, metal, and
                      fabric is chosen for its quality, character, and suitability for the intended piece.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-md overflow-hidden shadow-soft">
                    <Image
                      src={productImages.craftMaterials || "/placeholder.svg"}
                      alt="Material Selection"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 z-10 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg mb-4 md:mb-0 mx-auto">
                  2
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 space-y-4 md:pl-12">
                    <h3 className="font-heading font-semibold text-2xl">Artisan Design</h3>
                    <p className="text-muted-foreground">
                      Our skilled artisans sketch and plan each piece, blending traditional techniques with contemporary
                      aesthetics. For custom orders, we work closely with clients to bring their vision to life.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-64 rounded-md overflow-hidden shadow-soft">
                    <Image
                      src={productImages.craftDesign || "/placeholder.svg"}
                      alt="Artisan Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 z-10 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg mb-4 md:mb-0 mx-auto">
                  3
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right space-y-4 md:pr-12">
                    <h3 className="font-heading font-semibold text-2xl">Meticulous Crafting</h3>
                    <p className="text-muted-foreground">
                      Every item is handcrafted with precision and care, with artisans dedicating hours to perfect each
                      detail. This stage is where the magic happens, as raw materials transform into beautiful
                      creations.
                    </p>
                  </div>
                  <div className="relative h-64 rounded-md overflow-hidden shadow-soft">
                    <Image
                      src={productImages.craftMaking || "/placeholder.svg"}
                      alt="Meticulous Crafting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 z-10 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg mb-4 md:mb-0 mx-auto">
                  4
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 space-y-4 md:pl-12">
                    <h3 className="font-heading font-semibold text-2xl">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Each piece undergoes rigorous quality checks to ensure it meets our exacting standards before
                      reaching you. We inspect every detail, ensuring perfection in both form and function.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-64 rounded-md overflow-hidden shadow-soft">
                    <Image
                      src={productImages.craftQuality || "/placeholder.svg"}
                      alt="Quality Assurance"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Techniques */}
      <section className="py-16 bg-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Crafting Techniques</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Traditional methods preserved and perfected over generations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {craftingTechniques.map((technique) => (
              <div
                key={technique.id}
                className="bg-card rounded-md overflow-hidden shadow-soft border border-primary/10"
              >
                <div className="relative h-64">
                  <Image
                    src={technique.image || "/placeholder.svg"}
                    alt={technique.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading font-semibold text-2xl text-white mb-1">{technique.name}</h3>
                    <div className="text-xs text-white/80 font-medium">{technique.years}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground">{technique.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Artisans */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Master Artisans</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              The skilled hands and creative minds behind every Arpan Decores creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <div key={artisan.id} className="bg-card rounded-md overflow-hidden shadow-soft border border-primary/10">
                <div className="relative h-64">
                  <Image src={artisan.image || "/placeholder.svg"} alt={artisan.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-xl mb-1">{artisan.name}</h3>
                  <div className="text-primary text-sm font-medium mb-3">
                    {artisan.specialty} • {artisan.experience}
                  </div>
                  <p className="text-sm text-muted-foreground">{artisan.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-brass-gradient text-white shadow-brass hover:shadow-brass-lg">
              Book an Artisan Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Workshop Tours */}
      <section className="py-16 bg-secondary/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="heading-lg">Visit Our Workshop</h2>
              <p className="body-md text-muted-foreground">
                Experience the craft process firsthand with a guided tour of our workshop. Watch our artisans at work,
                learn about our techniques, and discover the story behind our creations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Guided tours available Tuesday-Saturday</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Hands-on workshops for small groups</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Personalized consultation for custom orders</span>
                </li>
              </ul>
              <Button className="bg-brass-gradient text-white shadow-brass hover:shadow-brass-lg">
                Schedule a Visit
              </Button>
            </div>
            <div className="relative h-[400px] rounded-md overflow-hidden shadow-soft-lg">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Our+Workshop"
                alt="Our workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
