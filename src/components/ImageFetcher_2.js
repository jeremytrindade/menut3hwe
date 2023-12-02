import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image2 from '../Assets/image2.png';
import image4 from '../Assets/image4.png';
import image5 from '../Assets/image5.png';
import image6 from '../Assets/image6.png';
import image7 from '../Assets/image7.png';
import image11 from '../Assets/image11.png';
import Logo from '../Assets/TLogoWhite.png'; // Adjust the path according to your file structure
// import './ImageFetcher.css'; // Importa o arquivo CSS

import Navbar from "./Navbar";

const menuOptions =  [
    {
      text: "Education",
      link: "/education"
    },
    {
      text: "Work - Tdental",
      link: "/work"
    },
    {
      text: "Health - RDV Medical",
      link: "/health"
    },
    {
      text: "Bac",
      link: "/bac"
    },
    {
      text: "Nif",
      link: "/nif"
    },
  ];

const ImageFetcher = () => {
    const [imageData, setImageData] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const data = [
            { url: image4, text: 'Education', path: '/education' },
            { url: image5, text: 'Work - Tdental', path: '/work' },
            { url: image6, text: 'Health - RDV Medical', path: '/health' },
            { url: image7, text: 'Bac', path: '/bac' },
            { url: image11, text: 'Nif', path: '/nif' }
        ];

        setImageData(data);
    }, []);

    const handleImageClick = (path) => {
        navigate(path);
    };

    return (
        <div>
            
        <Navbar menuOptions={menuOptions} />
            <div className="image-container">
                {imageData.map((item, index) => (
                    <div className="image-box" key={index} onClick={() => handleImageClick(item.path)}>
                        <img src={item.url} alt={`Fetched img ${index}`} />
                        <div className="overlay-layer"></div> {/* Camada escura de sobreposição */}
                        <div className="overlay-text">{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
      );
};

export default ImageFetcher;