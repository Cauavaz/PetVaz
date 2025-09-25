import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: "Golden Retriever", category: "Banho e Tosa" },
    { id: 2, title: "Poodle", category: "Estética" },
    { id: 3, title: "Labrador", category: "Veterinário" },
    { id: 4, title: "Bulldog", category: "Hospedagem" },
    { id: 5, title: "Border Collie", category: "Adestramento" },
    { id: 6, title: "Shih Tzu", category: "Cuidados" },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="section-title">Nossa Galeria</h2>
          <p className="section-subtitle">
            Veja alguns dos nossos trabalhos e momentos especiais com os pets
          </p>
        </div>
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
              <div className="image-placeholder">
                <div className="image-content">
                  <h4>{image.title}</h4>
                  <span className="image-category">{image.category}</span>
                </div>
                <div className="image-overlay"><span>Clique para ampliar</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <div className="modal-image">
              <div className="modal-placeholder">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;