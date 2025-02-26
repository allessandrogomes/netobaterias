import styles from "./styles.module.scss"

export default function MainTitle() {
    return (
        <h1 className={styles.title}>
            Sua Bateria em Juazeiro e Petrolina, Pelo Melhor Preço na <span className={styles.blueSpan}>Neto</span> <span className={styles.yellowSpan}>Baterias</span>.
        </h1>
    )
}