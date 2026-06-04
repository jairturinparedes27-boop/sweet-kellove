import { useState } from 'react'

import ubicationImg from '../img/ubicacion.png'
import gmailImg from '../img/gmail.png'
import tiktokImg2 from '../img/tiktooo.png'
import whatsappImg2 from '../img/whasaa.png'

import '../styles/Contacto.css'

function Contacto() {

  const [nombre, setNombre] = useState('')
  const [contacto, setContacto] = useState('')
  const [tipoPedido, setTipoPedido] = useState('')
  const [pedido, setPedido] = useState('')

  const enviarWhatsApp = (e) => {
    e.preventDefault()

    const mensaje = `
   *Nuevo Pedido Sweet Kellove*
   *Nombre:* ${nombre}
   *Contacto:* ${contacto}
   *Tipo de pedido:* ${tipoPedido}
   *Detalles del pedido:*
${pedido}
    `

    const url = `https://wa.me/51900461130?text=${encodeURIComponent(mensaje)}`

    window.open(url, '_blank')

    // Limpiar formulario
    setNombre('')
    setContacto('')
    setTipoPedido('')
    setPedido('')
  }

  return (
    <section id="contacto">
      <div className="seccion-header">
        <span className="seccion-label">Escríbenos</span>
        <h2>
          ¿Tienes un pedido <em>especial</em>?
        </h2>
      </div>

      <div className="contacto-grid">

        {/* Información */}
        <div className="contacto-info">

          <h3>Estamos aquí para ti</h3>

          <p>
            Cuéntanos sobre tu ocasión especial y con gusto te ayudamos
            a crear el dulce perfecto. Respondemos en menos de 24 horas.
          </p>

          {/* Ubicación */}
          <div className="contacto-item">
            <a
              href="https://maps.google.com/?q=Lima,Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              <div className="contacto-icon">
                <img src={ubicationImg} alt="Ubicación" />
              </div>
              <span>Lima, Perú</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="contacto-item">
            <a
              href="https://wa.me/51900461130"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              <div className="contacto-icon">
                <img src={whatsappImg2} alt="WhatsApp" />
              </div>
              <span>+51 900 461 130</span>
            </a>
          </div>

          {/* Gmail */}
          <div className="contacto-item">
            <a
              href="mailto:sweetkellove@gmail.com"
              className="contacto-link"
            >
              <div className="contacto-icon">
                <img src={gmailImg} alt="Correo" />
              </div>
              <span>sweetkellove@gmail.com</span>
            </a>
          </div>

          {/* TikTok */}
          <div className="contacto-item">
            <a
              href="https://www.tiktok.com/@sweetkellovee"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              <div className="contacto-icon">
                <img src={tiktokImg2} alt="TikTok" />
              </div>
              <span>@sweetkellovee</span>
            </a>
          </div>

        </div>

        {/* Formulario */}
        <form className="formulario" onSubmit={enviarWhatsApp}>

          <div className="form-grid-2">

            <div className="form-row">
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label>WhatsApp / Correo</label>
              <input
                type="text"
                placeholder="Para responderte"
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                required
              />
            </div>

          </div>

          <div className="form-row">
            <label>Tipo de pedido</label>

            <select
              value={tipoPedido}
              onChange={(e) => setTipoPedido(e.target.value)}
              required
            >
              <option value="">Selecciona una opción...</option>
              <option>Torta personalizada</option>
              <option>Cupcakes</option>
              <option>Cheesecake</option>
              <option>Pie de Limón</option>
              <option>Pie de Fresa</option>
              <option>Lemon Curd</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="form-row">
            <label>Cuéntanos tu pedido</label>

            <textarea
              placeholder="Ocasión, fecha, cantidad, sabor, decoración..."
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
              required
            />
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