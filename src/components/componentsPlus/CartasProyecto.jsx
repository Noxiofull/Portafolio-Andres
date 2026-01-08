import React from 'react'
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline'
import {Github} from 'lucide-react'
import {} from '@lucide/lab'

export const CartasProyecto = ({titulo,descripcion,plataforma,link,img}) => {
  return (
    <div className=' flex flex-col mx-5 my-5  lg:w-100 h-110 border-1 border-gray-200 rounded-2xl transition-all duration-300 ease-out hover:shadow-lg   cursor-pointer'>
        <div className='overflow-hidden group  rounded-t-2xl'>
          <img src={img} alt="" className='w-full  object-cover transition-transform duration-300 group-hover:scale-110'/>
        </div>
        <h3 className='font-mono mx-3 mt-8'>{titulo}</h3>
        <h4 className='mx-3'>{descripcion}</h4>

        <div className='flex flex space-x-3 mx-3 mt-4 font-semibold text-xs'>
        {plataforma.map(indice =>{
              return(<p className='bg-gray-200  rounded-2xl  px-2 py-1 '>{indice}</p>)
          })}      
        </div>

        <div className='flex space-x-5 mt-4 mx-3 text-sm mb-3'>
          
          <a className='w-23 justify-evenly  h-8  text-center flex   items-center  border-1 border-gray-300 rounded-lg hover:bg-gray-200 duration-300'  href={link[0]}><Github className=' w-4 h-4'/>Codigo</a>
          <a className='w-21 justify-evenly  h-8  text-center flex  items-center justify-center border-1 border-gray-300 rounded-lg bg-black text-white'  href={link[1]}><ArrowTopRightOnSquareIcon className="w-4 h-4"/> Demo</a>
        </div>


    </div>
  )
}
