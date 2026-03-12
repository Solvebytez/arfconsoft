import type React from "react"
import type { Metadata } from "next"
import { Saira } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
})

export const metadata: Metadata = {
  title: "Arfconsoft - Innovative Technology Solutions",
  description: "Transform your business with innovative technology solutions. We deliver scalable, secure, and efficient software tailored to your needs.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
