import { useState } from "react"



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section class="w-full">
      <nav class="bg-white/30 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-1 border-gray-200 border-default">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Portafolio</span>
          </a>
          <button onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen)
          }} id="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base hover:bg-gray-200 md:hidden">
            <span className="sr-only">Open main menu</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>

          </button>
          <div class="hidden md:block flex space-x-3 md:order-2  rtl:space-x-reverse " id="menu">
            <a href="">Inicio</a>
            <a href="">Sobre mi</a>
            <a href="">Habilidades</a>
            <a href="">Proyectos</a>
            <a href="">Experiencia</a>
            <a href="">Contacto</a>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden   left-0  w-full  bg-white/30 backdrop-blur-md   border-b border-white/30 p-4 space-y-2`}>
          <a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-blue-400  pb-2">Inicio</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-blue-400  pb-2">Sobre mi</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-blue-400  pb-2">Habilidades</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-blue-400  pb-2">Proyectos</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-blue-400  pb-2">Experiencia</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-blue-400  pb-2">Contacto</a>
        </div>
      </nav>
    </section>

  )
}

export default Navbar