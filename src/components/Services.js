import React from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaBath, FaStethoscope, FaHotel, FaRunning, FaHeart } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const services = [
    {
      icon: FaCut,
      title: "Tosa e Estética",
      description: "Cortes personalizados, tosa higiênica e cuidados estéticos para deixar seu pet sempre bonito.",
      price: "A partir de R$ 40"
    },
    {
      icon: FaBath,
      title: "Banho Completo",
      description: "Banho com produtos de qualidade, secagem e perfumação para manter seu pet limpo e cheiroso.",
      price: "A partir de R$ 25"
    },
    {
      icon: FaStethoscope,
      title: "Consulta Veterinária",
      description: "Atendimento veterinário completo com profissionais qualificados para cuidar da saúde do seu pet.",
      price: "A partir de R$ 80"
    },
    {
      icon: FaHotel,
      title: "Hotel para Pets",
      description: "Hospedagem segura e confortável para quando você precisar viajar e não puder levar seu pet.",
      price: "A partir de R$ 60/dia"
    },
    {
      icon: FaRunning,
      title: "Adestramento",
      description: "Treinamento comportamental e obediência básica para melhorar a convivência com seu pet.",
      price: "A partir de R$ 100"
    },
    {
      icon: FaHeart,
      title: "Cuidados Especiais",
      description: "Atendimento especializado para pets idosos, com necessidades especiais ou em recuperação.",
      price: "Consulte valores"
    }
  ];

  return (
    <section id="services" className="services">
      <motion.div 
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="services-header" variants={itemVariants}>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos uma gama completa de serviços para cuidar do seu melhor amigo
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <motion.button 
                className="service-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          variants={itemVariants}
        >
          <h3>Precisa de algo específico?</h3>
          <p>Entre em contato conosco para serviços personalizados</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale Conosco
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
