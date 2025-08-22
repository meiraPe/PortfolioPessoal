"use client"

import { motion } from "framer-motion";
import styles from "./Header.module.css";

export default function Header() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

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
      </nav>
    </motion.header>
  );
}
