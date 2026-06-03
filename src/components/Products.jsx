import React from 'react';
import '../styles/Products.css';

import maracuya from '../img/maracuya.png';
import oreo from '../img/oreo.png';
import lucuma from '../img/lucuma.png';
import fresa from '../img/fresa.png';
import limon from '../img/limon.png';

const DATOS_PRODUCTOS = [
  {
    id: 1,
    nombre: "tarta de queso de maracuyá",
    descripcion: "Base de queso crema y crema de leche con zumo de maracuyá, (Base de galleta).",
    imagen: maracuya,
    precios: [
      "Pequeña (8 personas) - S/. 80",
      "Mediana (15 personas) - S/. 120",
      "Grande (25 personas) - S/. 180"
    ]
  },
  {
    id: 2,
    nombre: "Tarta de queso de Oreo",
    descripcion: "Base de queso crema y crema de leche con trozos de galleta Oreo, cubierta con ganache de chocolate. (Base galleta Oreo).",
    imagen: oreo,
    precios: [
      "Chico (4 personas) - S/. 40",
      "Mediano (6 personas) - S/. 55",
      "Grande (10 personas) - S/. 85"
    ]
  },
  {
    id: 3,
    nombre: "Tarta de queso de Lúcuma",
    descripcion: "Base de queso crema y crema de leche con pulpa de lúcuma, decorada con delicioso manjar artesanal de lúcuma.",
    imagen: lucuma,
    precios: [
      "Chico (4 personas) - S/. 40",
      "Mediano (6 - 7 personas) - S/. 60",
      "Grande (10 - 11 personas) - S/. 95"
    ]
  },
  {
    id: 4,
    nombre: "Pie de Fresa",
    descripcion: "Elaborado con pasta frolla, relleno de crema pastelera y compota de fresa, decorado con fresas frescas.",
    imagen: fresa,
    precios: [
      "Chico (4 - 6 personas) - S/. 30",
      "Mediano (6 - 8 personas) - S/. 40",
      "Grande (10 - 12 personas) - S/. 55"
    ]
  },
  {
    id: 5,
    nombre: "Pie de Limón",
    descripcion: "Pasta frolla con un relleno de crema de limón a base de leche condensada, decorada con merengue italiano.",
    imagen: limon,
    precios: [
      "Chico (4 - 5 personas) - S/. 30",
      "Mediano (6 - 7 personas) - S/. 40",
      "Grande (10 - 11 personas) - S/. 60"
    ]
  }
];

const Products = () => {
  return (
    <section id="productos" className="productos-section">
      <div className="seccion-header">
        <span className="seccion-label">Lo que ofrecemos</span>
        <h2>Dulces que <em>enamoran</em></h2>
      </div>

      <div className="productos-grid">
        {DATOS_PRODUCTOS.map((producto) => (
          <article className="producto-card" key={producto.id}>
            
            <div className="producto-img-container">
              <img src={producto.imagen} alt={producto.nombre} />
            </div>

            <div className="producto-body">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              
              <div className="lista-precios">
                {producto.precios.map((precio, index) => (
                  <div key={index} className="precio-item">
                    {precio}
                  </div>
                ))}
              </div>

              <div className="producto-footer">
                <a href="#contacto" className="btn-pedir">Pedir</a>
              </div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;