import './App.css'
import { Contacto } from './components/Contacto'
import { Experiencia } from './components/Experiencia'
import { Footer } from './components/Footer'
import { Habilidades } from './components/Habilidades'
import Navbar from './components/Navbar'
import { Presentacion } from './components/Presentacion'
import { Proyectos } from './components/Proyectos'
import { Sobremi } from './components/Sobremi'

function App() {

  return (
    <>
    <Navbar />
    <Presentacion />
    <Sobremi />
    <Habilidades />
    <Proyectos />
    <Experiencia />
    <Contacto />
    <Footer />
    </>
  )
}

export default App
