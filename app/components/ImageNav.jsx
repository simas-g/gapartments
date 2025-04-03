'use client'

import { useState } from "react"

const ImageNav = ({images}) => {
    const [selected, setSelected] = useState(0)
    const handleImageChange = (i) => {
        setSelected(i)
        console.log(i)
    }
    const handleNavigation = (dir) => {
        if(dir === 'right') {
            if(selected < images?.length - 1) {
                setSelected(prev => prev + 1)
            } else setSelected(0)
        } else {
            if(selected > 0) {
                setSelected(prev => prev - 1) 
            } else setSelected(images?.length-1)
        }
    }
  return (
    <div className="col-span-2 max-w-4xl w-full">
          {/*main image */}
          <div className='rounded-xl overflow-hidden w-full mb-2 cursor-pointer relative shadow border-1 border-gray-400'>
            <div onClick={() => handleNavigation('left')} className='shadow-3xl absolute z-4 w-12 h-12 bg-white rounded-full top-[40%] left-4 border border-gray-300'>
              <img src="/left.svg" alt="" />
            </div>

            <img className='w-full h-80 lg:h-[480px] object-cover' src={images[selected]} alt="" />

            <div 
            onClick={() => handleNavigation('right')}
            style={{
              rotate: '180deg'
            }}
            className='shadow-3xl absolute z-4 w-12 h-12 bg-white rounded-full top-[40%] right-4 border border-gray-300'>
              <img src="/left.svg" alt="" />
            </div>
          </div>

          {/*image previews */}
          <div
          className='w-full grid h-auto overflow-hidden grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-x-2 gap-y-2'>
            {images.map((image, i) => (
              <div key={i} className='h-[55px] w-[55px] overflow-hidden cursor-pointer rounded-sm'
              onClick={() => handleImageChange(i)} >
                <img src={image} className={`object-cover rounded-sm w-full h-full ${i === selected ? 'border-3' : ''}`} alt="" />
              </div>
            ))}
          </div>
        </div>
  )
}

export default ImageNav