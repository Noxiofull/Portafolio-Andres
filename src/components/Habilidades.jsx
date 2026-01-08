import { MostrarCartaHabilidades } from "./componentsPlus/MostrarCartaHabilidades"


export const Habilidades = () => {
  return (
    <section id="habilidades" className="mx-5 sm:mx-0">
            <h2 className="text-center text-5xl">Habilidades</h2>
            <p className="text-center text-2xl text-gray-500">Tecnologías y herramientas con las que trabajo</p>
        <div className="flex flex-wrap justify-center md:mx-50 mt-10">
          <MostrarCartaHabilidades />
        </div>
    </section>
  )
}
