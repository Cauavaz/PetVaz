import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { icon: "🐕", number: "500+", label: "Pets Atendidos" },
    { icon: "👨‍⚕️", number: "15+", label: "Anos de Experiência" },
    { icon: "🕒", number: "24/7", label: "Suporte" },
    { icon: "⭐", number: "4.9", label: "Avaliação" }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Dedicados ao bem-estar e felicidade do seu melhor amigo
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Nossa Missão</h3>
            <p>
              Na PetVaz, acreditamos que cada cachorro merece amor, cuidado e atenção especial. 
              Nossa equipe de profissionais qualificados está comprometida em proporcionar 
              os melhores serviços para seu pet, garantindo sua saúde, felicidade e bem-estar.
            </p>
            
            <h3>Por que nos escolher?</h3>
            <ul className="benefits-list">
              <li>Profissionais certificados e experientes</li>
              <li>Ambiente seguro e acolhedor</li>
              <li>Equipamentos modernos e seguros</li>
              <li>Atendimento personalizado para cada pet</li>
              <li>Preços justos e transparentes</li>
            </ul>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon" role="img" aria-label="icon">{stat.icon}</span>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
