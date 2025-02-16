'use client'

import { useEffect, useState } from "react"
import styles from "./styles.module.scss"

export default function Form() {
    
    const [formData, setFormData] = useState({
        name: "",
        model: "",
        year: ""
    })

    const [messageToWhatsApp, setMessageToWhatsApp] = useState("")

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormData(({ ...formData, [name]: value }))
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormData(({ ...formData, [name]: value.trim() }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setMessageToWhatsApp(`Olá, me chamo *${formData.name}* e preciso de uma bateria!%0A%0AModelo do veículo: *${formData.model}*%0AAno: *${formData.year}*`)
    }

    useEffect(() => {
        if (messageToWhatsApp) {
            window.open(`https://api.whatsapp.com/send?phone=5574988623412&text=${messageToWhatsApp}`, '_blank')
        }
    }, [messageToWhatsApp])
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldBox}>
                <div className={styles.field}>
                    <label>Seu nome</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={formData.name} name="name" type="text" required/>
                </div>
                <div className={styles.field}>
                    <label>Modelo do veículo</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={formData.model} name="model" type="text" required/>
                </div>
                <div className={styles.field}>
                    <label>Ano do veículo</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={formData.year} name="year" type="number" required/>
                </div>
            </div>

            <button type="submit">Comprar Agora</button>
        </form>
    )
}