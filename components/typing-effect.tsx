"use client"

import { useState, useEffect } from "react"

const phrases = [
  "Build The Future With Cutting-Edge Technology",
  "Transform Ideas Into Digital Reality",
  "Innovate With Modern Software Solutions",
]

export function TypingEffect() {
  const [text, setText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.substring(0, text.length + 1))
          setTypingSpeed(100)
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(currentPhrase.substring(0, text.length - 1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, phraseIndex, typingSpeed])

  return (
    <h1 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 min-h-[80px] sm:min-h-[100px] md:min-h-[140px] lg:min-h-[180px] xl:min-h-[210px]">
      {text.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          {i < text.split("\n").length - 1 && <br />}
        </span>
      ))}
      <span className="animate-pulse text-[#25ABC4]">|</span>
    </h1>
  )
}
