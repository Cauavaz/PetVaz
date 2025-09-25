import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaUserMd, FaClock } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const sections = [
    {
      id: 1,
      title: "Amor e Cuidado em Cada Detalhe",
      description: "Há mais de 15 anos cuidando dos pets com o carinho que eles merecem. Nossa equipe trata cada animal como se fosse da família, garantindo bem-estar e felicidade em todos os momentos.",
      icon: FaHeart,
      imageUrl: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      stats: [
        { number: "15+", label: "Anos de Experiência" },
        { number: "5000+", label: "Pets Atendidos" }
      ]
    },
    {
      id: 2,
      title: "Segurança e Profissionalismo",
      description: "Ambiente totalmente seguro e higienizado, com protocolos rigorosos de limpeza. Nossos profissionais são certificados e passam por treinamentos constantes para oferecer o melhor atendimento.",
      icon: FaShieldAlt,
      imageUrl: "https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg",
      stats: [
        { number: "100%", label: "Ambiente Seguro" },
        { number: "24/7", label: "Monitoramento" }
      ]
    },
    {
      id: 3,
      title: "Equipe Veterinária Especializada",
      description: "Contamos com veterinários especializados em diferentes áreas, garantindo cuidados completos para seu pet. Desde consultas de rotina até emergências, estamos sempre prontos.",
      icon: FaUserMd,
      imageUrl: "https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg",
      stats: [
        { number: "10+", label: "Veterinários" },
        { number: "98%", label: "Satisfação" }
      ]
    },
    {
      id: 4,
      title: "Disponibilidade Total",
      description: "Funcionamos todos os dias da semana com horários flexíveis. Emergências? Temos plantão 24h. Seu pet nunca ficará desamparado quando precisar de cuidados especiais.",
      icon: FaClock,
      imageUrl: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
      stats: [
        { number: "7", label: "Dias por Semana" },
        { number: "24h", label: "Emergências" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gallery" className="gallery">
      <motion.div 
        className="gallery-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="gallery-header" variants={itemVariants}>
          <h2 className="section-title">Por Que Somos Únicos</h2>
          <p className="section-subtitle">
            Descubra o que nos torna a melhor escolha para cuidar do seu melhor amigo
          </p>
        </motion.div>

        <div className="gallery-sections">
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              className={`gallery-section ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
              variants={itemVariants}
            >
              <div className="section-image">
                <motion.div 
                  className="image-container"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={section.imageUrl} alt={section.title} />
                  <div className="image-overlay">
                    <section.icon className="section-icon" />
                  </div>
                </motion.div>
              </div>

              <div className="section-content">
                <motion.div 
                  className="content-wrapper"
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="icon-wrapper">
                    <section.icon className="content-icon" />
                  </div>
                  
                  <h3 className="section-title-text">{section.title}</h3>
                  <p className="section-description">{section.description}</p>
                  
                  <div className="section-stats">
                    {section.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="stat-item">
                        <span className="stat-number">{stat.number}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      
      </motion.div>
    </section>
  );
};

export default Gallery;