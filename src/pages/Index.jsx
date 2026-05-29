import logo from '../img/logo.png'

function Index() {
  return (
    <>
      {/* Barra de menú */}
      <nav className="barra-menu">
        <div className="logo">
          <img src={logo} alt="logo" />
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
        <section id="inicio">
          <h1>Bienvenido</h1>
          <p>Contenido de la pagina principal</p>
        </section>
        <section id="productos">
          <h2>Nuestros Productos</h2>
          <p>Informacion sobre los productos</p>
        </section>
        <section id="sobre_nosotros">
          <h2>Sobre nosotros</h2>
          <p>Informacion sobre la empresa</p>
        </section>
        <section id="contacto">
          <h2>Contacto</h2>
          <p>Informacion de contacto</p>
        </section>
      </main>
    </>
  )
}

export default Index