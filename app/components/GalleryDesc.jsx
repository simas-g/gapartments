'use client'
import { useState, useEffect } from "react"
import ImageNav from '../components/ImageNav';
import PropNavigation from '../components/PropNavigation';

const GalleryDesc = ({prop}) => {
    const [selected, setSelected] = useState(null)
    const handleSelected = (i) => {
        setSelected(i)

    }
    useEffect(() => {
        const handleResize = () => {
          const windowSize = window.innerWidth;
          if (windowSize < 1024) {
            if (selected === 1 || selected === null) {
              setSelected(1);
            }
          } else if (windowSize >= 1024) {
            if (selected === 2 || selected === null) {
              setSelected(2);
            }
          }
        };
      
        handleResize();
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
  return (
    <div className="grid px-8 gap-y-6 gap-x-8 items-start lg:grid-cols-2">
        <div className='flex flex-col gap-y-4'>
          <ImageNav images={prop.images} />
          <div className='order-2 w-full h-12 lg:order-3 bg-gray-200 flex items-center justify-around rounded-lg p-1'>
            <h4 onClick={() => handleSelected(1)} className={`lg:hidden cursor-pointer w-full justify-center h-full flex items-center ${selected == 1 ? ' bg-gray-100 rounded-md' : ''}`}>Informacija {selected}</h4>
            <h4 onClick={() => handleSelected(2)} className={`cursor-pointer w-full justify-center h-full flex items-center ${selected == 2 ? ' bg-gray-100 rounded-md' : ''}`}>Žemėlapis</h4>
            <h4 onClick={() => handleSelected(3)} className={`cursor-pointer w-full justify-center h-full flex items-center ${selected == 3 ? ' bg-gray-100 rounded-md' : ''}`}>Atsiliepimai</h4>
          </div>
        </div>
        <PropNavigation prop={prop} selected={selected} setSelected={setSelected}/>
    </div>      
  )
}

export default GalleryDesc