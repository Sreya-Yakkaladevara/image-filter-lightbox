import React, { useState } from 'react';
import './ImageGallery.css';
import ImageModal from './imageModal';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];


const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Gallery ${index}`} 
            onClick={() => openModal(image)}
            className="gallery-item"
          />
        ))}
      </div>
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;
