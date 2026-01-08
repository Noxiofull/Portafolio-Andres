

export const CardAboutMe = ({text,number,icon:Icon}) => {
  return (
     <>
     <div className="w-130 md:w-110 flex flex-col mx-3 p-5 justify-center align-baseline bg-white w-100 h-50 text-center space-y-4 rounded-2xl border-1 border-gray-200 transition-all duration-300 ease-out hover:shadow-lg hover:translate-y-[-2px]">
         <Icon className="w-2- h-10 text-blue-600 font-bold" />
         <p>{number}+</p>
         <h1>{text}</h1>
     </div>
     </>
  )
}
