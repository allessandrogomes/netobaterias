/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { STRAPI_URL } from "@/utils/strapi-url";

interface IData {
  id: number;
  logo: {
    url: string;
  };
  nome: string;
}

export default function CallToActionSection() {
  const [data, setData] = useState<IData[] | undefined>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${STRAPI_URL}/api/parceiros?populate=*`);
        const json = await response.json();
        setData(json.data);
        console.log(json.data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);
  function redirectToWhatsApp() {
    const message = "Olá, gostaria de comprar uma bateria.";
    window.open(
      `https://api.whatsapp.com/send?phone=5574988623412&text=${message}`,
      "_blank"
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.layer}></div>
      <div className={styles.headerBox}>
        <h2>Pronto para escolher sua bateria?</h2>
        <h3>
          Fale conosco agora e garanta a melhor bateria com entrega rápida e
          instalação especializada.
        </h3>
      </div>
      <div className={styles.brands}>
        {data && data.length ? (
          data.map((parceiro) => (
            <img
              key={parceiro.id}
              src={parceiro.logo.url}
              alt={parceiro.nome}
              title={parceiro.nome}
            />
          ))
        ) : (
          <p>Não foi possível encontrar nenhum parceiro</p>
        )}
      </div>
      <button onClick={redirectToWhatsApp} className={styles.buyButton}>
        Comprar agora
      </button>
    </section>
  );
}
