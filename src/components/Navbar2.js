// Navbar.js
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; // Importando useLocation
import Logo from '../Assets/TLogoWhite.png'; // Caminho do logo
import { HiMenu } from "react-icons/hi";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { QRCodeCanvas } from 'qrcode.react';
import './Navbar.css'; // Importando o CSS para o componente


// Seu componente Navbar aqui

const Navbar = ({ menuOptions }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation(); // Hook para obter o caminho atual
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const getSectionFromPath = () => {
    const path = location.pathname; // Obtém o caminho atual
    const pathSegments = path.split('/').filter(Boolean); // Divide o caminho em segmentos e remove strings vazias

    // Retorna os segmentos após o primeiro
    return pathSegments.slice(1).join('/');
  };

  const section = getSectionFromPath();
  const headerText = windowWidth < 608 
    ? "T3HWE" 
    : `T3HWE - Trindade’s Health, Work and Education${section ? ` (Section ${section})` : ''}`;


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
            <a key={index} href={option.link}>{option.text}</a>
          ))}
        </div>
        <div className="navbar-menu-container">
          <HiMenu onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
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