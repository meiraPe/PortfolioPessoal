"use client"

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Este projeto é meu portfólio pessoal, desenvolvido para apresentar meus projetos, habilidades e experiência de forma clara, moderna e interativa. Ele foi criado com foco em design minimalista e futurista, com destaque para tipografia monoespaçada, cores contrastantes e animações suaves que melhoram a experiência do usuário.",
    img: "/project1.png",
    link: "https://github.com/seuusuario/portfolio"
  },
  {
    title: "E-commerce Project: 'Corre 012'",
    desc: "Este projeto é um protótipo de e-commerce totalmente responsivo, desenvolvido com foco em experiência do usuário, design moderno e interatividade visual. Todas as páginas foram criadas utilizando Next.js, com animações suaves e responsivas, garantindo uma navegação fluida em dispositivos móveis e desktops.",
    img: "/project2.png",
    link: "https://github.com/meiraPe/Corre012-Project"
  },
  {
    title: "Dashboard Analytics",
    desc: "Dashboard interativo com gráficos e relatórios em tempo real.",
    img: "/project3.png",
    link: "https://github.com/seuusuario/dashboard"
  }
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        Projetos
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((p, index) => (
          <motion.a
            href={p.link}
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            target="_blank"
            rel="noopener noreferrer"
          >
          <div className={styles.imageWrapper}>
            <img src={p.img} alt={p.title} />
              <div className={styles.overlay}>
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
          </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
