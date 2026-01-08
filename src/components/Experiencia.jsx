import { MostrarCartaEducacion } from "./componentsPlus/MostrarCartaEducacion"
import { MostrarCartaExperienciaLaboral } from "./componentsPlus/MostrarCartaExperienciaLaboral"
import { CalendarIcon } from '@heroicons/react/24/outline'

export const Experiencia = () => {
  return (
    <section className="mx-2 sm:mx-0 my-20">
      <div className="w-full">
        <div>
          <h2 className="text-center text-5xl">Experiencia Laboral</h2>
          <p className="text-center text-2xl text-gray-500">Mi trayectoria profesional y educación</p>

        </div>
        <div className="mt-15 flex flex-col justify-center items-center space-y-10  w-full mx-auto">
          <div className="sm:w-150 lg:w-200">
            <div className="flex">
              <CalendarIcon className="w-8 h-8 text-blue-600" />
              <h2 className="mb-10 ml-3 text-2xl">Experiencia laboral</h2>
            </div>

            <MostrarCartaExperienciaLaboral />
          </div>
          <div className="sm:w-150 lg:w-200">
            <div className="flex">
              <CalendarIcon className="w-8 h-8 text-blue-600 " />
              <h2 className=" ml-3 text-2xl" >Educacion</h2>
            </div>

            <MostrarCartaEducacion />
          </div>
        </div>

      </div>
    </section>
  )
}
