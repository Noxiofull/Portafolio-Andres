import React from 'react'
import { CartasProyecto } from './CartasProyecto'
import imgData from "../../assets/Imagen_Desarrollo.jpeg"

const data = [
    {titulo:"E-Commerce Platform",descripcion:"Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.", plataforma:["React","Node.js","MongoDb","Stripe"],link:["UrlCodigo", "UrlDemo"],img:imgData},
    {titulo:"E-Commerce Platform",descripcion:"Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.", plataforma:["React","Node.js","MongoDb","Stripe"],link:["UrlCodigo", "UrlDemo"],img:imgData},
    {titulo:"E-Commerce Platform",descripcion:"Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.", plataforma:["React","Node.js","MongoDb","Stripe"],link:["UrlCodigo", "UrlDemo"],img:imgData},
    {titulo:"E-Commerce Platform",descripcion:"Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.", plataforma:["React","Node.js","MongoDb","Stripe"],link:["UrlCodigo", "UrlDemo"],img:imgData},
    {titulo:"E-Commerce Platform",descripcion:"Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.", plataforma:["React","Node.js","MongoDb","Stripe"],link:["UrlCodigo", "UrlDemo"],img:imgData},
    {titulo:"E-Commerce Platform",descripcion:"Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.", plataforma:["React","Node.js","MongoDb","Stripe"],link:["UrlCodigo", "UrlDemo"],img:imgData},

]

export const MostrarCartaProyectos = () => {
  return (
    data.map(indice =>{
        return(
            <CartasProyecto titulo={indice.titulo} descripcion={indice.descripcion} plataforma={indice.plataforma} link={indice.link} img={indice.img}/>
        )
        
    })
  )
}
