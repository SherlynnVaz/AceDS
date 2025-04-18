"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BookOpen, Home, LogOut, User } from "lucide-react"
import { useEffect, useState } from "react"

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check login status whenever component mounts or pathname changes
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsLoggedIn(true)
    } else {
      setUser(null)
      setIsLoggedIn(false)
    }
  }, [pathname])

  const handleLogout = async () => {
    // Clear local storage
    localStorage.removeItem("user")
    
    // Clear the token cookie by making a request to an API endpoint
    await fetch("/api/auth/logout", {
      method: "POST",
    })

    // Redirect to home page
    router.push("/")
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-bold text-xl flex items-center mr-8">
          <BookOpen className="h-6 w-6 mr-2 text-green-600" />
          <span>AceDS</span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
          >
            <div className="flex items-center">
              <Home className="h-4 w-4 mr-1" />
              <span>Home</span>
            </div>
          </Link>
          <Link
            href="/topics"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname.startsWith("/topics") ? "text-primary" : "text-muted-foreground",
            )}
          >
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>Topics</span>
            </div>
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
                )}
              >
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{user?.name || "Dashboard"}</span>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
