import { Instagram, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const socialPosts = [
  {
    id: 1,
    image: "/images/products/name-plate.png",
    likes: 1240,
    comments: 89,
    caption: "Custom name plate for my new apartment! 🏠✨",
    user: "@sarah_designs",
  },
  {
    id: 2,
    image: "/images/products/wedding-hamper.png",
    likes: 2156,
    comments: 156,
    caption: "Perfect wedding gift hamper! The couple loved it 💕",
    user: "@wedding_planner_pro",
  },
  {
    id: 3,
    image: "/images/products/festive-decor.png",
    likes: 987,
    comments: 67,
    caption: "Festival vibes with this amazing decor set! 🎉",
    user: "@festive_home",
  },
  {
    id: 4,
    image: "/images/products/photo-frame.png",
    likes: 1543,
    comments: 98,
    caption: "Memories preserved in style! Love this frame 📸",
    user: "@memory_keeper",
  },
]

export default function SocialHighlights() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-8 w-8 text-secondary mr-3" />
            <h2 className="heading-lg">
              <span className="gradient-text">#ArpanDecores</span> Community
            </h2>
          </div>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            See how our community is styling their spaces and celebrating with our creations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {socialPosts.map((post) => (
            <div key={post.id} className="relative group cursor-pointer card-hover">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt="Social post"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1 fill-red-500 text-red-500" />
                      <span className="text-sm font-bold">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm font-bold">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-xs mb-1">{post.caption}</p>
                  <p className="text-xs text-accent font-bold">{post.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-secondary">
            <Instagram className="h-5 w-5 mr-2" />
            Follow @ArpanDecores
          </Button>
        </div>
      </div>
    </section>
  )
}
