"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

type HeaderVariant = "dark" | "light"

interface HeaderProps {
  variant?: HeaderVariant
  showHomeLink?: boolean
}

export function Header({ variant = "dark", showHomeLink = true }: HeaderProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Dark variant styles (default)
  const navClasses = variant === "light" 
    ? "backdrop-blur-lg bg-white/80 border border-gray-200 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-lg"
    : "backdrop-blur-lg bg-gray-900/80 border border-gray-700 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-lg"

  const logoTextClasses = variant === "light"
    ? "text-base md:text-lg font-bold text-gray-900"
    : "text-base md:text-lg font-bold text-white"

  const linkClasses = variant === "light"
    ? "hidden md:flex gap-4 lg:gap-8 text-sm font-medium text-gray-700"
    : "hidden lg:flex gap-8 text-sm font-medium text-gray-300"

  const buttonClasses = variant === "light"
    ? "rounded-full border-2 border-[#25ABC4]/30 bg-transparent px-4 md:px-6 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-[#25ABC4]/10 hover:border-[#25ABC4]/50"
    : "rounded-full border-2 border-[#25ABC4]/30 bg-transparent px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white transition-all duration-300 hover:bg-[#25ABC4]/10 hover:border-[#25ABC4]/50"

  const topPosition = variant === "light" 
    ? "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl"
    : "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-6xl"

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className={topPosition}
    >
      <div className={navClasses}>
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image
              src="/logo-ava.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className={logoTextClasses}>
            Arafcon <span className="text-[#25ABC4]">Soft</span>
          </span>
        </Link>
        <ul className={linkClasses}>
          {showHomeLink && (
            <li>
              <Link 
                href="/" 
                className={`cursor-pointer transition-all duration-300 ${isActive("/") ? "text-[#25ABC4]" : "hover:text-[#25ABC4]"}`}
              >
                Home
              </Link>
            </li>
          )}
          <li>
            <Link 
              href="/services" 
              className={`cursor-pointer transition-all duration-300 ${isActive("/services") ? "text-[#25ABC4]" : "hover:text-[#25ABC4]"}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`cursor-pointer transition-all duration-300 ${isActive("/about") ? "text-[#25ABC4]" : "hover:text-[#25ABC4]"}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`cursor-pointer transition-all duration-300 ${isActive("/contact") ? "text-[#25ABC4]" : "hover:text-[#25ABC4]"}`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              href="/careers" 
              className={`cursor-pointer transition-all duration-300 ${isActive("/careers") ? "text-[#25ABC4]" : "hover:text-[#25ABC4]"}`}
            >
              Careers
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {variant === "light" && pathname === "/" && (
            <Link href="/services" className="md:hidden w-10 h-10 rounded-full bg-[#25ABC4]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#25ABC4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Link>
          )}
          <Link href="/contact" className={variant === "light" && pathname === "/" ? "hidden sm:block" : ""}>
            <Button className={buttonClasses}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

