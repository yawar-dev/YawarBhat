import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yawar Hussain Bhat - Software QA Engineer | SDET",
  description:
    "Portfolio of Yawar Hussain Bhat, a detail-oriented Software QA Engineer and SDET with 4+ years of experience in automation testing, Playwright, Selenium, REST Assured, and CI/CD pipelines.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
