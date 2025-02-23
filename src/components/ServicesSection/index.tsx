/* eslint-disable @next/next/no-img-element */
import ServiceCard from "./ServiceCard"
import styles from "./styles.module.scss"

export default function ServicesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.headerBox}>
                <h2>Serviços Especializados para sua Bateria</h2>
                <h3>Do teste de carga à instalação, oferecemos tudo para manter seu veículo sempre pronto para rodar. Atendimento rápido, seguro e de qualidade!</h3>
            </div>

            <div className={styles.contentBox}>
                <div className={styles.shadowsBox}>
                    <img src="/images/shadow-1.webp" alt="Imagem de sombra esquerda da sessão."/>
                    <img src="/images/shadow-2.webp" alt="Imagem de sombra direita da sessão."/>
                </div>
                <div className={styles.cardsBox}>
                    <ServiceCard iconName="delivery-icon" title="Entrega Rápida" text="Receba sua bateria onde estiver com instalação profissional e gratuita."/>
                    <ServiceCard iconName="24h" title="Plantão 24h" text="Atendimento emergencial a qualquer hora do dia ou da noite."/>
                    <ServiceCard iconName="battery-icon" title="Teste de Bateria" text="Verifique a saúde da sua bateria antes de trocar."/>
                    <ServiceCard iconName="tecnico-icon" title=" Assistência Técnica Especializada" text="Suporte para garantir o melhor desempenho da sua bateria."/>
                    <ServiceCard iconName="ecology-icon" title="Descarte Ecológico" text="Destinação correta para baterias usadas, sem impacto ambiental."/>
                    <ServiceCard iconName="test-icon" title="Alternadores e Partida" text="Diagnóstico e suporte para garantir que o sistema elétrico do seu veículo funcione perfeitamente."/>
                </div>
            </div>
        </section>
    )
}