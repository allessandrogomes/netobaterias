/* eslint-disable @next/next/no-img-element */
'use client'
import styles from "./styles.module.scss"
import { FaPhoneAlt } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
    function redirectToWhatsApp() {
        window.open("https://wa.me/5574988623412", '_blank')
    }

    function redirectToInstagram() {
        window.open("https://www.instagram.com/netobaterias/", '_blank')
    }

    return (
        <div className={styles.container}>
            <h3>Atendimento 24h - Todos os dias, incluindo feriados.</h3>
            <h3 onClick={redirectToWhatsApp} className={styles.phone}><FaPhoneAlt style={{ position: "relative", top: "3px" }} /> (74) 98862-3412</h3>
            <h3 onClick={redirectToInstagram} className={styles.instagram}><FaInstagram style={{ position: "relative", top: "3px", fontSize: "18px" }} /> @netobaterias</h3>
            <h3>&copy; 2025 Neto Baterias - Todos os direitos reservados</h3>
            <h3>Desenvolvido por <a href="https://www.valebytes.com.br/" target="_blank"><img src="/images/transparent-logo-valebytes.webp" alt="Logomarca da empresa ValeBytes" /></a></h3>
        </div>
    )
}