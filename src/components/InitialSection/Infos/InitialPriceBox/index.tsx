/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

interface InitialPriceBoxProps {
  apartirDe?: number;
  bateria1?: string;
  bateria2?: string;
}

export default function InitialPriceBox({
  apartirDe,
  bateria1,
  bateria2,
}: InitialPriceBoxProps) {
  return (
    <div className={styles.priceBox}>
      <h3>
        Baterias a partir de: <br />
        <span className={styles.yellowSpan}>
          R$ {apartirDe ? apartirDe : "239,99"}{" "}
        </span>
      </h3>
      <div className={styles.batterysBox}>
        <img
          className={styles.moura}
          src={bateria1 ? bateria1 : "/images/moura-battery-1.webp"}
          alt="Imagem Bateria"
          title="Bateria"
        />
        <img
          className={styles.kondor}
          src={bateria2 ? bateria2 : "/images/kondor-battery-1.webp"}
          alt="Imagem Bateria"
          title="Bateria"
        />
      </div>
    </div>
  );
}
