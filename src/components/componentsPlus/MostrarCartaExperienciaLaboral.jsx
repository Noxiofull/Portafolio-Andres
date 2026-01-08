import React from 'react'
import { CartasExperiencia } from './CartasExperiencia'

const data = [{titulo:"Development analyst",sTitulo:"Seguros Suramericanas",descrip:"Desarrollo de aplicaciones enterprise, apoyo en análisis de arquitectura de software y trabajo colaborativo como desarrollador junior.",iteraciones:["Apoyo en el desarrollo y mantenimiento de aplicaciones empresariales.","Participación en el diseño y análisis de arquitectura de aplicaciones.","Colaboración con equipos de desarrollo bajo metodologías ágiles."],fecha:"2025"}]

export const MostrarCartaExperienciaLaboral = () => {
  return (
    data.map(indice =>{
      return(<CartasExperiencia titulo={indice.titulo} sTitulo={indice.sTitulo} descrip={indice.descrip} iteraciones={indice.iteraciones} fecha={indice.fecha} />)
    })
  )
}
