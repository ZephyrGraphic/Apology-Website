"use client"

import type React from "react"

import { useEffect, useState } from "react"

type Petal = {
  id: number
  left: number
  size: number
  opacity: number
  duration: number
  delay: number
  rotation: number
}

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Generate initial petals
    generatePetals()

    // Add new petals periodically
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        generatePetals(1)
      }
    }, 2000)

    // Handle visibility change
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible")
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const generatePetals = (count = 5) => {
    const newPetals: Petal[] = []

    for (let i = 0; i < count; i++) {
      newPetals.push({
        id: Date.now() + i,
        left: Math.random() * 100, // Random horizontal position
        size: Math.random() * 0.5 + 0.5, // Random size between 0.5 and 1
        opacity: Math.random() * 0.4 + 0.3, // Random opacity between 0.3 and 0.7
        duration: Math.random() * 10 + 10, // Random duration between 10 and 20 seconds
        delay: Math.random() * 5, // Random delay between 0 and 5 seconds
        rotation: Math.random() * 360, // Random initial rotation
      })
    }

    setPetals((prev) => [...prev, ...newPetals])

    // Remove petals after they've fallen to avoid memory issues
    setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !newPetals.some((np) => np.id === p.id)))
    }, 20000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-falling-petal"
          style={
            {
              left: `${petal.left}%`,
              top: "-20px",
              transform: `scale(${petal.size}) rotate(${petal.rotation}deg)`,
              opacity: petal.opacity,
              "--duration": `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
            } as React.CSSProperties
          }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C7.58 2 4 5.58 4 10C4 16 12 22 12 22C12 22 20 16 20 10C20 5.58 16.42 2 12 2Z"
              fill="#FFC0CB"
              fillOpacity="0.7"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
