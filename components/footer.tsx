import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-secondary/5 border-t border-primary/10">
      <div className="container-custom py-12 md:py-16">
        {/* Newsletter section */}
        <div className="bg-card rounded-md p-6 md:p-8 mb-12 shadow-soft border border-primary/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:max-w-md">
              <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2">Join Our Artisan Community</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe for exclusive offers, artisan stories, and early access to new collections.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 md:max-w-md w-full">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-md flex-1 border-primary/20"
                required
              />
              <Button type="submit" className="bg-brass-gradient text-white shadow-brass hover:shadow-brass-lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <span className="text-2xl font-heading font-bold text-primary tracking-wide">ARPAN</span>
                <span className="text-2xl font-heading font-light text-secondary tracking-wide ml-1">DECORES</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Exquisite handcrafted gifts and home decor created with premium materials and artisan craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-md hover:bg-primary/10">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-md hover:bg-primary/10">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-md hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/festive"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Festive Treasures
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/wedding"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Wedding Elegance
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/custom"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Bespoke Creations
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/care-guide"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Care Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Visit Our Atelier</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Artisan Quarter, Craft Street
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">hello@arpandecores.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Arpan Decores. Crafted with care.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
