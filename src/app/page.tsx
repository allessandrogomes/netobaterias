import Header from "@/components/Header";
import InitialSection from "@/components/InitialSection";
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
import PriceCardsSection from "@/components/PriceCardsSection";


export default function Home() {
  return (
    <>
      <header><Header /></header>

      <main>
        <InitialSection />
        <PriceCardsSection />
      </main>

      <footer></footer>
    </>
  )
}
