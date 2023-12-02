import React from 'react';
import Logo from '../Assets/TLogoWhite.png'; // Adjust the path according to your file structure

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="T3HWE Logo" className="logo" />
            <span className="header-text">T3HWE - Trindade’s Health, Work and Education</span>
        </div>
    );
};

export default Header;
