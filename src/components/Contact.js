import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para cuidar do seu melhor amigo. Fale conosco!
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>E-mail:</strong> contato@petvaz.com.br</p>
            <p><strong>Endereço:</strong> Rua dos Pets, 123 - São Paulo, SP</p>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Envie sua Mensagem</h3>
              <div className="form-group">
                <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Sua mensagem" rows="5" value={formData.message} onChange={handleInputChange} required></textarea>
              </div>
              <button type="submit" className="submit-button">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;