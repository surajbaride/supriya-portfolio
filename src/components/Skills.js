import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Programming & Querying": ["Python", "C++", "HTML", "CSS"],
    "Tools": ["Power BI", "MS Excel", "Git & GitHub", "VS Code", "Jupyter Notebook"],
    "Technologies": ["SQL & Databases", "Artificial Intelligence & Machine Learning", "Data Science", "Cloud Computing", "Agile Methodologies"],
    "Soft Skills": ["Problem Solving", "Logical Thinking", "Team Collaboration", "Communication Skills"]
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technical expertise and professional capabilities
        </motion.p>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className="glass-card skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skills-list">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
