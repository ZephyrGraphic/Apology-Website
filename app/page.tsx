"use client"

import { useState, useEffect } from "react"
import { HeartIcon, SendIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { AudioPlayer } from "@/components/audio-player"
import { RomanticAnimations } from "@/components/romantic-animations"
import { FallingPetals } from "@/components/falling-petals"
import Script from "next/script"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // WhatsApp link with encoded phone number
  const whatsappLink = "https://wa.me/6281574627052?text=Halo%20Mas%2C%20Ade%20sudah%20melihat%20pesanmu..."

  // Only render client components after mount to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      {/* Add a script to help with audio playback */}
      <Script id="audio-helper">
        {`
          // Try to enable audio on first user interaction
          document.addEventListener('click', function audioInit() {
            const audio = document.getElementById('background-music');
            if (audio) {
              audio.play().catch(e => console.log('Initial play prevented:', e));
            }
            document.removeEventListener('click', audioInit);
          }, { once: true });
        `}
      </Script>

      {/* Romantic Animations - only render after mount */}
      {isMounted && (
        <>
          <RomanticAnimations />
          <FallingPetals />
          <AudioPlayer />
        </>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-8 md:pt-24 md:pb-12 text-center relative z-10">
        <div className="animate-float inline-block mb-6">
          <HeartIcon className="h-16 w-16 text-rose-500" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Maaf Ya, Sayang</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Untuk Ade, dari Mas dengan tulus</p>
      </section>

      {/* Message Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Untuk Ade yang Spesial</h2>

            <div className="prose prose-rose max-w-none">
              <p>
                Ade, Mas menulis ini untuk mengakui kesalahan Mas dan meminta maaf dengan tulus. Mas sadar bahwa Mas
                sering memprioritaskan hal-hal lain, termasuk tidur, daripada menghabiskan waktu bersama Ade.
              </p>

              <p>
                Mas menyadari betapa berharganya waktu kita bersama, dan Mas menyesal telah menyia-nyiakannya. Ade
                pantas mendapatkan perhatian dan kasih sayang yang lebih baik dari Mas.
              </p>

              <p>
                Mas berjanji untuk berubah dan menjadi lebih baik untuk Ade. Ade adalah prioritas Mas, dan Mas akan
                membuktikannya dengan tindakan, bukan hanya kata-kata.
              </p>

              <p className="font-medium">- Mas</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Commitment Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">Komitmen Mas Untuk Ade</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Lebih Mendengarkan</h3>
              <p className="text-gray-600">
                Mas berjanji untuk lebih mendengarkan perasaan dan kebutuhan Ade dengan sepenuh hati.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Waktu Berkualitas</h3>
              <p className="text-gray-600">
                Mas akan memprioritaskan waktu kita bersama dan memastikan itu adalah waktu yang berkualitas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Komunikasi Terbuka</h3>
              <p className="text-gray-600">
                Mas berjanji untuk selalu berkomunikasi dengan jujur dan terbuka tentang perasaan Mas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Memory Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kenangan Kita</h2>
                <p className="text-gray-600">
                  Setiap momen bersama Ade sangat berharga bagi Mas. Mas berjanji untuk menciptakan lebih banyak
                  kenangan indah bersama Ade.
                </p>
                <p className="text-gray-500 text-sm mt-4">14 Januari, 2024</p>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image src="/chat-memory.jpeg" alt="Percakapan kita" fill className="object-cover" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Response Section */}
      <section className="container mx-auto px-4 py-8 md:py-12 mb-12 relative z-10">
        <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-6 md:p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bagikan Perasaan Ade</h2>
            <p className="text-gray-600 mb-8">
              Ade, Mas ingin mendengar perasaan Ade. Klik tombol di bawah untuk menghubungi Mas langsung.
            </p>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                className="text-lg px-8 py-6 h-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <SendIcon className={`mr-2 h-5 w-5 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
                Balas via WhatsApp
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Dibuat dengan ❤️ dari Mas untuk Ade</p>
        </div>
      </footer>
    </main>
  )
}
