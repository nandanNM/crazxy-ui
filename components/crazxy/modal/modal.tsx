import React, { useState } from 'react'

const Modal = (props) => {
    const {tittle,description}=props
    const [isOpen,setIsOpen]=useState(false)
    
  return (
    <div className='relative flex justify-center my-10'>
        <button
        className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer '
        onClick={ ()=>setIsOpen(true)}
        >
        Open
        </button>
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity ${ isOpen ? "opacity-100" :"opacity-0 pointer-events-none"}`}>
            <div className='absolute inset-0 bg-black/50'
            onClick={()=> setIsOpen(false)}
            ></div>
            <div className={`relative w-11/12 max-w-lg bg-white p-6 rounded-lg shadow-lg transition-all ${isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
            >
             <h3 className='text-2xl font-bold mb-4'>{tittle}</h3>
             <p className='mb-4'>
               {description}
             </p>
             <button onClick={()=> setIsOpen(false)}
               className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" 
            >
                close
             </button>
            </div>
        </div>
    </div>
  )
}

export default Modal