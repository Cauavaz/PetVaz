import React, { useState, useEffect } from 'react';
import './WordCarousel.css';

const WordCarousel = () => {
  const words = [
    { text: 'AMOR', color: '#ff6b6b', shadow: '#ff4757' },
    { text: 'CUIDADO', color: '#4ecdc4', shadow: '#00d2d3' },
    { text: 'CARINHO', color: '#45b7d1', shadow: '#3742fa' },
    { text: 'PROTEÇÃO', color: '#96ceb4', shadow: '#55a3ff' },
    { text: 'FELICIDADE', color: '#feca57', shadow: '#ff9ff3' },
    { text: 'SAÚDE', color: '#ff9ff3', shadow: '#54a0ff' },
    { text: 'DIVERSÃO', color: '#5f27cd', shadow: '#00d2d3' },
    { text: 'CONFIANÇA', color: '#00d2d3', shadow: '#ff6348' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="word-carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <h2 className="carousel-title">O que oferecemos para seu pet</h2>
          <p className="carousel-subtitle">
            Cada palavra representa nosso compromisso com o bem-estar do seu melhor amigo
          </p>
        </div>
        
        <div className="carousel-wrapper">
          <div className="floating-elements">
            <div className="float-element float-1">🐕</div>
            <div className="float-element float-2">🦴</div>
            <div className="float-element float-3">❤️</div>
            <div className="float-element float-4">🎾</div>
          </div>
          
          <div className="word-display">
            <div 
              className={`main-word ${isAnimating ? 'animating' : ''}`}
              style={{
                '--word-color': words[currentIndex].color,
                '--word-shadow': words[currentIndex].shadow
              }}
            >
              {words[currentIndex].text}
            </div>
            
            <div className="word-reflection">
              {words[currentIndex].text}
            </div>
          </div>
          
          <div className="carousel-indicators">
            {words.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                style={{
                  '--indicator-color': words[index].color
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordCarousel;
