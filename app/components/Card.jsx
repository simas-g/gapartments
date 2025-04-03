'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
const Card = ({property, count, setCount, isVisible}) => {
  const [image, setImage] = useState();
  const [imageIndex, setImageIndex] = useState(0)
  const [animate, setAnimate] = useState(false);
  const handleImageSelect = (image, i) => {
    setImage(image);
    setImageIndex(i + 1);
  }
  const handleIndexChange = (d) => {
    setImageIndex(prevIndex => {
      let newIndex;
      if (d === 'right') {
        newIndex = prevIndex < 8 ? prevIndex + 1 : 1;
      } else {
        newIndex = prevIndex > 1 ? prevIndex - 1 : property.images.length - 1;
      }
      
      setImage(property.images[newIndex]); 
      return newIndex; 
    });
  };
  useEffect(() => {
    setAnimate(true);
  }, [count])
  const images = property?.images;
  const moveLeft = () => {
    console.log(count);
    if(count === 0) {
      setCount(prev => 6)
    } else setCount(prev => prev - 1);
  }
  const moveRight = () => {
    if(count === 6) {
      setCount(prev=>0)
    } else setCount(prev => prev + 1);
    console.log(count);

  }
  return (
    <div 
    className="border bg-white border-gray-300 shadow rounded-lg overflow-hidden h-fit max-w-[400px]"
  >
      
      <div className='p-4 gap-y-4 flex flex-col'>
        <div className='bg-white flex items-center gap-x-4'>
          <Image src={`/pin.svg`} width={30} height={30} alt='map'></Image>
          <h3 className='font-bold text-xl'>{property.title}</h3>
        </div>

        <div className='flex gap-x-4'>
          {(property?.add)?.map((a, i) => (
            <div key={i} className='py-1 bg-amber-800 text-white text-sm rounded-3xl px-4'>
              {a.length === 1 ? (
                <div className='flex items-center gap-x-1'>
                  <img width={15} height={15} src='/user.svg'></img>
                  {a}
                </div>
              ) : (
                a
              )}
            </div>
          ))}
        </div>

        <div className='text-gray-600 line-clamp-6'>
          {property.description}
        </div>
        <div className='flex flex-wrap items-center justify-between gap-y-3'>
          <div className='flex items-center gap-x-2'>
            <p className='font-normal text-gray-500'>nuo</p>
            <p className='font-bold text-xl'>{property.price}€</p>
            <p className='text-gray-500 text-sm mt-2'>/ nakčiai</p>
          </div>
          <Link href={`/${property.id}`} className='bg-amber-600 text-gray-100 w-fit cursor-pointer px-4 py-2 rounded-lg'>
            Daugiau informacijos
          </Link>
        </div>

      </div>
      <div className='h-48 border-amber-500 border overflow-hidden rounded-b-lg'>
        <img src={property.images[2]} className='w-full h-full object-cover'></img>
      </div>
    </div>
  )
}
export default Card