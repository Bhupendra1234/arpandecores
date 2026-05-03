"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Wedding Planner",
    content:
      "The personalized wedding gifts from Arpan Decores added such a special touch to our client's big day. The attention to detail and quality of craftsmanship is unmatched.",
    avatar: "/images/avatars/avatar-1.png",
    rating: 5,
  },
  {
    id: "2",
    name: "Rahul Mehta",
    role: "Happy Customer",
    content:
      "I ordered a custom name plate for my new home and was blown away by the quality. The elegant design perfectly matches our decor and has become a conversation starter!",
    avatar: "/images/avatars/avatar-2.png",
    rating: 5,
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Interior Designer",
    content:
      "As an interior designer, I'm very particular about the decor pieces I recommend. Arpan Decores consistently delivers products that exceed my expectations and delight my clients.",
    avatar: "/images/avatars/avatar-3.png",
    rating: 4,
  },
  {
    id: "4",
    name: "Vikram Singh",
    role: "Corporate Client",
    content:
      "We ordered custom corporate gifts for our top clients, and the response was phenomenal. The personalized touch made our company stand out and strengthened our client relationships.",
    avatar: "/images/avatars/avatar-4.png",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const goToPrev = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-12">
              <div className="bg-card rounded-md p-6 md:p-8 shadow-soft border border-primary/10 flex flex-col items-center text-center">
                <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted",
                      )}
                    />
                  ))}
                </div>

                <blockquote className="mb-6 text-lg italic font-heading">"{testimonial.content}"</blockquote>

                <div>
                  <div className="font-heading font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-primary/20 hover:border-primary"
        onClick={goToPrev}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-primary/20 hover:border-primary"
        onClick={goToNext}
        disabled={isAnimating}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next testimonial</span>
      </Button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30",
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
