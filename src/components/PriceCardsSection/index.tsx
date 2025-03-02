'use client'

import Card from "./Card"
import styles from "./styles.module.scss"

export default function PriceCardsSection() {

    function handleContact() {
        const message = "Olá, gostaria de comprar uma bateria."
        window.open(`https://api.whatsapp.com/send?phone=5574988623412&text=${message}`, '_blank')
    }

    return (
        <section className={styles.section}>
            <div className={styles.headerBox}>
                <h2>Escolha a bateria ideal para o seu veículo</h2>
                <h3>Entrega e Instalação Gratuita</h3>
                <h4>Compare preços, especificações e garanta a melhor performance com nossas opções de baterias de alta qualidade.</h4>
            </div>

            <div className={styles.cardsBox}>
                <Card
                    batteryImage="/images/moura-battery-1.webp"
                    altImage="Imagem de uma Bateria Moura"
                    titleImage="Bateria Moura"
                    title="Moura 60Ah"
                    subtitle="Bateria M60GD MGE3 SLI"
                    price="479,89"
                    priceOnCard="à vista ou até 10x de 49,99 sem juros"
                    cca={460}
                    monthsOfWarranty={24}
                />
                <Card
                    batteryImage="/images/zetta-battery-1.webp"
                    altImage="Imagem de uma Bateria Zetta"
                    titleImage="Bateria Zetta"
                    title="Zetta 60Ah"
                    subtitle="Bateria Z60D"
                    price="379,89"
                    priceOnCard="à vista ou até 10x de 39,99 sem juros"
                    cca={400}
                    monthsOfWarranty={18}
                />
                <Card
                    batteryImage="/images/kondor-battery-2.webp"
                    altImage="Imagem de uma Bateria Kondor"
                    titleImage="Bateria Kondor"
                    title="Kondor 60Ah"
                    subtitle="Bateria F22 MPD"
                    price="319,89"
                    priceOnCard="à vista ou até 10x de 33,99 sem juros"
                    cca={430}
                    monthsOfWarranty={12}
                />
            </div>

            <div className={styles.contactBox}>
                <h4>Precisa de outro modelo? <br/>Entre em contato conosco!</h4>
                <button onClick={handleContact}>Entrar em contato</button>
            </div>
        </section>
    )
}