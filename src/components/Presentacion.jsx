
import ImgRostro from "../assets/Imagen_Andres.jpg"
export const Presentacion = () => {
  return (
    <section  id='presentacion' class="w-full">
        <div className="  lg:px-50 md:px-30 mx-5 sm:mx-3 flex flex-wrap lg:px-25 lg:space-x-5 mt-30 lg:items-center lg:justify-between  " >
            <div className="flex-1">
                <p className="text-lg p-2.5 bg-blue-100 rounded-full inline-block text-blue-600">Bienvenido a mi portafolio</p>
                <h1 className="text-6xl my-3">Hola, Soy <p className="inline text-blue-500">Andres</p> </h1>
                <p className="text-gray-500 text-xl">Desarrollador Full Stack especializado en crear experiencias web modernas y funcionales. Transformo ideas en soluciones digitales innovadoras.</p>
                <div className=" flex flex-wrap my-5 ">
                  <a className="font-semibold mr-4 py-2.5 px-2 text-500 rounded-lg bg-black text-white " href="">Ver proyectos</a>
                  <a className="space-y-3 lg:mt-0 font-semibold border-1 border-gray-300 rounded-lg py-2.5 px-5" href="">Contactame</a>
                </div>
            </div>
            {/* <div  className="hidden lg:block md:w-[30%] lg:w-[80%] relative aspect-[2/2] w-[80%] max-w-[600px] mx-15"> */}
            <div  className="xl:w-[40%] lg:w-[80%] relative aspect-[2/2] w-[80%]  mt-25 2xl:mt-0  mx-auto ">
                <img className="relative z-5 inset-0 w-full h-full object-fill rounded-xl" src={ImgRostro} alt="" />
                <div className="bg-purple-500 w-[20%] h-[20%]  top-[-2%] right-[84%] rounded-lg absolute"></div>
                <div className="bg-blue-500  w-[20%] h-[20%]  bottom-[-2%] right-[-4%] rounded-lg absolute "></div>
                <div></div>
            </div>     
        </div>
    </section>
  )
}
