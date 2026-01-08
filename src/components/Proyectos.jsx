import { MostrarCartaProyectos } from "./componentsPlus/MostrarCartaProyectos"


export const Proyectos = () => {
  return (
    <section id='proyectos' className="my-20 mx-1 sm:mx-0 bg-gray-50">
        <div className="pt-20">
          <h2 className="text-center text-5xl">Proyectos</h2>
          <p className="text-center text-2xl text-gray-500">Algunos de los proyectos en los que he trabajado</p>
        </div>
        <div className="flex flex-wrap justify-center md:mx-50 mt-10">
          <MostrarCartaProyectos />
        </div>
    </section>
  )
}
