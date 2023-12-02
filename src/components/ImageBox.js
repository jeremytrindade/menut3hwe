// ImageBox.js
import React from 'react';

const ImageBox = ({ url, text, onImageClick }) => {
  return (
    <div className="image-box" onClick={onImageClick}>
      <img src={url} alt={text} />
      <div className="overlay-layer"></div>
      <div className="overlay-text">{text}</div>
    </div>
  );
};

export default ImageBox;