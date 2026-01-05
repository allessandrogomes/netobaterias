/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./styles.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface FooterProps {
  horarioAtendimento?: string;
  localizacao?: string;
  telefone?: string;
  instagram?: string;
  ano?: number;
}

export default function Footer({
  horarioAtendimento,
  localizacao,
  telefone,
  instagram,
  ano,
}: FooterProps) {
  function redirectToWhatsApp() {
    window.open(
      `https://wa.me/${telefone ? `55${telefone}` : "5574988623412"}`,
      "_blank"
    );
  }

  function redirectToInstagram() {
    window.open(
      `https://www.instagram.com/${instagram ? instagram : "netobaterias"}/`,
      "_blank"
    );
  }

  return (
    <div className={styles.container}>
      <h3>
        {horarioAtendimento
          ? horarioAtendimento
          : "Atendimento 24h - Todos os dias, incluindo feriados."}
      </h3>
      <h3>
        {localizacao
          ? localizacao
          : "Rua Largo Alegre, Nº 299, Bairro João XXIII, Juazeiro-BA"}
      </h3>
      <h3 onClick={redirectToWhatsApp} className={styles.phone}>
        <FaPhoneAlt style={{ position: "relative", top: "3px" }} />{" "}
        {telefone ? telefone : "(74) 98862-3412"}
      </h3>
      <h3 onClick={redirectToInstagram} className={styles.instagram}>
        <FaInstagram
          style={{ position: "relative", top: "3px", fontSize: "18px" }}
        />{" "}
        {instagram ? `@${instagram}` : "@netobaterias"}
      </h3>
      <h3>
        &copy; {ano ? ano : 2025} Neto Baterias - Todos os direitos reservados
      </h3>
      <h3>
        Desenvolvido por{" "}
        <a
          href="https://www.valebytes.com.br/"
          target="_blank"
          title="ValeBytes Site"
        >
          <img
            src="/images/transparent-logo-valebytes.webp"
            alt="Logomarca da empresa ValeBytes"
            title="Logomarca da ValeBytes"
          />
        </a>
      </h3>
    </div>
  );
}
