import { ShowCardAboutMe } from "./componentsPlus/ShowCardAboutMe"

import ImgDevo from "../assets/Imagen_Desarrollo.jpeg"

export const Sobremi = () => {
  return (
    <section className="my-20 mx-1 sm:mx-0 bg-gray-50">
      <div className="pt-20">
        <h2 className="text-center text-5xl">Sobre mi</h2>
        <p className="text-center text-2xl text-gray-500">Conoce mas acerca de mi trayectoria y experiencia</p>
      </div>
      <div className="sm:flex sm:m-25 my-20 mx-2 space-x-10">
        <div>
          <img src={ImgDevo} alt="" className="hidden lg:block rounded-2xl" />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-center sm:align-baseline space-y-5">
          <h3 className="text-center  text-4xl sm:text-start sm:text-3xl">Desarrollador apasionado por la tecnologia</h3>
          <div className="text-justify sm:text-left space-y-6">
            <p>Con más de 5 años de experiencia en el desarrollo web, me especializo en crear aplicaciones modernas y escalables que resuelven problemas reales.</p>
            <p>Mi enfoque está en escribir código limpio y mantenible, utilizando las mejores prácticas y las últimas tecnologías del mercado.</p>
            <p>Me apasiona aprender nuevas tecnologías y compartir conocimiento con la comunidad. Creo en la colaboración y el trabajo en equipo como pilares fundamentales del éxito.</p>
          </div>

          <div className=" lg:justify-start justify-center flex sm:space-x-3">
            <p className="bg-blue-100 px-4 py-2 rounded-xl text-blue-600">React</p>
            <p className="bg-green-100 px-4 py-2 rounded-xl text-green-600">Node.js</p>
            <p className="bg-purple-100 px-4 py-2 rounded-xl text-purple-600">TypeScript</p>
            <p className="bg-yellow-100 px-4 py-2 rounded-xl text-yellow-600">Python</p>
          </div>
          {/* aqui trabajar */}
        </div>
      </div>
      <div className="flex flex-wrap  space-y-4  pb-5 justify-center ">
        <ShowCardAboutMe />
      </div>

    </section>
  )
}
