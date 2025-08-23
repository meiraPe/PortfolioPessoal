"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import styles from "./Skills.module.css";

export default function Skills() {
  const skills = [
    { name: "HTML5", level: 90, icon: <FaHtml5 /> },
    { name: "CSS3", level: 85, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 80, icon: <FaJs /> },
    { name: "React", level: 75, icon: <FaReact /> },
    { name: "React Native", level: 70, icon: <FaReact /> },
    { name: "Node.js", level: 65, icon: <FaNodeJs /> },
  ];

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.title}>Habilidades</h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => {
          const radius = 45;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (circumference * skill.level) / 100;

          return (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}   
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ amount: 0.6 }}
            >
              <motion.svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className={styles.svg}
              >
                <circle
                  className={styles.bgCircle}
                  cx="60"
                  cy="60"
                  r={radius}
                  strokeWidth="10"
                />
                <motion.circle
                  className={styles.progressCircle}
                  cx="60"
                  cy="60"
                  r={radius}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: offset }}  
                  viewport={{ amount: 0.6 }}                  
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <motion.text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className={styles.percentage}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ amount: 0.6 }}
                >
                  {skill.level}%
                </motion.text>
              </motion.svg>

              <div className={styles.info}>
                <p className={styles.skillName}>{skill.name}</p>
                <div className={styles.icon}>{skill.icon}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
