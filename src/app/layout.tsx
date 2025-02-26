import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Neto Baterias | Baterias Automotivas em Juazeiro e Petrolina",
  description: "A Neto Baterias é especialista em baterias automotivas, nobreak e solares em Juazeiro-BA e Petrolina-PE. Oferecemos baterias para carros, motos, caminhões, sistemas de energia solar e nobreaks, com instalação rápida, garantia e os melhores preços da região. Encontre a bateria ideal com qualidade e confiança.",
  keywords: ["baterias automotivas Juazeiro", "baterias automotivas Petrolina", "bateria para carro Juazeiro", "bateria para carro Petrolina", "baterias nobreak Juazeiro", "baterias nobreak Petrolina", "baterias solares Juazeiro", "baterias solares Petrolina", "venda de baterias Juazeiro", "venda de baterias Petrolina", "bateria para moto Juazeiro", "bateria para moto Petrolina", "troca de bateria automotiva", "baterias com garantia Juazeiro", "baterias com garantia Petrolina"],
  authors: [{ name: "Neto Baterias", url: "https://netobaterias.com.br" }],
  publisher: "Neto Baterias",
  robots: "index, follow",
  openGraph: {
    locale: "pt_BR",
    siteName: "Neto Baterias",
    type: "website",
    title: "Neto Baterias | Baterias Automotivas em Juazeiro e Petrolina",
    description: "A Neto Baterias é especialista em baterias automotivas, nobreak e solares em Juazeiro-BA e Petrolina-PE. Oferecemos baterias para carros, motos, caminhões, sistemas de energia solar e nobreaks, com instalação rápida, garantia e os melhores preços da região. Encontre a bateria ideal com qualidade e confiança.",
    url: "https://netobaterias.com.br",
    images: "https://netobaterias.com.br/images/logo.webp",
    countryName: "Brasil"
  },
  twitter: {
    card: "summary_large_image",
    title: "Neto Baterias | Baterias Automotivas em Juazeiro e Petrolina",
    description: "A Neto Baterias é especialista em baterias automotivas, nobreak e solares em Juazeiro-BA e Petrolina-PE. Oferecemos baterias para carros, motos, caminhões, sistemas de energia solar e nobreaks, com instalação rápida, garantia e os melhores preços da região. Encontre a bateria ideal com qualidade e confiança.",
    images: "https://netobaterias.com.br/images/logo.webp"
  },
  icons: "https://netobaterias.com.br/images/favicon.ico"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://netobaterias.com.br"/>
        <link rel="image_src" href="https://netobaterias.com.br/images/logo.webp"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
