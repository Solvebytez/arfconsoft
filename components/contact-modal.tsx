"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ContactForm } from "@/components/contact-form"

interface ContactModalProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
}

export function ContactModal({
  open,
  onClose,
  title = "Get in touch",
  description = "Share your details and we'll get back to you shortly.",
}: ContactModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || !open) return null

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Close contact form"
        >
          ✕
        </button>
        <h2 className="mb-2 text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mb-4 text-sm text-gray-500">
          {description}
        </p>
        <ContactForm onSuccess={onClose} />
      </div>
    </div>,
    document.body
  )
}

