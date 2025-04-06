'use client'
import { useState, useRef, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
const ImageNav = ({ images }) => {
  const [viewing, setViewing] = useState(false)
  const [selected, setSelected] = useState(0)
  const scrollBar = useRef()
  //main image
  const mainImage = images[0]
  //mid images
  const midImages = images.slice(1, 3)
  //smaller images
  const imagePreviews = images.slice(3, 8)

  const handleImageChange = (dir) => {
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
  const handleImage = (i) => {
    setSelected(i)
  }
  const handleImagesView = () => {
    setViewing(true);
  }

  const thumbsRef = useRef([]);

  const scrollToThumb = (index) => {
    if(thumbsRef.current[index]) {
      thumbsRef.current[index].scrollIntoView({
        behavior: "instant",
        inline: "center",
        block: "nearest",
      });
    }

  };
  useEffect(() => {
    if (viewing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; 
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [viewing]);
  
  // Scroll when selected changes
    useEffect(() => {
      scrollToThumb(selected);
      setTimeout(() => {

      }, 500);
    }, [selected]);


  return (
    <div className="max-h-90 grid grid-cols-3 grid-rows-4 gap-2 max-w-4xl w-full h-auto rounded-lg overflow-hidden">
      {/* image viewer */}
      {viewing && (
        <div className="fixed inset-0 z-100 bg-black/50 backdrop-blur-md px-6 py-6">
          <div className="w-full flex justify-end">
            <div className="cursor-pointer hover:bg-black/10" onClick={() => setViewing(false)}>
              <X width={40} height={40} color="white"/>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-4 mt-8">
            <div className="select-none w-80 h-80 max-[90%] sm:w-100 sm:h-[450px] overflow-hidden">
              <img src={images[selected]} className="object-cover object-center w-full h-full" alt="" />
            </div>
            <div className="text-white">
              {selected + 1} / {images.length}
            </div>
            <div className="flex gap-x-6">
              <div onClick={()=> handleImageChange('left')} className="sm:absolute top-[30%] sm:top-[40%] left-4 cursor-pointer bg-black/50 rounded-full p-2">
                <ChevronLeft width={40} height={40} color="white"/>
              </div>
              <div onClick={()=> handleImageChange('right')} className="sm:absolute top-[30%] sm:top-[40%] right-4 cursor-pointer bg-black/50 rounded-full p-2">
                <ChevronRight width={40} height={40} color="white"/>
              </div>
            </div>

            <div ref={scrollBar} 
            className="flex gap-x-4 overflow-x-auto max-w-[400px] md:max-w-[600px] px-4 scroll-smooth"
            style={{ scrollbarWidth: "none" }}

            >
              
            {images.map((image, i) => (
                <div

                  ref={(el) => (thumbsRef.current[i] = el)}
                  key={i}
                  className={`select-none w-20 h-20 flex-shrink-0 overflow-hidden cursor-pointer rounded-sm ${
                    i === selected ? 'border-2 border-white' : 'opacity-40'
                  }`}
                  onClick={() => handleImage(i)}
                >
                  <img src={image} className="object-cover rounded-sm w-full h-full" alt="" />
                </div>
              ))}
            </div>

          </div>
          </div>
          
      )}
      {/* main image */}
      <div className="col-span-2 row-span-3 cursor-pointer select-none" onClick={() => handleImagesView()}>

        <img
          src={mainImage}
          className="object-cover rounded-lg w-full h-full"
          alt=""
        />
      </div>

      {/* mid images */}
      <div className="flex flex-col gap-2 col-span-1 row-span-3 select-none">
        {midImages.map((image, i) => (
          <div
            key={i}
            className="overflow-hidden cursor-pointer rounded-sm"
            onClick={() => handleImagesView()}
          >
            <img
              src={image}
              className={`object-cover rounded-sm w-full h-full`}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Image Previews */}
    <div className="grid grid-cols-5 gap-2 col-span-3 row-span-1 select-none">
      {imagePreviews.map((image, i) => (
        <div
          key={i}
          className="overflow-hidden cursor-pointer rounded-sm relative"
          onClick={() => handleImagesView()}
          
        >
          {/* Overlay for the last image preview */}
          {i === imagePreviews.length - 1 && (
            <div style={{
              backdropFilter: 'blur(6px)',
            }} className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold rounded-sm sm:text-xs text-[10px] px-2">
              Peržiūrėti visas nuotraukas ({images.length})
            </div>
          )}
          <img
            src={image}
            className={`object-cover rounded-sm w-full h-full`}
            alt=""
          />
        </div>
      ))}
    </div>

    </div>
  )
}

export default ImageNav
