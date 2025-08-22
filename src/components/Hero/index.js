"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Olá, eu sou Pedro Meira!";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section id='hero'
      className={styles.hero}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className={styles.typing}>{displayText}</span>
        <span className={styles.cursor}>|</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Futuro Dev Web Frontend/Fullstack, sempre codando projetos modernos e aprendendo algo novo a cada dia.
      </motion.p>

      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "mirror" }}
      >
        ↓
      </motion.div>
    </motion.section>
  );
}
