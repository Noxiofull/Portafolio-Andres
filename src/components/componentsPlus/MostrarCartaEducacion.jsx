import React from 'react'
import { CartasExperiencia } from './CartasExperiencia'

const data = [{titulo:"Ingeniero de sistemas",sTitulo:"Universidad de Cartagena",text:"Especialización en Desarrollo de Software y Arquitectura de Sistemas",fecha:"2018-2025"},
              {titulo:"Formación Habilidades en Programación - MinTic",sTitulo:"Universidad de Antioquia",text:"Bootcamp intensivo de 600 horas en desarrollo de habilidades",fecha:"2021"},
              {titulo:"Formacion Habilidades en Programacion con enfasis en Desarrollo de Aplicaciones Web - Mintic",sTitulo:"Universidad de Antioquia",text:"Bootcamp intensivo de 800 horas en desarrollo de habilidades",fecha:"2021"},
]

export const MostrarCartaEducacion = () => {
  return (
    data.map(indice=>{
        return(<CartasExperiencia titulo={indice.titulo} sTitulo={indice.sTitulo} text={indice.text} fecha={indice.fecha}/>)
        
    })
  )
}
