"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Loader2, Phone, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "./auth-provider"

interface OTPModalProps {
  isOpen: boolean
  onClose: () => void
  phone: string
  purpose: "signup" | "forgot-password"
  onSuccess?: () => void
}

export default function OTPModal({ isOpen, onClose, phone, purpose, onSuccess }: OTPModalProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const { verifyOTP, resendOTP } = useAuth()
  const { toast } = useToast()

  // Timer for resend OTP
  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setCanResend(true)
    }
  }, [isOpen, timeLeft])

  // Reset timer when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeLeft(60)
      setCanResend(false)
      setOtp(["", "", "", "", "", ""])
    }
  }, [isOpen])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpString = otp.join("")

    if (otpString.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter all 6 digits",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await verifyOTP(phone, otpString)

      if (result.success) {
        toast({
          title: "Verification successful!",
          description: result.message,
        })
        onClose()
        onSuccess?.()
      } else {
        toast({
          title: "Verification failed",
          description: result.message,
          variant: "destructive",
        })
        setOtp(["", "", "", "", "", ""])
        inputRefs.current[0]?.focus()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResendOTP = async () => {
    try {
      const result = await resendOTP(phone)

      if (result.success) {
        toast({
          title: "OTP resent",
          description: result.message,
        })
        setTimeLeft(60)
        setCanResend(false)
        setOtp(["", "", "", "", "", ""])
        inputRefs.current[0]?.focus()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to resend OTP. Please try again.",
        variant: "destructive",
      })
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center">Verify Phone Number</DialogTitle>
          <DialogDescription className="text-center">
            We've sent a 6-digit code to
            <br />
            <span className="font-medium text-foreground">{phone}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="h-8 w-8 text-primary" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-bold"
                autoFocus={index === 0}
              />
            ))}
          </div>

          <Button
            type="submit"
            className="w-full bg-brass-gradient text-white shadow-brass hover:shadow-brass-lg"
            disabled={isSubmitting || otp.join("").length !== 6}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </Button>
        </form>

        <div className="text-center space-y-2">
          {!canResend ? (
            <p className="text-sm text-muted-foreground">Resend code in {formatTime(timeLeft)}</p>
          ) : (
            <Button variant="link" className="text-primary hover:text-primary/80" onClick={handleResendOTP}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Resend OTP
            </Button>
          )}
        </div>

        <div className="text-center text-xs text-muted-foreground">
          <p>Demo OTP: 123456</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
