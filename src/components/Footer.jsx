import instagramImg from '../img/instaa.png'
import facebookImg from '../img/faceboo.png'
import tiktokImg2 from '../img/tiktooo.png'
import whatsappImg2 from '../img/whasaa.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Sweet Kellove</h3>

          <p>
            Pastelería artesanal hecha con amor en Lima, Perú.
            Creamos momentos dulces e inolvidables para cada ocasión especial.
          </p>
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
  )
}

export default Footer