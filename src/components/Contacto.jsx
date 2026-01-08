import { PaperAirplaneIcon, EnvelopeIcon, PhoneIcon, HashtagIcon } from '@heroicons/react/24/outline'
export const Contacto = () => {
  return (
    <section id='contacto' className="mx-5 sm:mx-0  sm:mx-auto sm:px-60 py-16 my-20 bg-gray-50">

      <h2 className="text-center text-5xl mb-4">Contacto</h2>
      <p className="text-center text-2xl text-gray-500 mb-12">
        ¿Tienes un proyecto en mente? ¡Hablemos!
      </p>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


        <div className="grid gap-8">


          <form className="flex flex-col border bg-white border-gray-200 p-7 rounded-lg gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-neutral-100 rounded-md border border-gray-100 p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-neutral-100 rounded-md border border-gray-100 p-2"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="bg-neutral-100 rounded-md border border-gray-100 p-2"
            />
            <textarea
              rows={4}
              className="bg-neutral-100 rounded-md border border-gray-100 p-2"
              placeholder="Tu Mensaje"
            ></textarea>

            <button className="bg-black text-white flex justify-center space-x-3  rounded-md p-2 mt-2">
              <PaperAirplaneIcon className='w-6 h-6' />
              <p>Enviar Mensaje</p>
            </button>
          </form>


          <div className="border border-gray-200 bg-white p-7 rounded-lg space-y-6">
            <h3 className="text-2xl font-semibold">Información de contacto</h3>

            <div className='flex'>
              <EnvelopeIcon className='m-2 p-2 p-1 w-12 h-12 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg w-10 flex items-center justify-center align-baseline' />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500">anfeguar159@gmail.com</p>
              </div>

            </div>

            <div className='flex'>
              <PhoneIcon className='m-2 p-2 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg w-10 flex items-center justify-center align-baseline' />
              <div>
                <p className="font-medium">Teléfono</p>
                <p className="text-gray-500">+57 305 739 0168</p>
              </div>

            </div>

            <div className='flex'>
              <HashtagIcon className='m-2 p-2 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg w-10 flex items-center justify-center align-baseline' />
              <div className=''>
                <p className="font-medium">Ubicación</p>
                <p className="text-gray-500">Cartagena, Colombia</p>
              </div>

            </div>
          </div>

        </div>

        <div className=" border text-center text-left  h-fit  border-gray-200 p-7 rounded-2xl  space-y-12 bg-gradient-to-br from-blue-600 to-purple-600">
          <p className="inline-block text-2xl text-white ">¿Listo para colaborar?</p>
          <p className="text-white">
            Estoy disponible para proyectos freelance, colaboraciones y oportunidades
            de tiempo completo.
          </p>
          <div className='w-full'>
            <a href="#" className="text-black font-medium block text-center  hover:bg-gray-200 duration-300 bg-white p-2 rounded-lg">
              Comenzar un proyecto
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}


