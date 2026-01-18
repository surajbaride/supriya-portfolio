import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get to know more about my background and passion for AI & Data Science
        </motion.p>

        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content">
            <p>
              I am a Computer Science Engineering student with strong practical exposure to{' '}
              <strong>Machine Learning, Deep Learning, SQL, and Data Visualization</strong> through academic and industry projects. My work focuses on building predictive models, time-series forecasting systems, and intelligent dashboards that support real-world decision-making.
            </p>
            <br />
            <p>
              I have experience working on <strong>real-time industrial data</strong>, applying advanced ML techniques like <strong>LSTM models</strong> to detect anomalies and predict machine behavior. I enjoy collaborating in team environments, continuously learning new technologies, and contributing to impactful AI-driven solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
