"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./styles.module.scss";
import { STRAPI_URL } from "@/utils/strapi-url";

interface IData {
  id: number;
  imagem: {
    url: string;
  };
  nome: string;
  modelo: string;
  preco: number;
  parcelas: number;
  valor_parcela: number;
  cca: number;
  meses_garantia: number;
}

export default function PriceCardsSection() {
  const [data, setData] = useState<IData[] | undefined>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${STRAPI_URL}/api/baterias?populate=*`);
        const json = await response.json();
        setData(json.data);
        console.log(json.data);
      } catch {
        console.log("Erro ao buscar os dados");
      }
    }

    getData();
  }, []);

  function handleContact() {
    const message = "Olá, gostaria de comprar uma bateria.";
    window.open(
      `https://api.whatsapp.com/send?phone=5574988623412&text=${message}`,
      "_blank"
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.headerBox}>
        <h2>Escolha a bateria ideal para o seu veículo</h2>
        <h3>Entrega e Instalação Gratuita</h3>
        <h4>
          Compare preços, especificações e garanta a melhor performance com
          nossas opções de baterias de alta qualidade.
        </h4>
      </div>

      <div className={styles.cardsBox}>
        {data?.length ? (
          data.map((bateria) => (
            <Card
              key={bateria.id}
              imagem={bateria.imagem.url}
              nome={bateria.nome}
              modelo={bateria.modelo}
              preco={bateria.preco}
              cca={bateria.cca}
              mesesGarantia={bateria.meses_garantia}
              parcelas={bateria.parcelas}
              valorParcela={bateria.valor_parcela}
            />
          ))
        ) : (
          <p>Para conhecer nossos produtos, entre em contato conosco!</p>
        )}
      </div>

      <div className={styles.contactBox}>
        <h4>
          Precisa de outro modelo? <br />
          Entre em contato conosco!
        </h4>
        <button onClick={handleContact}>Entrar em contato</button>
      </div>
    </section>
  );
}
