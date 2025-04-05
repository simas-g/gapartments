'use client'

import { useState } from "react"

const ImageNav = ({ images }) => {
  const [selected, setSelected] = useState(0)
  //main image
  const mainImage = images[0]
  //mid images
  const midImages = images.slice(1, 3)
  //smaller images
  const imagePreviews = images.slice(3, 8)

  const handleImageChange = (i) => {
    setSelected(i)
    console.log(i)
  }

  const handleNavigation = (dir) => {
    if (dir === 'right') {
      if (selected < images?.length - 1) {
        setSelected((prev) => prev + 1)
      } else setSelected(0)
    } else {
      if (selected > 0) {
        setSelected((prev) => prev - 1)
      } else setSelected(images?.length - 1)
    }
  }

  return (
    <div className="grid order-1 grid-cols-3 grid-rows-4 gap-2 max-w-4xl w-full h-auto rounded-lg overflow-hidden">
      {/* main image */}
      <div className="col-span-2 row-span-3">
        <img
          src={mainImage}
          className="object-cover rounded-lg w-full h-full"
          alt=""
        />
      </div>

      {/* mid images */}
      <div className="flex flex-col gap-2 col-span-1 row-span-3">
        {midImages.map((image, i) => (
          <div
            key={i}
            className="overflow-hidden cursor-pointer rounded-sm"
            onClick={() => handleImageChange(i + 1)}
          >
            <img
              src={image}
              className={`object-cover rounded-sm w-full h-full ${i === selected ? 'border-3 border-amber-700' : ''}`}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Image Previews */}
<div className="grid grid-cols-5 gap-2 col-span-3 row-span-1">
  {imagePreviews.map((image, i) => (
    <div
      key={i}
      className="overflow-hidden cursor-pointer rounded-sm relative"
      onClick={() => handleImageChange(i + 3)}
    >
      {/* Overlay for the last image preview */}
      {i === imagePreviews.length - 1 && (
        <div style={{
          backdropFilter: 'blur(6px)',
        }} className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 text-white font-bold rounded-sm">
          Peržiūrėti visas nuotraukas ({images.length})
        </div>
      )}
      <img
        src={image}
        className={`object-cover rounded-sm w-full h-full ${i === selected ? 'border-3 border-amber-700' : ''}`}
        alt=""
      />
    </div>
  ))}
</div>

    </div>
  )
}

export default ImageNav
