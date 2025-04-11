"use client"

import { useEffect, useState } from "react"
import { Heart, Flower } from "lucide-react"

type FloatingItem = {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  duration: number
  delay: number
  opacity: number
  type: "heart" | "flower"
}

export function RomanticAnimations() {
  const [floatingItems, setFloatingItems] = useState<FloatingItem[]>([])
  const [isVisible, setIsVisible] = useState(true)

  // Generate random floating items
  useEffect(() => {
    const generateItems = () => {
      const newItems: FloatingItem[] = []
      const count = window.innerWidth < 768 ? 8 : 12 // Fewer items on mobile

      for (let i = 0; i < count; i++) {
        newItems.push({
          id: i,
          x: Math.random() * 100, // Random x position (0-100%)
          y: Math.random() * 100, // Random y position (0-100%)
          size: Math.random() * 1.5 + 0.5, // Random size (0.5-2)
          rotation: Math.random() * 360, // Random rotation (0-360deg)
          duration: Math.random() * 15 + 10, // Random animation duration (10-25s)
          delay: Math.random() * 5, // Random delay (0-5s)
          opacity: Math.random() * 0.5 + 0.3, // Random opacity (0.3-0.8)
          type: Math.random() > 0.3 ? "heart" : "flower", // 70% hearts, 30% flowers
        })
      }
      setFloatingItems(newItems)
    }

    generateItems()

    // Regenerate items periodically for variety
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        generateItems()
      }
    }, 15000)

    // Handle visibility change
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible")
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Cleanup
    return () => {
      clearInterval(interval)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingItems.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float-custom"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `scale(${item.size}) rotate(${item.rotation}deg)`,
            opacity: item.opacity,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.type === "heart" ? (
            <Heart className="text-rose-400" size={24} />
          ) : (
            <Flower className="text-pink-300" size={24} />
          )}
        </div>
      ))}
    </div>
  )
}
