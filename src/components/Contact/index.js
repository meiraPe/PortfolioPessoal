"use client"

import { motion } from "framer-motion"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import styles from "./Contact.module.css"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await emailjs.send(
        "pedro_meira_portfolio",  
        "template_4imt7bj",  
        form,
        "2jKvlNLWHAPdc5MSh"       
      )
      console.log(result)
      alert("Mensagem enviada com sucesso!")
      setForm({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      console.error(err)
      alert("Erro ao enviar a mensagem")
    }

    setLoading(false)
  }

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
            <p><FaPhoneAlt /> (12) 99734-1365</p>
            <p><FaEnvelope /> phsantosmeira.07@gmail.com </p>
            <p><FaMapMarkerAlt /> Caraguatatuba, São Paulo - Brasil</p>


            {/* Mapa */}
            <motion.div 
              className={styles.map} initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} > 
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3126.3974210979924!2d-45.320226589453426!3d-23.576847230566713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1693000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="180" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe> 
            </motion.div>
          </div>

          {/* Formulário */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Seu nome" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Seu email" value={form.email} onChange={handleChange} required />
            <input name="phone" type="tel" placeholder="Seu telefone" value={form.phone} onChange={handleChange} />
            <textarea name="message" placeholder="Escreva sua mensagem..." rows="5" value={form.message} onChange={handleChange} required />
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
