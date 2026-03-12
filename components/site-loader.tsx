"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100"
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(37,171,196,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,171,196,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000, transparent)' }} />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Main loader animation */}
            <div className="relative h-32 w-32">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#25ABC4] border-r-[#25ABC4]"
              />

              {/* Middle rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-4 border-transparent border-b-[#25ABC4] border-l-[#25ABC4] opacity-60"
              />

              {/* Inner pulsing circle */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 rounded-full bg-[#25ABC4]/30 backdrop-blur-sm"
              />

              {/* Center code brackets */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-[#25ABC4]"
              >
                {"</>"}
              </motion.div>
            </div>

            {/* Loading text with typing effect */}
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-semibold text-gray-900"
              >
                Loading
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex gap-1"
              >
                <span className="h-2 w-2 rounded-full bg-[#25ABC4]" />
                <span className="h-2 w-2 rounded-full bg-[#25ABC4]" />
                <span className="h-2 w-2 rounded-full bg-[#25ABC4]" />
              </motion.div>
            </div>

            {/* Animated code lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2 text-sm font-mono"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 0.6 }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                  className="h-1 rounded-full bg-gradient-to-r from-[#25ABC4] to-transparent"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
