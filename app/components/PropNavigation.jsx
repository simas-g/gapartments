'use client'
import { useState } from "react"


const PropNavigation = ({prop, selected}) => {
    
          
    return (
        <div className="w-full order-2 lg:sticky lg:top-20 lg:right-8 h-fit bg-gray-100 border-gray-300 border px-8 p-4 rounded-lg flex flex-col gap-y-5">
            <h5 className="font-extrabold text-xl">Apie apartamentus</h5>
            <div className="text-gray-700 text-justify">
                {prop.description
                // ?.split('.')
                // .filter(Boolean)
                // .map((sentence, i) => (
                //     <div key={i}>
                //     {i % 3 === 0 && i !== 0 && <br />}
                //     {sentence}.
                //     </div>
                // ))
                }
            </div>
    
            <div className="border-b border-gray-300 my-3"></div>
            <div className="flex flex-col items-start gap-y-4">
                <div className="flex justify-between w-full text-xl font-bold">
                <p>Kaina nuo</p>
                <p>
                    35€ <span className='text-gray-700 font-medium text-sm'>/ nakčiai</span>
                </p>
                </div>
                <button className="w-full cursor-pointer text-white bg-amber-600 py-3 rounded-lg">
                Kalendorius
                </button>
                <button className="w-full cursor-pointer border-gray-300 py-3 border rounded-lg">
                Susisiekti
                </button>
            </div>
        </div>
      )
}
export default PropNavigation