import { CardAboutMe } from "./cardAboutMe"
import {CodeBracketIcon,UsersIcon,BookOpenIcon} from  "@heroicons/react/24/outline"

const data = [
    {text:"Proyectos Completados",icon:CodeBracketIcon,number:12},
    {text:"Años de experiencia",icon:UsersIcon,number:12},
    {text:"Certificaciones",icon:BookOpenIcon,number:12},

]


export const ShowCardAboutMe = () => {
  return (
    data.map(index =>{
        return(
            <CardAboutMe  text={index.text} number={index.number} icon={index.icon}/>
        )
    })
  )
}
