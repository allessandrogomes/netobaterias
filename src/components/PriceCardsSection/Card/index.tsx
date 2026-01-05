/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./styles.module.scss";
import { VscTools } from "react-icons/vsc";
import { SlEnergy } from "react-icons/sl";
import { LiaCertificateSolid } from "react-icons/lia";

interface ICard {
  imagem: string;
  nome: string;
  modelo: string;
  preco: number;
  parcelas: number;
  valorParcela: number;
  cca: number;
  mesesGarantia: number;
}

export default function Card({
  imagem,
  nome,
  modelo,
  preco,
  parcelas,
  valorParcela,
  cca,
  mesesGarantia,
}: ICard) {
  function handleBuyClick() {
    const message = `Olá, quero comprar uma Bateria *${nome}*.`;
    window.open(
      `https://api.whatsapp.com/send?phone=5574988623412&text=${message}`,
      "_blank"
    );
  }

  return (
    <div className={styles.cardContainer}>
      <img
        src={imagem ? imagem : "/images/fallback-battery.png"}
        alt={nome}
        title={modelo}
      />

      <div className={styles.informationCard}>
        <div className={styles.batteryModelBox}>
          <h3>{nome}</h3>
          <h4>{modelo}</h4>
        </div>

        <div className={styles.batteryInformationsBox}>
          <div className={styles.batteryPriceBox}>
            <h3>
              <span>R$</span> {preco}
            </h3>
            <h4>
              à vista ou até {parcelas}x de R$ {valorParcela} sem juros
            </h4>
          </div>
          <div className={styles.batterySpecificationsBox}>
            <h5>
              <VscTools className={styles.icon} /> Sem Manutenção
            </h5>
            <div className={styles.divider}></div>
            <h5>
              <SlEnergy className={styles.icon} /> CCA: {cca}
            </h5>
            <div className={styles.divider}></div>
            <h5>
              <LiaCertificateSolid className={styles.icon} /> {mesesGarantia}{" "}
              Meses de Garantia
            </h5>
          </div>
          <button onClick={handleBuyClick} className={styles.buttonBuy}>
            Comprar
          </button>
          <h6>Venda condicionada à devolução da bateria insersível.</h6>
        </div>
      </div>
    </div>
  );
}
