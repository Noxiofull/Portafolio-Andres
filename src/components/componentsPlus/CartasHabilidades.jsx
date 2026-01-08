import { Weight } from 'lucide-react'
import React from 'react'

export const CartasHabilidades = ({ titulo, habilidades, icono: Icon }) => {
  return (
    <>
      <div className='flex flex-col w-130 md:w-110 my-5  lg:mx-5  border-1 border-gray-200 rounded-2xl p-5 transition-all duration-300 ease-out hover:shadow-lg hover:translate-y-[-2px] '>

        <div className='flex space-x-3 '>
          <Icon className="w-10 h-10 p-2 bg-blue-200 text-blue-600 rounded-lg"/>
          <p className=' flex  h-full justify-center items-center mb-5' style={{}}>{titulo}</p>
        </div>

        {habilidades.map((habilidad, index) => {
          return (
            <div className='my-2'>
              <div className='flex justify-between text-sm my-2'>
                <p key={index}>{habilidad.name}</p>
                <p className='text-gray-400' key={index}>{habilidad.porcentaje}%</p>
              </div>
              <div className='w-full bg-neutral-400 rounded-full h-2'>
                <div className={`bg-blue-600 h-2 rounded-full`} style={{ width: `${habilidad.porcentaje}%` }}></div>
              </div>
            </div>
          )

        })}
      </div>
    </>

  )
}
