"use client";

/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import InitialSection from "@/components/InitialSection";
import "normalize.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import PriceCardsSection from "@/components/PriceCardsSection";
import ServicesSection from "@/components/ServicesSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { STRAPI_URL } from "@/utils/strapi-url";

interface IData {
  logo: {
    url: string;
  };
  localizacao: string;
  telefone: string;
  apartir_de: number;
  bateria_1_inicio: {
    url: string;
  };
  bateria_2_inicio: {
    url: string;
  };
  horario_atendimento: string;
  instagram: string;
  ano: number;
}

export default function Home() {
  const [data, setData] = useState<IData | undefined>();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `http://${STRAPI_URL}/api/conteudo?populate=*`
        );
        const json = await response.json();
        setData(json.data);
        console.log(json.data);
      } catch {
        console.log("Não foi possível buscar os dados");
      }
    }

    getData();
  }, []);
  return (
    <>
      <header>
        <Header
          logo={data?.logo.url}
          localizacao={data?.localizacao}
          telefone={data?.telefone}
        />
      </header>

      <main>
        <a
          href={`https://wa.me/${
            data?.telefone ? `55${data.telefone}` : "5574988623412"
          }`}
          target="_blank"
          className={styles.whatsappButton}
        >
          <img
            src="/images/whatsapp-icon.png"
            alt="Ícone do WhatsApp."
            title="WhatsApp Neto Baterias"
          />
        </a>
        <InitialSection
          apartirDe={data?.apartir_de}
          bateria1={data?.bateria_1_inicio.url}
          bateria2={data?.bateria_2_inicio.url}
        />
        <PriceCardsSection />
        <ServicesSection />
        <CallToActionSection />
      </main>

      <footer>
        <Footer
          horarioAtendimento={data?.horario_atendimento}
          localizacao={data?.localizacao}
          telefone={data?.telefone}
          instagram={data?.instagram}
          ano={data?.ano}
        />
      </footer>
    </>
  );
}
