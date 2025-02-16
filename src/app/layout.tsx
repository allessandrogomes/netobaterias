import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Neto Baterias",
  description: "Neto Baterias site",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
