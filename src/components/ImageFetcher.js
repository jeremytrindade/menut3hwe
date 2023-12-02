// ImageFetcher.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageBox from './ImageBox';
import Navbar from "./Navbar";

import image4 from '../Assets/image4.png';
import image5 from '../Assets/image5.png';
import image6 from '../Assets/image6.png';
import image7 from '../Assets/image7.png';
import image11 from '../Assets/image11.png';

const menuAndImageData = [
  {
    text: "Education",
    link: "/education",
    imageUrl: image4
  },
  {
    text: "Work - Tdental",
    link: "/work",
    imageUrl: image5
  },
  {
    text: "Health - RDV Medical",
    link: "/health",
    imageUrl: image6
  },
  {
    text: "Bac",
    link: "/bac",
    imageUrl: image7
  },
  {
    text: "Nif",
    link: "/nif",
    imageUrl: image11
  },
];

const ImageFetcher = () => {
  const [imageData, setImageData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setImageData(menuAndImageData);
  }, []);

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Navbar menuOptions={menuAndImageData} />
      <div className="image-container">
        {imageData.map((item, index) => (
          <ImageBox 
            key={index} 
            url={item.imageUrl} 
            text={item.text} 
            onImageClick={() => handleImageClick(item.link)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ImageFetcher;
