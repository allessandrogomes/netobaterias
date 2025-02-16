/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"

export default function InitialPriceBox() {
    return (
        <div className={styles.priceBox}>
            <h3>Baterias a partir de: <br /><span className={styles.yellowSpan}>R$ 209,99</span></h3>
            <div className={styles.batterysBox}>
                <img className={styles.moura} src="/images/moura-battery-1.webp" alt="Imagem Bateria Moura" title="Bateria Moura" />
                <img className={styles.kondor} src="/images/kondor-battery-1.webp" alt="Imagem Bateria Kondor" title="Bateria Kondor" />
            </div>
        </div>
    )
}