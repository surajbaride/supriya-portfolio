import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Predictive Analysis of Neurological Disorders",
      duration: "Nov 2024 – Mar 2025",
      technologies: ["Python", "Pandas", "Scikit-Learn", "TensorFlow", "Matplotlib"],
      points: [
        "Developed machine learning models to analyze neurological disorder datasets with a focus on dementia detection.",
        "Performed **feature selection, correlation analysis, and hyperparameter tuning** to improve model performance.",
        "Engineered new features such as **contract type buckets and tenure bands** to enhance data segmentation and insights.",
        "Implemented advanced models including **LSTM, LightGBM, and MLP** for predictive analysis.",
        "Achieved **87% prediction accuracy**, demonstrating strong model performance and data understanding."
      ]
    },
    {
      title: "Medi-Cost Prediction Analysis",
      duration: "Aug 2025 – Sep 2025",
      technologies: ["Python", "Machine Learning", "Scikit-Learn"],
      points: [
        "Built a **regression-based machine learning model** to predict medical expenses using patient data such as age, BMI, smoking status, and region.",
        "Conducted **data cleaning, feature engineering, and exploratory data visualization** to identify key cost-driving factors.",
        "Trained and evaluated multiple regression algorithms to improve prediction accuracy.",
        "Developed a **data-driven medical cost prediction system** to support healthcare cost analysis and insights."
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Showcasing my work in AI, Machine Learning, and Data Science
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card project-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-duration">
                <strong>Duration:</strong> {project.duration}
              </p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="tech-badge"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <ul className="project-list">
                {project.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: pointIndex * 0.1 }}
                    dangerouslySetInnerHTML={{
                      __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }}
                  />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
