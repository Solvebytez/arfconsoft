"use client"

import { useEffect, useRef } from "react"

export function CodingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const codeSnippets = [
      "const app = () => {",
      "function render() {",
      "import { useState}",
      "export default",
      "async function fetch()",
      "return <div>",
      "useEffect(() => {",
      "interface Props {",
      "type User = {",
      "map((item) =>",
      "filter(x => x > 0)",
      "await response.json()",
      'className="flex"',
      "onClick={handler}",
      "Promise.all([...])",
    ]

    class CodeParticle {
      x: number
      y: number
      speed: number
      text: string
      opacity: number
      fontSize: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.speed = Math.random() * 1 + 0.5
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        this.opacity = Math.random() * 0.5 + 0.3
        this.fontSize = Math.random() * 8 + 12
      }

      update() {
        this.y += this.speed
        if (this.y > canvas.height) {
          this.y = -50
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(37, 171, 196, ${this.opacity})`
        ctx.font = `${this.fontSize}px 'Courier New', monospace`
        ctx.fillText(this.text, this.x, this.y)
      }
    }

    const particles: CodeParticle[] = []
    for (let i = 0; i < 40; i++) {
      particles.push(new CodeParticle())
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
