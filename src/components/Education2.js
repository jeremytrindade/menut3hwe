import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Education.css'; // Import the updated CSS file
import image12 from '../Assets/image12-2.png';
import image13 from '../Assets/image13-3.png';


const Education = () => {
    const [imageData, setImageData] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const data = [
            { url: image12, text: 'From EU', path: '/education/from-eu' },
            { url: image13, text: 'Not From EU', path: '/education/not-from-eu' },
        ];

        setImageData(data);
    }, []);

    const handleImageClick = (path) => {
        navigate(path);
    };

    return (
        <div>
            <div className="education-image-container">
    {imageData.map((item, index) => (
        <div className="education-image-box" key={index} onClick={() => handleImageClick(item.path)}>
            <img src={item.url} alt={`Fetched img ${index}`} />
            <div className="overlay-layer"></div> {/* Camada escura de sobreposição */}
            <div className="overlay-text">{item.text}</div>
        </div>
    ))}
</div>
        </div>
    );
};

export default Education;