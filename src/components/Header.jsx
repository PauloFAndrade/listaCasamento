// src/components/Header.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faUsers, faChurch, faGlassCheers, faGift, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow">
      <div className="mx-auto px-4 py-4 flex justify-center items-center">
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="menu-item font-semibold">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
          <a href="#o-casal" className="menu-item font-semibold">
            <FontAwesomeIcon icon={faHeart} /> O casal
          </a>
          <a href="#padrinhos" className="menu-item font-semibold">
            <FontAwesomeIcon icon={faUsers} /> Padrinhos
          </a>
          <a href="#cerimonia" className="menu-item font-semibold">
            <FontAwesomeIcon icon={faChurch} /> Cerimônia
          </a>
          <a href="#recepcao" className="menu-item font-semibold">
            <FontAwesomeIcon icon={faGlassCheers} /> Recepção
          </a>
          <a href="#lista-de-presentes" className="menu-item font-semibold">
            <FontAwesomeIcon icon={faGift} /> Lista de Presentes
          </a>
        </nav>
        {/*
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
        */}
      </div>
    </header>
  );
};

export default Header;