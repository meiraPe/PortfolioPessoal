"use client"

import { motion } from "framer-motion"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        Contato
      </motion.h2>
      
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.wrapper}>
          
          {/* Infos */}
          <div className={styles.info}>
            <p><FaPhoneAlt/> (12) 99734-1365</p>
            <p><FaEnvelope/> phsantosmeira.07@gmail.com </p>
            <p><FaMapMarkerAlt/> Caraguatatuba, São Paulo - Brasil</p>

            {/* Mapa dentro da coluna esquerda */}
            <motion.div 
              className={styles.map}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3126.3974210979924!2d-45.320226589453426!3d-23.576847230566713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1693000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Formulário */}
          <form className={styles.form}>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu email" required />
            <input type="tel" placeholder="Seu telefone" />
            <textarea placeholder="Escreva sua mensagem..." rows="5" required />
            <motion.button 
              whileTap={{ scale: 0.95 }} 
              whileHover={{ scale: 1.05 }}
              type="submit"
            >
              Enviar
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
