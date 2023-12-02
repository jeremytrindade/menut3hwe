import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Logo from '../Assets/TLogoWhite.png';
import { HiMenu } from "react-icons/hi";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { QRCodeCanvas } from 'qrcode.react';
import './Navbar.css';

const Navbar = ({ menuOptions }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getSectionFromPath = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      // Pega apenas o primeiro segmento após a barra
      return ` (Section ${capitalizeFirstLetter(pathSegments[0])})`;
    }
    return '';
  };

  const section = getSectionFromPath();
  const headerText = windowWidth < 608 
    ? "T3HWE" 
    : `T3HWE - Trindade’s Health, Work and Education${section}`;

    return (
        <header className="header">
          <QRCodeCanvas value={window.location.href} size={50} fgColor="#ffffff" bgColor="transparent" />
          <a href="/" className="t3hwe">
            <img src={Logo} alt="T3HWE Logo" className="logo" />
            <span className="header-text">{headerText}</span>
          </a>
          <nav className="navbar">
            <div className="navbar-links-container">
              {menuOptions.map((option, index) => (
                <a key={index} href={option.link} className="navbar-link">
                  {option.text}
                </a>
              ))}
            </div>
            <div className="navbar-menu-container">
              <HiMenu onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
              <List>
                {menuOptions.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton component="a" href={item.link}>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </nav>
        </header>
      );
    };
    
    export default Navbar;