import ubicationImg from '../img/ubicacion.png'
import gmailImg from '../img/gmail.png'
import tiktokImg2 from '../img/tiktooo.png'
import whatsappImg2 from '../img/whasaa.png'
import '../styles/Contacto.css'

function Contacto() {
  return (
    <section id="contacto">
      <div className="seccion-header">
        <span className="seccion-label">Escríbenos</span>
        <h2>¿Tienes un pedido <em>especial</em>?</h2>
      </div>

      <div className="contacto-grid">
        <div className="contacto-info">
          <h3>Estamos aquí para ti</h3>

          <p>
            Cuéntanos sobre tu ocasión especial y con gusto te ayudamos a crear
            el dulce perfecto. Respondemos en menos de 24 horas.
          </p>

          <div className="contacto-item">
            <div className="contacto-icon">
              <img src={ubicationImg} alt="Ubicación" />
            </div>
            <span>Lima, Perú</span>
          </div>

          <div className="contacto-item">
            <div className="contacto-icon">
              <img src={whatsappImg2} alt="WhatsApp" />
            </div>
            <a
              href="https://wa.me/51900461130?text=Hola,%20quiero%20hacer%20un%20pedido"
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
              <img src={tiktokImg2} alt="TikTok" />
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

          <button type="submit" className="btn-form">
            Enviar pedido →
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto