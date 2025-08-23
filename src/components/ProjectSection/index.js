"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import styles from "./Projects.module.css";

const projects = [
  {
    title: "Project: 'Portfolio Website'",
    desc:
      "Este projeto é o meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, experiências e projetos de forma moderna e interativa. A ideia principal é criar um espaço digital que traduza minha identidade profissional e mostre o que eu posso entregar como desenvolvedor.",
    img: "/project1.png",
    link: "https://github.com/meiraPe/PortfolioPessoal",
  },
  {
    title: "E-commerce Project: 'Corre 012'",
    desc:
      "Este projeto é um E-commerce desenvolvido em Next.JS, com foco em oferecer uma experiência de compra moderna, intuitiva e responsiva. O objetivo é simular o fluxo real de um usuário em uma loja virtual, aplicando conceitos de desenvolvimento web, boas práticas de design de interface e usabilidade.",
    img: "/project2.png",
    link: "https://github.com/meiraPe/Corre012-Project",
  },
  {
    title: "Project: 'To-Do List'",
    desc: "Este projeto é uma To-Do List (lista de tarefas) desenvolvida com o objetivo de praticar conceitos de programação e organização de projetos. A aplicação permite que o usuário adicione, edite, marque como concluídas e remova tarefas, proporcionando uma forma simples e eficiente de gerenciar atividades do dia a dia.",
    img: "/project2.png",
    link: "https://github.com/seuusuario/dashboard",
  },
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
        Projetos:
      </motion.h2>

      <Swiper
          modules={[EffectCoverflow, Autoplay, Navigation]}
          effect="coverflow"
          centeredSlides
          slidesPerView={1}           
          loop
          speed={1200}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          navigation
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
        }}
          className={styles.swiper}
        >
        {projects.map((p, index) => (
          <SwiperSlide key={index}>

           <div className={styles.card}>
            <a href={p.link} target="_blank" rel="noopener noreferrer">

              {/* Título */}
              <div className={styles.titleBlock}>
                <h3>{p.title}</h3>
              </div>

              {/* Imagem */}
              <div className={styles.imageWrapper}>
                <img src={p.img} alt={p.title} />
                <div className={styles.overlay}>
                  <FaGithub className={styles.icon} />
                </div>
              </div>

              {/* Descrição */}
              <div className={styles.textBlock}>
                <p>{p.desc}</p>
              </div>

            </a>
          </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
