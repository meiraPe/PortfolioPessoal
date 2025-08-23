"use client"

import { motion } from "framer-motion";
import { useState } from "react"
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.logo}>Pedro Meira<span>| Dev</span></div>
      <nav>

      {/* Menu desktop */}
        <ul className={styles.nav}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

        {/* Botão Hamburguer */}
        <button
          className={`${styles.menuHam} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Mobile */}
        <div className={`${styles.menuMobile} ${isOpen ? styles.menuMobileOpen : ""}`}>
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.link} 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Overlay */}
        <div 
          className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`} 
          onClick={() => setIsOpen(false)} 
        />
    </motion.header>
  );
}
