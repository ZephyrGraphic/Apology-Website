"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Wait for component to mount before accessing the audio element
    const audio = document.getElementById("background-music") as HTMLAudioElement
    if (audio) {
      audioRef.current = audio

      // Add event listeners for debugging
      audio.addEventListener("error", (e) => {
        console.log("Audio error details:", e)
      })

      audio.addEventListener("canplay", () => {
        console.log("Audio can play now")
      })
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        // Try to play and handle the promise
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              console.log("Audio started playing successfully")
            })
            .catch((error) => {
              console.log("Play was prevented:", error)
              // Try to play on next user interaction
              const playOnInteraction = () => {
                audioRef.current
                  ?.play()
                  .then(() => {
                    setIsPlaying(true)
                    document.removeEventListener("click", playOnInteraction)
                  })
                  .catch((e) => console.log("Still can't play:", e))
              }
              document.addEventListener("click", playOnInteraction, { once: true })
            })
        }
      }
    } catch (error) {
      console.error("Error toggling audio:", error)
    }
  }

  return (
    <>
      {/* Include the audio element directly in the DOM */}
      <audio id="background-music" src="/background-music.mp3" loop preload="auto" />

      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full shadow-md bg-white/80 backdrop-blur-sm hover:bg-white/90"
          onClick={togglePlay}
          aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
        >
          {isPlaying ? <Volume2 className="h-5 w-5 text-rose-500" /> : <VolumeX className="h-5 w-5 text-gray-500" />}
        </Button>
      </div>
    </>
  )
}
