"use Client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>© {new Date().getFullYear()} Pedro Meira. Todos os direitos reservados.</p>

        <div className={styles.socials}>
          <a 
            href="https://github.com/meiraPe" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/pedro-meira-dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:phsantosmeira.07@email.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}