'use client'
/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"

export default function CallToActionSection() {
    function redirectToWhatsApp() {
        const message = "Olá, gostaria de comprar uma bateria."
        window.open(`https://api.whatsapp.com/send?phone=5574988623412&text=${message}`, '_blank')
    }

    return (
        <section className={styles.section}>
            <div className={styles.layer}></div>
            <div className={styles.headerBox}>
                <h2>Pronto para escolher sua bateria?</h2>
                <h3>Fale conosco agora e garanta a melhor bateria com entrega rápida e instalação especializada.</h3>
            </div>
            <div className={styles.brands}>
                <img src="/images/zetta-logo.webp" alt="Logomarca da Bateria Zetta" title="Zetta"/>
                <img src="/images/moura-logo.webp" alt="Logomarca da Bateria Moura" title="Moura"/>
                <img src="/images/kondor-logo.webp" alt="Logomarca da Bateria Kondor" title="Kondor"/>
            </div>
            <button onClick={redirectToWhatsApp} className={styles.buyButton}>Comprar agora</button>
        </section>
    )
}