import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <span className="eyebrow">Pastelería artesanal · Lima, Perú</span>
      <h1>
        Cada dulce y sabor,<br />
        tiene una <em>historia.</em>
      </h1>
      <p>
        Aquí encontrarás postres artesanales, elaborados con amor y dedicación bocaditos, tortas, postres y más.
      </p>
      <div className="hero-botones">
        <a href="#productos" className="btn btn-primary">Ver productos</a>
        <a href="#contacto" className="btn btn-ghost">Hacer un pedido</a>
      </div>
    </section>
  );
};

export default Hero;