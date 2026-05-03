"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  isVerified: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  signup: (userData: SignupData) => Promise<{ success: boolean; message: string; requiresOTP?: boolean }>
  logout: () => void
  verifyOTP: (phone: string, otp: string) => Promise<{ success: boolean; message: string }>
  forgotPassword: (email: string) => Promise<{ success: boolean; message: string }>
  resetPassword: (token: string, password: string) => Promise<{ success: boolean; message: string }>
  resendOTP: (phone: string) => Promise<{ success: boolean; message: string }>
}

interface SignupData {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      localStorage.removeItem("user")
    }
  }, [user])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock validation
    if (email === "user@example.com" && password === "password123") {
      const mockUser: User = {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: email,
        phone: "+91 98765 43210",
        isVerified: true,
      }
      setUser(mockUser)
      setIsLoading(false)
      return { success: true, message: "Login successful!" }
    }

    setIsLoading(false)
    return { success: false, message: "Invalid email or password" }
  }

  const signup = async (userData: SignupData) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock validation - check if email already exists
    if (userData.email === "existing@example.com") {
      setIsLoading(false)
      return { success: false, message: "Email already exists" }
    }

    // Store pending user data for OTP verification
    localStorage.setItem("pendingUser", JSON.stringify(userData))

    setIsLoading(false)
    return { success: true, message: "OTP sent to your phone number", requiresOTP: true }
  }

  const verifyOTP = async (phone: string, otp: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock OTP validation
    if (otp === "123456") {
      const pendingUserData = localStorage.getItem("pendingUser")
      if (pendingUserData) {
        const userData = JSON.parse(pendingUserData)
        const newUser: User = {
          id: Date.now().toString(),
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          phone: userData.phone,
          isVerified: true,
        }
        setUser(newUser)
        localStorage.removeItem("pendingUser")
        setIsLoading(false)
        return { success: true, message: "Account verified successfully!" }
      }
    }

    setIsLoading(false)
    return { success: false, message: "Invalid OTP. Please try again." }
  }

  const forgotPassword = async (email: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    return { success: true, message: "OTP sent to your registered phone number" }
  }

  const resetPassword = async (token: string, password: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    return { success: true, message: "Password reset successfully!" }
  }

  const resendOTP = async (phone: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    return { success: true, message: "OTP resent successfully" }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem("pendingUser")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        verifyOTP,
        forgotPassword,
        resetPassword,
        resendOTP,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
