import logo from '../img/logo.png'
import '../styles/indexs.css'

function Index() {
  return (
    <>
      {/* Barra de menú */}
      <nav className="barra-menu">
        <div className="logo">
          <img src={logo} alt="Sweet Kellove logo" />
          <span>Sweet Kellove</span>
        </div>
        <div className="opciones-menu">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#sobre_nosotros">Sobre nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="contenido">

        {/* ── INICIO / HERO ── */}
        <section id="inicio">
          <span className="eyebrow">Pastelería artesanal · Lima, Perú</span>
          <h1>
            Cada dulce,<br />
            una <em>historia</em>
          </h1>
          <p>
            Creamos pasteles y postres únicos, hechos con amor y los mejores
            ingredientes para hacer de cada ocasión un momento inolvidable.
          </p>
          <div className="hero-botones">
            <a href="#productos" className="btn btn-primary">Ver productos</a>
            <a href="#contacto" className="btn btn-ghost">Hacer un pedido</a>
          </div>
        </section>

        {/* ── PRODUCTOS ── */}
        <section id="productos">
          <div className="seccion-header">
            <span className="seccion-label">Lo que ofrecemos</span>
            <h2>Dulces que <em>enamoran</em></h2>
          </div>

          <div className="productos-grid">
            {/* Tarjeta 1 */}
            <article className="producto-card">
              <div className="producto-img" style={{ background: 'linear-gradient(135deg, #f0dede, #d4a5a5)' }}>
                🎂
                <span className="producto-badge">Popular</span>
              </div>
              <div className="producto-body">
                <h3>Torta personalizada</h3>
                <p>Diseña tu pastel de ensueño con los sabores y decoraciones que más te gusten. Ideal para cumpleaños y celebraciones.</p>
                <div className="producto-footer">
                  <div className="producto-precio">
                    S/. 80
                    <span>precio base</span>
                  </div>
                  <a href="#contacto" className="btn-pedir">Pedir</a>
                </div>
              </div>
            </article>

            {/* Tarjeta 2 */}
            <article className="producto-card">
              <div className="producto-img" style={{ background: 'linear-gradient(135deg, #faf6f0, #faeeda)' }}>
                🧁
              </div>
              <div className="producto-body">
                <h3>Cupcakes artesanales</h3>
                <p>Esponjosos cupcakes con crema batida, rellenos de frutas y decoraciones únicas. Disponibles por docena o media docena.</p>
                <div className="producto-footer">
                  <div className="producto-precio">
                    S/. 5
                    <span>por unidad</span>
                  </div>
                  <a href="#contacto" className="btn-pedir">Pedir</a>
                </div>
              </div>
            </article>

            {/* Tarjeta 3 */}
            <article className="producto-card">
              <div className="producto-img" style={{ background: 'linear-gradient(135deg, #f5ede0, #e5d4bc)' }}>
                🍰
                <span className="producto-badge">Temporada</span>
              </div>
              <div className="producto-body">
                <h3>Cheesecake premium</h3>
                <p>Cremoso cheesecake con base de galleta y topping de frutas frescas de temporada. Sin conservantes artificiales.</p>
                <div className="producto-footer">
                  <div className="producto-precio">
                    S/. 45
                    <span>porción familiar</span>
                  </div>
                  <a href="#contacto" className="btn-pedir">Pedir</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── SOBRE NOSOTROS ── */}
        <section id="sobre_nosotros">
          <div className="sobre-grid">
            <div className="sobre-visual">🫶</div>
            <div className="sobre-texto">
              <span className="seccion-label">Nuestra historia</span>
              <h2>Hechos con amor,<br />desde Lima <em>para ti</em></h2>
              <p>
                Somos una pastelería artesanal nacida de la pasión por la repostería creativa.
                Todo comenzó en una cocina familiar, con recetas transmitidas de generación en generación.
              </p>
              <p>
                Usamos ingredientes frescos y de primera calidad, sin conservantes artificiales,
                porque creemos que lo más rico siempre viene de lo más natural.
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

        {/* ── CONTACTO ── */}
        <section id="contacto">
          <div className="seccion-header">
            <span className="seccion-label">Escríbenos</span>
            <h2>¿Tienes un pedido <em>especial</em>?</h2>
          </div>

          <div className="contacto-grid">
            {/* Info de contacto */}
            <div className="contacto-info">
              <h3>Estamos aquí para ti</h3>
              <p>
                Cuéntanos sobre tu ocasión especial y con gusto te ayudamos a crear
                el dulce perfecto. Respondemos en menos de 24 horas.
              </p>
              <div className="contacto-item">
                <div className="contacto-icon">📍</div>
                <span>Lima, Perú</span>
              </div>
              <div className="contacto-item">
                <div className="contacto-icon">💬</div>
                <span>+51 999 999 999 (WhatsApp)</span>
              </div>
              <div className="contacto-item">
                <div className="contacto-icon">✉️</div>
                <span>hola@sweetkellove.pe</span>
              </div>
              <div className="contacto-item">
                <div className="contacto-icon">📸</div>
                <span>@sweetkellove</span>
              </div>
            </div>

            {/* Formulario */}
            <form className="formulario" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid-2">
                <div className="form-row">
                  <label>Nombre</label>
                  <input type="text" placeholder="Tu nombre" />
                </div>
                <div className="form-row">
                  <label>WhatsApp / Correo</label>
                  <input type="text" placeholder="Para responderte" />
                </div>
              </div>
              <div className="form-row">
                <label>Tipo de pedido</label>
                <select>
                  <option value="">Selecciona una opción...</option>
                  <option>Torta personalizada</option>
                  <option>Cupcakes</option>
                  <option>Cheesecake</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="form-row">
                <label>Cuéntanos tu pedido</label>
                <textarea placeholder="Ocasión, fecha, cantidad, sabor, decoración..." />
              </div>
              <button type="submit" className="btn-form">Enviar pedido →</button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Sweet Kellove</h3>
            <p>Pastelería artesanal hecha con amor en Lima, Perú. Creamos momentos dulces e inolvidables para cada ocasión especial.</p>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <a href="#inicio">Inicio</a>
            <a href="#productos">Productos</a>
            <a href="#sobre_nosotros">Sobre nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-col">
            <h4>Síguenos</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sweet Kellove · Todos los derechos reservados</span>
          <span>Hecho con 🍰 en Lima</span>
        </div>
      </footer>
    </>
  )
}

export default Index