"use client"

import type React from "react"

import { useState } from "react"
import { Star, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

interface ReviewFormProps {
  productId: string
  onReviewSubmitted: () => void
}

export default function ReviewForm({ productId, onReviewSubmitted }: ReviewFormProps) {
  const [rating, setRating] = useState(5)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !title || !comment) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call - Replace with your actual API endpoint
      const reviewData = {
        productId,
        rating,
        name,
        email,
        title,
        comment,
        date: new Date().toISOString(),
      }

      console.log("[v0] Submitting review:", reviewData)

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      setRating(5)
      setName("")
      setEmail("")
      setTitle("")
      setComment("")

      toast({
        title: "Success",
        description: "Your review has been submitted successfully!",
      })

      onReviewSubmitted()
    } catch (error) {
      console.error("[v0] Error submitting review:", error)
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border">
      <div>
        <h3 className="font-semibold text-lg mb-4">Share Your Review</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Help other customers by sharing your experience with this product.
        </p>
      </div>

      {/* Rating Stars */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Rating</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-transform hover:scale-110"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= (hoveredRating || rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Your Name
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          disabled={isSubmitting}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
      </div>

      {/* Review Title */}
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium">
          Review Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Summarize your review in a few words"
          disabled={isSubmitting}
        />
      </div>

      {/* Review Comment */}
      <div className="space-y-2">
        <label htmlFor="comment" className="block text-sm font-medium">
          Your Review
        </label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this product..."
          className="min-h-[120px] resize-none"
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brass-gradient text-white shadow-brass hover:shadow-brass-lg"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Submit Review
          </>
        )}
      </Button>
    </form>
  )
}
