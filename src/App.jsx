import './styles/App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contacto from './components/Contacto'
import Products from './components/Products'
import Nosotros from './components/Nosotros'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Nosotros />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
