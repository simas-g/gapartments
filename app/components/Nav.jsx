'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const locations = [
      'APARTAMENTAI',
      'KALNIEČIŲ G. 219',
      'KALNIEČIŲ G. 196',
      'TAIKOS PR. 33B',
      'VARNIŲ G. 24',
      'NEMUNO G. 22',
      'PUODŽIŲ G. 27',
      'LINKUVOS G. 55'
    ];
  
    return (
      <div className="  tracking-widest relative w-full md:pt-0 pt-32 h-fit font-[--font-poppins] md:flex items-center ">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-end pr-12 items-center gap-x-4 w-full px-4 py-3 text-white tracking-wider font-light"
        >
          <span className="uppercase hover:underline underline-offset-8">Apartamentai</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 7" fill="white" className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <polygon points="5,0 10,7 0,7" />
          </svg>
        </button>
  
        {isOpen && (
          <div className="absolute top-full left-0 w-full md:w-fit md:px-4 md:rounded-md bg-black text-white shadow-lg z-10 pb-2">
            <ul>
              {locations.slice(1).map((location, index) => (
                <li 
                  key={index}
                  className="px-4 hover:underline underline-offset-8 pr-11 py-3 cursor-pointer text-right uppercase md:text-center tracking-wider font-light w-full"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="text-right px-4 pr-19">
        <a href="" className="text-white uppercase hover:underline underline-offset-8">Susisiekti</a>

        </div>

      </div>
    );
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 top-0 left-0 w-full z-20 bg-">
        <div className="mx-auto px-4 sm:px-6 lg:px-20 p-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link 
            href={'/'}
            className="flex-shrink-0 z-50 cursor-pointer">
              <Image 
                src={'/logo.png'} 
                height={80} 
                width={80} 
                alt="gapartments" 
                className="object-contain"
              />
            </Link>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="relative z-50 p-2 cursor-pointer text-white hover:text-gray-100 focus:outline-none"
              >
                <div className="w-8 h-6 flex flex-col justify-between">
                  <div 
                    className={`h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
                      isOpen ? 'rotate-45 translate-y-2.5' : ''
                    }`}
                  ></div>
                  <div 
                    className={`h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
                      isOpen ? 'opacity-0' : ''
                    }`}
                  ></div>
                  <div 
                    className={`h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
                      isOpen ? '-rotate-45 -translate-y-2.5' : ''
                    }`}
                  ></div>
                </div>
              </button>
            </div>

  
            {/* Mobile Menu Overlay */}
            {isOpen && (
              <div className="md:hidden absolute inset-0 bg-black/90 top-0 right-10 w-full h-fit z-1 ">
                <div className="container mx-auto space-y-6">
                  <Dropdown />
                  <div className="space-y-4">
                  </div>
                </div>
              </div>
            )}
  
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Dropdown />
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav