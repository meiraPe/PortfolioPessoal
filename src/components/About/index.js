"use client"

import { motion } from "framer-motion";
import styles from "./About.module.css";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function About() {
  return (
     <section className={styles.about} id="about">
      <motion.div
        className={styles.card}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={item} className={styles.textBlock}>
          <h2 className={styles.title}>Sobre Mim</h2>
          <p className={styles.text}>
            Tenho 18 anos e sou apaixonado por tecnologia. Estou no último semestre de{" "}
            <span className={styles.highlight}>Técnico em Informática para Internet</span> no IFSP.
            Atualmente busco oportunidades de estágio em vagas júnior com foco em desenvolvimento
            <span className={styles.highlight}> Frontend e Fullstack</span>. Estou sempre aberto a
            desafios e pronto para contribuir com minha criatividade e habilidades técnicas. Tenho
            experiência com{" "}
            <span className={styles.highlight}>
              Next.js, Express.js, React.js, Node.js, JavaScript, HTML, CSS e UX/UI Design
            </span>. Além disso, possuo inglês avançado certificado pela{" "}
            <span className={styles.highlight}>inFlux - Escola de Idiomas</span>.
          </p>
        </motion.div>

        <motion.div variants={item} className={styles.imageBlock}>
          <img src="/foto.jpg" alt="Pedro Meira" className={styles.image} />
        </motion.div>
      </motion.div>
    </section>
  );
}
