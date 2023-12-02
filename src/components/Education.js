// ImageFetcher.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageBox from './ImageBox';
import Navbar from "./Navbar";

import image12 from '../Assets/image12-2.png';
import image13 from '../Assets/image13-3.png';


const menuAndImageData = [
  {
    text: "From EU",
    link: "/education/from-eu",
    imageUrl: image12
  },
  {
    text: "Not From EU",
    link: "/education/not-from-eu",
    imageUrl: image13
  },
];

const Education = () => {
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

export default Education;