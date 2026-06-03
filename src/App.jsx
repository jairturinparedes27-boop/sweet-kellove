import '../styles/App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contacto from './components/Contacto'
import Products from './components/Products'
import SobreNosotros from './components/Sobrenosotros'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <SobreNosotros />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
