import React from 'react';
import './imageModal.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={image} alt="Selected" />
    </div>
  );
};

export default ImageModal;
