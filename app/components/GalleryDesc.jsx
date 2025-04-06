'use client'
import { useState, useEffect } from "react"
import ImageNav from '../components/ImageNav';
import PropNavigation from '../components/PropNavigation';
import MapBlock from '../components/Map'
const GalleryDesc = ({prop}) => {
    const [selected, setSelected] = useState(1)
    const [width, setWidth] = useState(0);
    const handleSelected = (i) => {
        setSelected(i)

    }
    useEffect(() => {
        const handleResize = () => {
          const windowSize = window.innerWidth;
          setWidth(windowSize)
        };
      
        handleResize();
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    useEffect(() => {
      const width = window.innerWidth;
      if(width > 1024) {
        setSelected(2);
      }
    }, [])
  return (
    <div className="grid px-8 gap-y-6 gap-x-8 items-start lg:grid-cols-2">
        <div className='flex flex-col'>
          <ImageNav images={prop.images} />
          <div className='w-full mt-12 h-12 bg-gray-200 flex items-center justify-around rounded-lg p-1'>
            <h4 onClick={() => handleSelected(1)} className={`lg:hidden cursor-pointer w-full justify-center h-full flex items-center ${selected == 1 ? ' bg-gray-100 rounded-md' : ''}`}>Informacija</h4>
            <h4 onClick={() => handleSelected(2)} className={`cursor-pointer w-full justify-center h-full flex items-center ${selected == 2 ? ' bg-gray-100 rounded-md' : ''}`}>Žemėlapis</h4>
            <h4 onClick={() => handleSelected(3)} className={`cursor-pointer w-full justify-center h-full flex items-center ${selected == 3 ? ' bg-gray-100 rounded-md' : ''}`}>Atsiliepimai</h4>
          </div>
          {(selected == 2 || width > 1024) && (
          <MapBlock location={prop.location}></MapBlock>
        )}
        </div>
        {(selected == 1 || width > 1024) && (
          <PropNavigation prop={prop} selected={selected} setSelected={setSelected}/>
        )}

    </div>      
  )
}

export default GalleryDesc