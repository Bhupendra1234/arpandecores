"use client"

import { useState } from "react"
import LoginModal from "./login-modal"
import SignupModal from "./signup-modal"
import OTPModal from "./otp-modal"
import ForgotPasswordModal from "./forgot-password-modal"
import ResetPasswordModal from "./reset-password-modal"

type AuthStep = "login" | "signup" | "otp" | "forgot-password" | "reset-password"

interface AuthManagerProps {
  isOpen: boolean
  onClose: () => void
  initialStep?: AuthStep
}

export default function AuthManager({ isOpen, onClose, initialStep = "login" }: AuthManagerProps) {
  const [currentStep, setCurrentStep] = useState<AuthStep>(initialStep)
  const [otpPhone, setOtpPhone] = useState("")
  const [otpPurpose, setOtpPurpose] = useState<"signup" | "forgot-password">("signup")

  const handleClose = () => {
    onClose()
    // Reset to login step after a delay to avoid visual glitch
    setTimeout(() => setCurrentStep("login"), 300)
  }

  const handleSwitchToSignup = () => setCurrentStep("signup")
  const handleSwitchToLogin = () => setCurrentStep("login")
  const handleSwitchToForgotPassword = () => setCurrentStep("forgot-password")

  const handleSwitchToOTP = (phone: string, purpose: "signup" | "forgot-password" = "signup") => {
    setOtpPhone(phone)
    setOtpPurpose(purpose)
    setCurrentStep("otp")
  }

  const handleOTPSuccess = () => {
    if (otpPurpose === "forgot-password") {
      setCurrentStep("reset-password")
    } else {
      handleClose()
    }
  }

  const handleResetPasswordSuccess = () => {
    setCurrentStep("login")
  }

  return (
    <>
      <LoginModal
        isOpen={isOpen && currentStep === "login"}
        onClose={handleClose}
        onSwitchToSignup={handleSwitchToSignup}
        onSwitchToForgotPassword={handleSwitchToForgotPassword}
      />

      <SignupModal
        isOpen={isOpen && currentStep === "signup"}
        onClose={handleClose}
        onSwitchToLogin={handleSwitchToLogin}
        onSwitchToOTP={(phone) => handleSwitchToOTP(phone, "signup")}
      />

      <OTPModal
        isOpen={isOpen && currentStep === "otp"}
        onClose={handleClose}
        phone={otpPhone}
        purpose={otpPurpose}
        onSuccess={handleOTPSuccess}
      />

      <ForgotPasswordModal
        isOpen={isOpen && currentStep === "forgot-password"}
        onClose={handleClose}
        onSwitchToLogin={handleSwitchToLogin}
        onSwitchToOTP={(phone) => handleSwitchToOTP(phone, "forgot-password")}
      />

      <ResetPasswordModal
        isOpen={isOpen && currentStep === "reset-password"}
        onClose={handleClose}
        onSuccess={handleResetPasswordSuccess}
      />
    </>
  )
}
