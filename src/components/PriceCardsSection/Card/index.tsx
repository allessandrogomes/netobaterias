/* eslint-disable @next/next/no-img-element */
'use client'
import styles from "./styles.module.scss"
import { VscTools } from "react-icons/vsc"
import { SlEnergy } from "react-icons/sl"
import { LiaCertificateSolid } from "react-icons/lia"

interface ICard {
    batteryImage: string,
    altImage: string,
    titleImage: string,
    title: string,
    subtitle: string,
    price: string,
    priceOnCard: string,
    cca: number,
    monthsOfWarranty: number
}

export default function Card({ batteryImage, altImage, titleImage, title, subtitle, price, priceOnCard, cca, monthsOfWarranty }: ICard) {

    function handleBuyClick() {
        const message = `Olá, quero comprar uma Bateria *${title}*.`
        window.open(`https://api.whatsapp.com/send?phone=5574988623412&text=${message}`, '_blank')
    }

    return (
        <div className={styles.cardContainer}>
            <img src={batteryImage} alt={altImage} title={titleImage} />

            <div className={styles.informationCard}>
                <div className={styles.batteryModelBox}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>

                <div className={styles.batteryInformationsBox}>
                    <div className={styles.batteryPriceBox}>
                        <h3><span>R$</span> {price}</h3>
                        <h4>{priceOnCard}</h4>
                    </div>
                    <div className={styles.batterySpecificationsBox}>
                        <h5><VscTools className={styles.icon} /> Sem Manutenção</h5>
                        <div className={styles.divider}></div>
                        <h5><SlEnergy className={styles.icon} /> CCA: {cca}</h5>
                        <div className={styles.divider}></div>
                        <h5><LiaCertificateSolid className={styles.icon} /> {monthsOfWarranty} Meses de Garantia</h5>
                    </div>
                    <button onClick={handleBuyClick} className={styles.buttonBuy}>Comprar</button>
                    <h6>Venda condicionada à devolução da bateria insersível.</h6>
                </div>
            </div>
        </div>
    )
}