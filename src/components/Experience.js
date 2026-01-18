import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experience = {
    title: "AI Engineer Intern",
    company: "Spark Minda Pvt. Ltd (Hybrid)",
    date: "May 2025 – Aug 2025",
    technologies: ["Machine Learning", "Python", "Google Colab", "SQL", "Power BI", "Web Development", "JavaScript", "CSS"],
    points: [
      "Worked on a real-time industrial quality control project titled **\"Quality Controlled Trend Discovery in Key Parameters of GDC for Prevention of Rejection.\"**",
      "Designed and developed a **web-based analytical dashboard** integrating machine learning outputs with interactive visualizations to support faster decision-making.",
      "Built a **Multivariate LSTM model** to predict GDC machine breakdowns using critical parameters such as cycle time and operational metrics.",
      "Implemented **time-series ML models** for forecasting machine behavior and detecting future operational risks.",
      "Improved prediction accuracy and reliability by selecting LSTM as the best-performing model for machine parameter forecasting."
    ]
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Professional experience and industry projects
        </motion.p>

        <motion.div
          className="glass-card experience-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="experience-header">
            <div>
              <h3 className="experience-title">{experience.title}</h3>
              <p className="experience-company">{experience.company}</p>
            </div>
            <p className="experience-date">{experience.date}</p>
          </div>

          <div className="experience-tech">
            {experience.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="tech-badge"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <ul className="experience-list">
            {experience.points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                dangerouslySetInnerHTML={{
                  __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
