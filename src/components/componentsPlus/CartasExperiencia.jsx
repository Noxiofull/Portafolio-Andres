import React, { useState } from 'react'
import { CalendarIcon } from '@heroicons/react/24/outline'

export const CartasExperiencia = ({ titulo, sTitulo, text, descrip, iteraciones, fecha }) => {
    return (
        <>
            {
                descrip ? (
                    <div className='mx-5 p-5 border-1 border-gray-200 hover:shadow-lg transition-all duration-300 ease-out hover:translate-y-[-2px] cursor-pointer '>
                        <div className='text-xl flex justify-between'>
                            <p>{titulo}</p>
                            <div className='flex space-x-1'>
                                <CalendarIcon className='w-5 h-5 text-gray-500'/>
                                <p className='text-gray-500 text-[1rem]'>{fecha}</p>
                            </div>
                        </div>
                        <p className='text-blue-500'>{sTitulo}</p>
                        <p className='mt-7'>{descrip}</p>
                        <ul className='list-disc ml-4 marker:text-blue-600'>
                            {iteraciones.map((item, index) => (
                                <li className='mt-3' key={index}>{item}</li>
                            ))}
                        </ul>

                    </div>
                ) : (
                    <div className='mx-5 mt-10 p-5 border-1 border-gray-200 hover:shadow-lg transition-all duration-300 ease-out hover:translate-y-[-2px] cursor-pointer'>
                        <div className='text-xl flex justify-between'>
                            <p>{titulo}</p>
                            <div className='flex space-x-1'>
                                <CalendarIcon className='w-5 h-5 text-gray-500'/>
                                <p className='text-gray-500 text-[1rem]'>{fecha}</p>
                            </div>

                        </div>
                        <p className='text-blue-400'>{sTitulo}</p>
                        <p className='mt-7'>{text}</p>
                    </div>
                )
            }
        </>

    )
}
