import styles from "./styles.module.scss"

export default function Form() {
    return (
        <form className={styles.form}>
            <div className={styles.fieldBox}>
                <div className={styles.field}>
                    <label>Seu nome</label>
                    <input type="text" required/>
                </div>
                <div className={styles.field}>
                    <label>Modelo do veículo</label>
                    <input type="text" required/>
                </div>
                <div className={styles.field}>
                    <label>Ano do veículo</label>
                    <input type="number" required/>
                </div>
            </div>

            <button>Comprar Agora</button>
        </form>
    )
}