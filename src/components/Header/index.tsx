/* eslint-disable @next/next/no-img-element */
import { STRAPI_URL } from "@/utils/strapi-url";
import styles from "./styles.module.scss";
import { FaLocationDot } from "react-icons/fa6";

interface HeaderProps {
  logo?: string;
  localizacao?: string;
  telefone?: string;
}

export default function Header({ logo, localizacao, telefone }: HeaderProps) {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src={logo ? `${STRAPI_URL}${logo}` : "/images/logo.webp"}
        alt="Logomarca Neto Baterias"
        title="Logomarca Neto Baterias"
      />

      <div className={styles.mobileInformationBox}>
        <address className={styles.address}>
          <FaLocationDot style={{ marginRight: "10px" }} />
          {localizacao ? localizacao : "Juazeiro - BA / Petrolina - PE"}
        </address>

        <a
          href="https://wa.me/5574988623412"
          target="_blank"
          title="Neto Baterias WhatsApp Chat"
        >
          <address className={styles.phone}>
            {telefone ? telefone : "(74) 98862-3412"}{" "}
          </address>
        </a>
      </div>
    </div>
  );
}
