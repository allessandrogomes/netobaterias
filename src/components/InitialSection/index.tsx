import Form from "./Form";
import InitialPriceBox from "./Infos/InitialPriceBox";
import InitialSubtitle from "./Infos/InitialSubtitle";
import MainTitle from "./Infos/MainTitle";
import styles from "./styles.module.scss";

interface InicioProps {
  apartirDe?: number;
  bateria1?: string;
  bateria2?: string;
}

export default function InitialSection({
  apartirDe,
  bateria1,
  bateria2,
}: InicioProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.infoBox}>
          <MainTitle />
          <InitialSubtitle />
          <InitialPriceBox
            apartirDe={apartirDe}
            bateria1={bateria1}
            bateria2={bateria2}
          />
        </div>
        <Form />
      </div>
    </section>
  );
}
