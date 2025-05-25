import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BumbleB - Strawberry Flower Pollinating Rover",
  description:
    "Revolutionary autonomous rover designed to enhance strawberry crop yields through precision pollination technology",
  keywords: "robotics, agriculture, pollination, strawberry, autonomous, rover, farming",
  authors: [{ name: "BumbleB Team" }],
  openGraph: {
    title: "BumbleB - Strawberry Flower Pollinating Rover",
    description:
      "Revolutionary autonomous rover designed to enhance strawberry crop yields through precision pollination technology",
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
