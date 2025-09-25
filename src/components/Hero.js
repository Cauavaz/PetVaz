import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Seu Melhor Amigo <br /> Merece o Melhor Cuidado
          </h1>
          <p className="hero-subtitle">
            Oferecemos serviços completos para o bem-estar do seu cachorro, 
            com amor, carinho e profissionalismo que eles merecem.
          </p>
          <div className="hero-buttons">
    
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              Entre em Contato
            </button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image">
            {/* A imagem de fundo será definida no CSS */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;