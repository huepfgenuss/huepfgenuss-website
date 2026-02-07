import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hüpfgenuss - Lokaler Hüpfburg-Verleih",
  description:
    "Mieten Sie bunte Hüpfburgen für Kindergeburtstage, Firmenfeste und Events. Lieferung, Aufbau und Rundum-Service in Ihrer Region.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
