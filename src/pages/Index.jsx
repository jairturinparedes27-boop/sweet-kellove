import logo from '../img/logo.png'
import '../styles/indexs.css'
import { useState } from 'react';

import ubicacionImg from '../img/ubicacion.png'
import whatsappImg from '../img/whatsapp.png'
import gmailImg from '../img/gmail.png'
import tiktokImg from '../img/tiktok.png'
import maracuya from '../img/maracuya.png'
import oreo from '../img/oreo.png'
import lucuma from '../img/lucuma.png'
import fresa from '../img/fresa.png'
import limon from '../img/limon.png'
import lemonCurd from '../img/lemon.png'
import instagramImg from '../img/instaa.png'
import facebookImg from '../img/faceboo.png'
import tiktokImg2 from '../img/tiktooo.png'
import whatsappImg2 from '../img/whasaa.png'

function Index() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  return (
    
    <>
      {/* Barra de menú */}
      <nav className="barra-menu">
      <div className="logo">
        <img src={logo} alt="Sweet Kellove logo" />
        <span>Sweet Kellove</span>
      </div>

      <button
        className="hamburguesa"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <div className={`opciones-menu ${menuAbierto ? 'activo' : ''}`}>
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
            Cada dulce y sabor,<br />
            tiene una <em>historia</em>
          </h1>
          <p>
             Aquí encontrarás postres artesanales, elaborados con amor y dedicación bocaditos, tortas, postres y más.
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
              <div className="producto-img">
                <img src={maracuya} alt="Torta personalizada" />
                <span className="producto-badge">Popular</span>
              </div>
              <div className="producto-body">
                <h3>cheesecake de maracuya</h3>
                <p>Base de queso crema y crema de leche con zumo de maracuyá, (Base de galleta).</p>
                <div className="lista-precios">
                  <div>Pequeña (8 personas) - S/. 80</div>
                  <div>Mediana (15 personas) - S/. 120</div>
                  <div>Grande (25 personas) - S/. 180</div>
                </div>
                <div className="producto-footer">
                  <a href="#contacto" className="btn-pedir">Pedir</a>
                </div>
              </div>
            </article>

           {/* CHEESECAKE DE OREO */}
            <article className="producto-card">
              <div className="producto-img">
                <img src={oreo} alt="Cheesecake de Oreo" />
                <span className="producto-badge">Popular</span>
              </div>
              <div className="producto-body">
                <h3>Cheesecake de Oreo</h3>
                <p>
                  Base de queso crema y crema de leche con trozos de galleta Oreo,
                  cubierta con ganache de chocolate. (Base galleta Oreo).
                </p>
                <div className="lista-precios">
                  <div>Chico   (4 personas)  - S/. 40</div>
                  <div>Mediano (6 personas)  - S/. 55</div>
                  <div>Grande  (10 personas) - S/. 85</div>
                </div>
                <div className="producto-footer">
                  <a href="#contacto" className="btn-pedir">Pedir</a>
                </div>
              </div>
            </article>

            {/* CHEESECAKE DE LÚCUMA */}
            <article className="producto-card">
              <div className="producto-img">
                <img src={lucuma} alt="Cheesecake de Lúcuma" />
              </div>
              <div className="producto-body">
                <h3>Cheesecake de Lúcuma</h3>
                <p>
                  Base de queso crema y crema de leche con pulpa de lúcuma,
                  decorado con delicioso manjar artesanal de lúcuma.
                </p>
                <div className="lista-precios">
                  <div>Chico   (4 personas)       - S/. 40</div>
                  <div>Mediano (6 - 7 personas)   - S/. 60</div>
                  <div>Grande  (10 - 11 personas) - S/. 95</div>
                </div>
                <div className="producto-footer">
                  <a href="#contacto" className="btn-pedir">Pedir</a>
                </div>
              </div>
            </article>

            {/* PIE DE FRESA */}
            <article className="producto-card">
              <div className="producto-img">
                <img src={fresa} alt="Pie de Fresa" />
              </div>
              <div className="producto-body">
                <h3>Pie de Fresa</h3>
                <p>
                  Elaborado con pasta frolla, relleno de crema pastelera y compota
                  de fresa, decorado con fresas frescas.
                </p>
                <div className="lista-precios">
                  <div>Chico (4 - 6 personas) - S/. 30</div>
                  <div>Mediano (6 - 8 personas) - S/. 40</div>
                  <div>Grande (10 - 12 personas) - S/. 55</div>
                </div>
                <div className="producto-footer">
                  <a href="#contacto" className="btn-pedir">Pedir</a>
                </div>
              </div>
            </article>

            {/* PIE DE LIMÓN */}
            <article className="producto-card">
              <div className="producto-img">
                <img src={limon} alt="Pie de Limón" />
              </div>
              <div className="producto-body">
                <h3>Pie de Limón</h3>
                <p>
                  Pasta frolla con un relleno de crema de limón a base de leche
                  condensada, decorado con merengue italiano.
                </p>
                <div className="lista-precios">
                  <div>Chico (4 - 5 personas) - S/. 30</div>
                  <div>Mediano (6 - 7 personas) - S/. 40</div>
                  <div>Grande (10 - 11 personas) - S/. 60</div>
                </div>
                <div className="producto-footer">
                  <a href="#contacto" className="btn-pedir">Pedir</a>
                </div>
              </div>
            </article>

            {/* LEMON CURD */}
            <article className="producto-card">
              <div className="producto-img">
                <img src={lemonCurd} alt="Lemon Curd" />
              </div>
              <div className="producto-body">
                <h3>Lemon Curd</h3>
                <p>
                  Elaborado con pasta sablee, con una exquisita crema de limón,
                  decorado con merengue italiano.
                </p>
                <div className="lista-precios">
                  <div>Chico (4 - 6 personas) - S/. 30</div>
                  <div>Mediano (6 - 8 personas) - S/. 40</div>
                  <div>Grande (10 - 12 personas) - S/. 60</div>
                </div>
                <div className="producto-footer">
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
              <h2>Hechos con amor,<br /><em>para ti</em></h2>
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
              <div className="contacto-icon">
                <img src={ubicacionImg} alt="Ubicación" />
              </div>
              <span>Lima, Perú</span>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">
                <img src={whatsappImg} alt="WhatsApp" />
              </div>
              <a
                href="https://wa.me/51900461130"
                target="_blank"
                rel="noopener noreferrer"
              >
                +51 900 461 130
              </a>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">
                <img src={gmailImg} alt="Correo" />
              </div>
              <a href="mailto:sweetkellove@gmail.com">
                sweetkellove@gmail.com
              </a>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">
                <img src={tiktokImg} alt="TikTok" />
              </div>
              <a
                href="https://www.tiktok.com/@sweetkellovee"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sweetkellovee
              </a>
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
          <h4>Síguenos</h4>

          <div className="redes-sociales">
            <a
              href="https://www.instagram.com/sweetkellove"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramImg} alt="Instagram" />
            </a>

            <a
              href="https://www.facebook.com/sweetkellove"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookImg} alt="Facebook" />
            </a>

            <a
              href="https://www.tiktok.com/@sweetkellovee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokImg2} alt="TikTok" />
            </a>

            <a
              href="https://wa.me/51900461130?text=Hola,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappImg2} alt="WhatsApp" />
            </a>
          </div>
        </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sweet Kellove · Todos los derechos reservados</span>
          <span>Hecho con amor en Lima</span>
        </div>
      </footer>
    </>
  )
}

export default Index