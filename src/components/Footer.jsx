
import {Github,Linkedin} from 'lucide-react'
import {EnvelopeIcon} from '@heroicons/react/24/outline'

export const Footer = () => {
  return (
    <section id='footer' className="bg-black text-white h-full">
      <div className="mx-10 sm:flex items-start flex-col items-center sm:flex-row  justify-evenly pt-10">
        <div className="sm:w-80">
          <p className="font-bold">Portafolio</p>
          <p className="text-gray-400">Desarrollador Full Stack apasionado por crear soluciones web innovadoras y funcionales</p>
        </div>
        <div className="inline-block mt-5 sm:mt-0 text-start">
          <p className="font-bold">Enlaces rapidos</p>
          <ul className="text-gray-400 space-y-3">
            <li>
              Inicio
            </li>
            <li>
              Sobre mi
            </li>
            <li>
              Proyectos
            </li>
            <li>
              Contacto
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold mt-5 sm:mt-0">Sigueme</p>
          <div className=" sm:justify-center flex text-gray-400">
            <a className='bg-gray-900 rounded-lg p-1 m-1 hover:bg-gray-600 duration-300 ' target="_blank" rel="noopener noreferrer" href="https://github.com/Noxiofull/noxiofull.github.com"><Github className=' w-10 h-10'/></a>
            <a className='bg-gray-900 rounded-lg p-1 m-1 hover:bg-gray-600 duration-300' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andres-guardo-2798992b1"><Linkedin className=' w-10 h-10'/></a>
            <a className='bg-gray-900 rounded-lg p-1 m-1 hover:bg-gray-600 duration-300'  target="_blank" rel="noopener noreferrer" href="mailto:anfeguar159@gmail.com"><EnvelopeIcon className=' w-10 h-10'/></a>
          </div>
        </div>
      </div>
      <div className="block text-gray-400 text-center flex  justify-center items-center  h-25 border-t-1 border-gray-300/14 mt-5  sm:mx-75 ">
        <p>@2025 Todos los derechos reservados</p>
      </div>
    </section>
  )
}
