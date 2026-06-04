import '../styles/Nosotros.css'
import { useState, useEffect } from 'react'

import foto1 from '../img/fresa.png'
import foto2 from '../img/lemon.png'
import foto3 from '../img/maracuya.png'

function Nosotros() {
  const imagenes = [foto1, foto2, foto3]

  const [imagenActual, setImagenActual] = useState(0)

  // Cambio automático cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenes.length)
    }, 4000)

    return () => clearInterval(intervalo)
  }, [])

  const siguiente = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length)
  }

  const anterior = () => {
    setImagenActual((prev) =>
      (prev - 1 + imagenes.length) % imagenes.length
    )
  }

  return (
    <section id="sobre_nosotros">
      <div className="sobre-grid">

        {/* Carrusel */}
        <div className="sobre-visual">

          <button
            className="btn-carrusel izquierda"
            onClick={anterior}
          >
            ❮
          </button>

          <img
            src={imagenes[imagenActual]}
            alt="Sweet Kellove"
            className="sobre-imagen"
          />

          <button
            className="btn-carrusel derecha"
            onClick={siguiente}
          >
            ❯
          </button>

          {/* Indicadores */}
          <div className="indicadores">
            {imagenes.map((_, index) => (
              <span
                key={index}
                className={`indicador ${
                  index === imagenActual ? 'activo' : ''
                }`}
                onClick={() => setImagenActual(index)}
              />
            ))}
          </div>

        </div>

        {/* Texto */}
        <div className="sobre-texto">
          <span className="seccion-label">
            Nuestra historia
          </span>

          <h2>
            Hechos con amor,
            <br />
            <em>para ti</em>
          </h2>

          <p>
            Somos una pastelería artesanal nacida de la pasión por la
            repostería creativa. Todo comenzó en una cocina familiar,
            con recetas transmitidas de generación en generación.
          </p>

          <p>
            Usamos ingredientes frescos y de primera calidad, sin
            conservantes artificiales, porque creemos que lo más rico
            siempre viene de lo más natural.
          </p>

          <div className="stats-fila">

            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-lbl">Clientes felices</span>
            </div>

            <div className="stat-item">
              <span className="stat-num">3 años</span>
              <span className="stat-lbl">De experiencia</span>
            </div>

            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">Artesanal</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Nosotros