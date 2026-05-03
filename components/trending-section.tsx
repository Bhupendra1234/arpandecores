import Link from "next/link"
import { TrendingUp, FlameIcon as Fire, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const trendingItems = [
  {
    id: 1,
    title: "Neon Name Signs",
    description: "Custom LED signs that glow",
    trend: "+250%",
    category: "Lighting",
    image: "/images/products/neon-sign.png",
  },
  {
    id: 2,
    title: "Holographic Frames",
    description: "Photos that shimmer and shine",
    trend: "+180%",
    category: "Photo Frames",
    image: "/images/products/photo-frame.png",
  },
  {
    id: 3,
    title: "Galaxy Cushions",
    description: "Space-themed comfort",
    trend: "+120%",
    category: "Home Textiles",
    image: "/images/products/cushion-set.png",
  },
]

export default function TrendingSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black">Trending Now</h2>
              <p className="text-muted-foreground">What's hot in the community</p>
            </div>
          </div>
          <Link href="/trending">
            <Button variant="outline" className="hidden md:flex">
              View All Trends
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingItems.map((item, index) => (
            <div key={item.id} className="relative bg-card rounded-2xl p-6 card-hover group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  <Fire className="h-3 w-3 mr-1" />
                  {item.trend}
                </Badge>
                <div className="text-xs text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  24h
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-secondary">{item.category}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
