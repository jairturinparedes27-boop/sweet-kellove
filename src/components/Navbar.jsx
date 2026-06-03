import React from 'react';
import '../styles/Navbar.css';
import logo from '../img/logo.png'; 

const Navbar = ({ menuAbierto, setMenuAbierto }) => {

  const navMenu = [
    { name: 'Inicio', url: '#inicio' },
    { name: 'Productos', url: '#productos' },
    { name: 'Sobre nosotros', url: '#sobre_nosotros' },
    { name: 'Contacto', url: '#contacto' }
  ];

  return (
    <nav className="navbar">
      {/* Navbar lado izquierdo */}
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Sweet Kellove logo" />
          <span>Sweet Kellove</span>
        </div>
      
      {/*Botón desplegable del menú*/}
        <button
          className="hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>
      </div>

      {/* Navbar lado derecho */}
      <div className={`navbar-right ${menuAbierto ? 'activo' : ''}`}>
        {navMenu.map((enlace, index) => (
          <a 
            key={index} 
            href={enlace.url} 
            className="nav-url"
            onClick={() => setMenuAbierto(false)}
          >
            {enlace.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;