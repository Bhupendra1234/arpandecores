import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Award, Users, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="container-custom">
        <nav className="flex items-center text-sm mb-8">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          <span className="text-foreground font-medium">About Us</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-royal-cream to-background py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="heading-xl">
                Crafting <span className="text-primary">Memories</span> Since 2015
              </h1>
              <p className="body-lg text-muted-foreground">
                At Arpan Decores, we believe that every gift tells a story and every decoration creates a memory. Our
                journey began with a simple vision: to bring joy and elegance into people's lives through handcrafted,
                personalized creations.
              </p>
              <p className="body-md text-muted-foreground">
                What started as a small family business has grown into a trusted name in personalized gifts and home
                decor, but our commitment to quality craftsmanship and personal touch remains unchanged.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elegant-lg">
              <Image src="/images/about/about-hero.jpg" alt="Arpan Decores workshop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Values</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from the materials we choose to the way we serve our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Crafted with Love</h3>
              <p className="text-sm text-muted-foreground">
                Every piece is created with passion and attention to detail, ensuring it carries the love and care of
                our artisans.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                We use only the finest materials and traditional techniques to ensure each product meets our high
                standards.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Personalization</h3>
              <p className="text-sm text-muted-foreground">
                We believe in making each piece unique and meaningful through thoughtful customization options.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our priority. We're committed to providing exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-royal-cream/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Meet Our Artisans</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              The talented hands and creative minds behind every Arpan Decores creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-48 w-48 rounded-full overflow-hidden mx-auto mb-4 shadow-elegant">
                <Image
                  src="/images/artisans/artisan-1.jpg"
                  alt="Rajesh Kumar - Master Craftsman"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Rajesh Kumar</h3>
              <p className="text-primary font-medium mb-2">Master Craftsman</p>
              <p className="text-sm text-muted-foreground">
                With over 20 years of experience in woodworking and metal crafts, Rajesh brings traditional techniques
                to modern designs.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-48 w-48 rounded-full overflow-hidden mx-auto mb-4 shadow-elegant">
                <Image
                  src="/images/artisans/artisan-2.jpg"
                  alt="Priya Sharma - Design Lead"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Priya Sharma</h3>
              <p className="text-primary font-medium mb-2">Design Lead</p>
              <p className="text-sm text-muted-foreground">
                Priya's creative vision and attention to detail ensure that every piece is not just functional but also
                beautiful.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-48 w-48 rounded-full overflow-hidden mx-auto mb-4 shadow-elegant">
                <Image
                  src="/images/artisans/artisan-3.jpg"
                  alt="Amit Patel - Quality Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair font-semibold text-xl mb-2">Amit Patel</h3>
              <p className="text-primary font-medium mb-2">Quality Specialist</p>
              <p className="text-sm text-muted-foreground">
                Amit ensures that every product meets our stringent quality standards before it reaches your hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elegant-lg">
              <Image src="/images/workshop/workshop-interior.jpg" alt="Our workshop" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="heading-lg">Our Workshop</h2>
              <p className="body-md text-muted-foreground">
                Located in the heart of the city, our workshop is where magic happens. It's a space where traditional
                craftsmanship meets modern innovation, where raw materials are transformed into beautiful, meaningful
                pieces.
              </p>
              <p className="body-md text-muted-foreground">
                We invite you to visit our workshop and see the creation process firsthand. Watch our artisans at work,
                learn about our techniques, and even participate in creating your own custom piece.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Eco-friendly materials and processes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Traditional techniques preserved</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Modern tools for precision</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Quality control at every step</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-playfair font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Unique Designs</div>
            </div>
            <div>
              <div className="text-4xl font-playfair font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
