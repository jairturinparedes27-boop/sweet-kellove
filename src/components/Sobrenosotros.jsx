import '../styles/Sobrenosotros.css'

function SobreNosotros() {
  return (
    <section id="sobre_nosotros">
      <div className="sobre-grid">

        <div className="sobre-visual">
          🫶
        </div>

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

export default Sobrenosotros