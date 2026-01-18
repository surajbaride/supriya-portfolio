import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="glass-card education-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="education-title">
            Bachelor of Technology (B.Tech) – Computer Science & Engineering
          </h3>
          <p className="education-institution">
            Pimpri Chinchwad College of Engineering, Pune
          </p>
          <p className="education-details">
            <strong>Graduation Year:</strong> 2026
          </p>
          <p className="education-details">
            <strong>CGPA:</strong> 6.94 / 10
          </p>
          <p className="education-description">
            Focused on core computer science concepts with specialization in{' '}
            <strong>Artificial Intelligence, Machine Learning, Data Science, and Database Systems</strong>, supported by hands-on academic projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
