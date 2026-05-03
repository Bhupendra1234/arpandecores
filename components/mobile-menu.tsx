"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Heart, User, HelpCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import SearchBar from "@/components/search-bar"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: { name: string; href: string }[]
}

export default function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-primary text-left">Menu</SheetTitle>
        </SheetHeader>

        <div className="mt-6 mb-6">
          <SearchBar />
        </div>

        <div className="flex flex-col space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "py-2 text-lg font-medium transition-colors rounded-md px-3",
                pathname === item.href ? "text-primary bg-primary/10" : "text-foreground/80 hover:bg-muted",
              )}
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex flex-col space-y-3">
            <Link
              href="/help"
              className="flex items-center py-2 text-foreground/80 hover:text-primary"
              onClick={onClose}
            >
              <HelpCircle className="h-5 w-5 mr-3" />
              Help Center
            </Link>
            <Link
              href="/track-order"
              className="flex items-center py-2 text-foreground/80 hover:text-primary"
              onClick={onClose}
            >
              <ShoppingBag className="h-5 w-5 mr-3" />
              Track Order
            </Link>
            <div className="flex items-center py-2 text-foreground/80">
              <Phone className="h-5 w-5 mr-3" />
              +91 98765 43210
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-around">
          <Link href="/wishlist" onClick={onClose}>
            <Button variant="outline" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>
          <Link href="/account" onClick={onClose}>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link href="/cart" onClick={onClose}>
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
