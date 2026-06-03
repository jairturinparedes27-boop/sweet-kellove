import './styles/App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contacto from './components/Contacto'
import Products from './components/Products'
import Sobrenosotros from './components/Sobrenosotros'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Sobrenosotros />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
