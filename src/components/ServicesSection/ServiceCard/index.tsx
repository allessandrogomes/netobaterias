import styles from "./styles.module.scss"

interface IServiceCard {
    iconName: string,
    title: string,
    text: string
}

export default function ServiceCard({ iconName, title, text }: IServiceCard) {
    return (
        <div className={styles.card}>
            <div className={styles.cardIcon} style={{ backgroundImage: `url('/images/${iconName}.webp')` }}></div>
            <h3>{title}</h3>
            <h4>{text}</h4>
        </div>
    )
}