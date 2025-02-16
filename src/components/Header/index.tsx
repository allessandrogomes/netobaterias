import styles from "./styles.module.scss"
import { FaLocationDot } from "react-icons/fa6"

export default function Header() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/images/logo.webp" alt="Logomarca Neto Baterias" />

            {/* Essa div irá existir apenas em versão mobile, para agrupar melhor as informações. */}
            <div className={styles.mobileInformationBox}>
                <address className={styles.address}><FaLocationDot style={{ marginRight: "10px" }} />Juazeiro - BA / Petrolina - PE</address>

                <a href="https://wa.me/5574988623412" target="_blank">
                    <address className={styles.phone}>(74) 98862-3412</address>
                </a>
            </div>
        </div>
    )
}