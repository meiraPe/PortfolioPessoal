"use client"

import { motion } from "framer-motion";
import { useState } from "react"
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Sobre", href: "#about" },
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
      <div className={styles.logo}>Pedro<span>Meira</span></div>
      <nav>
        <ul className={styles.nav}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

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
            <Link href="#about" className={styles.link} onClick={() => setIsOpen(false)}>Sobre</Link>
            <Link href="#projects" className={styles.link} onClick={() => setIsOpen(false)}>Projetos</Link>
            <Link href="#contact" className={styles.link} onClick={() => setIsOpen(false)}>Contato</Link>
          </div>

      </nav>
    </motion.header>
  );
}
