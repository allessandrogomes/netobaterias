/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header"
import InitialSection from "@/components/InitialSection"
import "normalize.css"
import "@fontsource/montserrat"
import "@fontsource/montserrat/100.css"
import "@fontsource/montserrat/200.css"
import "@fontsource/montserrat/300.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"
import PriceCardsSection from "@/components/PriceCardsSection"
import ServicesSection from "@/components/ServicesSection"
import CallToActionSection from "@/components/CallToActionSection"
import Footer from "@/components/Footer"
import styles from "./styles.module.scss"


export default function Home() {
  return (
    <>
      <header><Header /></header>

      <main>
        <a href="https://wa.me/5574988623412" target="_blank" className={styles.whatsappButton}><img src="/images/whatsapp-icon.png" alt="Ícone do WhatsApp." title="WhatsApp Neto Baterias"/></a>
        <InitialSection />
        <PriceCardsSection />
        <ServicesSection />
        <CallToActionSection />
      </main>

      <footer><Footer /></footer>
    </>
  )
}
