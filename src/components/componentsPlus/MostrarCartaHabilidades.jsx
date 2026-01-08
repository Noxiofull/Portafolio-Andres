import React from 'react'
import { CartasHabilidades } from './CartasHabilidades'
import {CodeBracketIcon,ServerStackIcon,CircleStackIcon,WrenchIcon,DevicePhoneMobileIcon,PaintBrushIcon} from '@heroicons/react/24/outline'

const data = [
    {name:"Frontend",habilidades:[{name:"React / Next.js",porcentaje:90},{name:"TypeScript",porcentaje:70},{name:"Tailwind CCS",porcentaje:80},{name:"Angular",porcentaje:75}],icono:CodeBracketIcon},
    {name:"Backend",habilidades:[{name:"Node.js /Express",porcentaje:80},{name:"Springboot",porcentaje:60},{name:"REST APIs",porcentaje:80},{name:"GraphQL",porcentaje:60},],icono:ServerStackIcon},
    {name:"Bases de Datos",habilidades:[{name:"PostgreSQL",porcentaje:70},{name:"MongoDB",porcentaje:80},{name:"MySQL",porcentaje:80},{name:"Redis",porcentaje:60},],icono:CircleStackIcon},
    {name:"Herramientas",habilidades:[{name:"Git / GitHub",porcentaje:90},{name:"Docker",porcentaje:80},{name:"CI/CD",porcentaje:70},{name:"AWS",porcentaje:70},],icono:WrenchIcon},
    {name:"Mobile",habilidades:[{name:"React Native",porcentaje:80},{name:"Responsive Design",porcentaje:85},{name:"PWA",porcentaje:70},{name:"Flutter",porcentaje:75},],icono:DevicePhoneMobileIcon},
    {name:"Diseño",habilidades:[{name:"Figma",porcentaje:80},{name:"UI/UX Design",porcentaje:80},{name:"Adobe XD",porcentaje:70},{name:"Prototyping",porcentaje:70},],icono:PaintBrushIcon},
]
export const MostrarCartaHabilidades = () => {
  return (
    data.map(index =>{
        return(
            <CartasHabilidades titulo={index.name} habilidades = {index.habilidades} icono = {index.icono}/>
        )
    })
  )
}
