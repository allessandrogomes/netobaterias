 import Form from "./Form"
import InitialPriceBox from "./Infos/InitialPriceBox"
import InitialSubtitle from "./Infos/InitialSubtitle"
import MainTitle from "./Infos/MainTitle"
import styles from "./styles.module.scss"

export default function InitialSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.infoBox}>
                    <MainTitle />
                    <InitialSubtitle />
                    <InitialPriceBox />
                </div>
                <Form />
            </div>
        </section>
    )
}