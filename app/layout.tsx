import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maaf Ya, Sayang | Untuk Ade",
  description: "Sebuah permintaan maaf yang tulus dari Mas untuk Ade",
  openGraph: {
    images: ["/og-image.png"],
    url: "https://maaf-yaa-sayangkuu.vercel.app/",
    siteName: "Maaf Ya, Sayang",
    locale: "id_ID",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Add a direct link to the audio file to ensure it's preloaded */}
        <link rel="preload" href="/background-music.mp3" as="audio" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'