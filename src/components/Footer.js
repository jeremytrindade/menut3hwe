import React from 'react';

const Footer = () => {
  // Captura o URL atual
  const currentUrl = window.location.href;

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/mentionslegales">Mentions légales</a> - 
        <a href="/cgu">CGU</a> - 
        <a href="/politiquedeconfidentialite">Politique de confidentialité</a>-
      <span> Email : <a href={`mailto:info@t3hwe.com?subject=T3HWE - ${encodeURIComponent(currentUrl)}`}>info@t3hwe.com</a></span><br/>
      </div>
    </footer>
  );
};

export default Footer;