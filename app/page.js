
'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { getS3ImageUrls } from './actions/getS3Images';
const Card = ({property}) => {
  const [ds, setDs] = useState('')
  const [image, setImage] = useState();
  const [imageIndex, setImageIndex] = useState(0)
  useEffect(() => {
    function firstFiveSentences(description) {
      if(window?.innerWidth > 600) {
        return description
      }
      const sentencesArray = description.split('.');
    
      const firstFive = sentencesArray.slice(0, 4);
    
      const result = firstFive.join('.') + (firstFive.length > 0 && description.endsWith('.') ? '.' : '');
    
      return result;
    }
    setDs(firstFiveSentences(property?.description));
    getS3ImageUrls().then((urls) => {
      if (urls.length > 0) {
        console.log("Image URLs from S3:");
        urls.forEach((url) => console.log(url));
      } else {
        console.log("No images found in the specified S3 bucket and prefix.");
      }
    });
  }, [])
  const handleImageSelect = (image, i) => {
    setImage(image);
    setImageIndex(i);
  }
  const handleIndexChange = (d) => {
    if(d === 'right') {
      if (imageIndex < property?.images?.length - 1) {
        setImageIndex(prev => prev + 1);
      } else {
        setImageIndex(0);
      }
    }
    if(d === 'left') {
      if(imageIndex != 0) {
        setImageIndex(prev => prev - 1);
      } else setImageIndex(images.length - 1)
    }
    setImage(property.images[imageIndex])

  }
  const images = property?.images;
  return (
    <div 
      className="h-auto pb-20 rounded-xl max-w-5xl w-full md:px-20 relative flex flex-col justify-center items-center mt-10 bg-gray-100 pt-8">
      <div className='flex flex-col w-full h-full'>
        <h4 className='text-xl font-semibold text-center'>{property?.title}</h4>
        <div className='flex items-center flex-col md:flex-row gap-y-4 md:items-start'>
        <p className='text-justify max-w-90  mt-5 text-gray-600 font-light'>
          {ds}
        </p>
        <div className='grid grid-cols-4 gap-x-1 gap-y-1 px-12 mt-6'>
        {property?.images?.length > 0 && (
          images.slice(0, 8).map((image, i) => (
            <div className='cursor-pointer' key={i} onClick={() => handleImageSelect(image, i)}> 
              <Image src={`${image}`}  width={100} height={100} alt='gapartments'></Image>
            </div>
          ))
        )}
      </div>
        </div>

      </div>

      <div className='pb-10 md:absolute flex md:justify-between justify-center gap-x-40 w-full'>
      {/*arrow left*/}
      <div className='md:absolute flex items-center justify-center bg-white rounded-full opacity-80 left-6 h-14 w-14 hover:bg-gray-200 mx-2 cursor-pointer'>
        <Image src='/left.svg' width={30} height={30} alt='left'/>
        </div>

        {/*arrow right*/}
        <div className='md:absolute flex items-center justify-center bg-white rounded-full opacity-80 right-6 h-14 w-14 hover:bg-gray-200 mx-2 cursor-pointer'>
          <Image src='/right.svg' width={30} height={30} alt='left'/>
        </div>
      </div>
      <div className='flex gap-2 absolute bottom-8 z-10'>
          {[...Array(8)].map((_, index) => (
            <div key={index} className='h-2 w-2 bg-gray-200 rounded-full'> 
              
            </div>
          ))}
      </div>
      {image && (
        <div className='fixed inset-0 z-60 flex items-center justify-center bg-black/40 backdrop-blur-sm'> 
          <div className='flex flex-col items-center justify-center'>
          <div onClick={() => setImage(false)} className='absolute right-[5px] top-[5px] p-2 z-90 hover:bg-gray-100/20 rounded-md cursor-pointer'>
            <Image style={{ userSelect: 'none' }} src={'/close.svg'} width={50} height={50} alt='close'></Image>
          </div>

          
            <Image  style={{ userSelect: 'none' }}
            src={image} width={300} height={300} alt='gapartments'></Image>
            <div className='absolute w-full flex mt-[500px] md:mt-0 justify-center'>
            <div onClick={() => handleIndexChange('left')} 
            className='md:absolute flex items-center justify-center rounded-full opacity-80 md:left-6 h-14 w-14 hover:bg-gray-100/20 mx-2 cursor-pointer'>
              <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>
                  {`.c{fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;}`}
                </style>
              </defs>
              <g id="a" />
              <g id="b">
                <g>
                  <line className="c" x1="8.62" x2="15.38" y1="12" y2="5.5" />
                  <line className="c" x1="8.62" x2="15.38" y1="12" y2="18.5" />
                </g>
              </g>
            </svg>
            </div>

            <div onClick={() => handleIndexChange('right')} 
            className='md:absolute flex items-center justify-center rounded-full opacity-80 md:right-6 h-14 w-14 hover:bg-gray-100/20 mx-2 cursor-pointer'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width='50'
                height='50'
                style={{
                  rotate: '180deg'
                }}
              >
                <defs>
                  <style>
                    {`.c{fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;}`}
                  </style>
                </defs>
                <g id="a" />
                <g id="b">
                  <g>
                    <line className="c" x1="8.62" x2="15.38" y1="12" y2="5.5" />
                    <line className="c" x1="8.62" x2="15.38" y1="12" y2="18.5" />
                  </g>
                </g>
              </svg>
            </div>
            </div>

          </div>

          
        </div>
      )}
    </div>
  )
}
export default function Home() {
  const properties = [
    {
      title: 'Kalniečių g. 219',
      description: "Atsipalaiduokite su visa šeima šioje ramioje vietoje. Jaukūs, naujai įrengti 2iejų kambarių apartamentai. Atskiras įėjimas! Pirmas aukštas! Langai iš kiemo pusės. Nesigirdi miesto triukšmo! Kauno Klinikos pasiekiamos pėstute! Šalia namo maisto prekių parduotuvė “Express Market”, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Mašinai nemokama parkingo vieta prie pat Jūsų buto durų. Talpiname iki 4 asmenų.",
      images: [
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_132619.jpg",
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_132708.jpg",
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_132715.jpg",
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_133029.jpg",
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_133053.jpg",
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_133503.jpg",
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_133513.jpg",
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_133724.jpg",
         "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240914_121311+(1).jpg",
         "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240914_122009.jpg",
         "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240914_122026.jpg",
        "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240914_122112+(1).jpg",
         "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240914_122335.jpg",
         "https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240914_122348.jpg"
      ]
    },
    {
      title: 'Kalniečių g. 196',
      description: "Pėstute iki Kauno Klinikų! Viršutiniame panoraminiame 9 ame aukšte dveji 2iejų kambarių apartamentai vienas šalia kito! Langai į kiemą – į privačių namų kvartalą, nesigirdi miesto triukšmo. Šalia maisto prekių parduotuvė “Express Market”, „Maxima“, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi, įstiklintas balkonas. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai.",
      images: [
        
      ]
    },
    {
      title: 'Taikos pr. 33',
      description: "Šviesūs ir erdvūs 2iejų kambarių apartamentai. Langai į kiemo pusę, nesigirdi miesto triukšmo. 8ame aukšte, yra liftas. Šalia maisto prekių parduotuvė “Šilas”, 7 min automobiliu iki miestelio „Urmas“ bei miesto centro, 5 min automobiliu iki Zoologijos sodo bei Dariaus ir Girėno stadiono. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi, dveji balkonai. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 4 asmenų.",
      images: [
        
      ]
    }
  ]
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="inset-0 bg-cover bg-center z-[-1] fixed"
          style={{
            backgroundImage: "url(/kaunas.jpg)",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-20 h-full flex items-center justify-start relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-[--font-poppins-sans] mb-4">
              Apartamentai <br/> 
              <span className="block text-6xl md:text-8xl uppercase font-bold mt-2">Kaune</span>
            </h1>
            
            <p className="text-xl md:text-2xl tracking-wider opacity-90 max-w-md">
              Išsidėstę jums patogiose vietose
            </p>

            <div className="mt-8 flex space-x-4">
              <a 
                href="#properties" 
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Žemėlapis
              </a>
              <a 
                href="#contact" 
                className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
              >
                Susisiekti
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Properties Preview Section */}
      <section className="py-16 bg-white">
          <h3 className='text-center text-3xl font-bold'>Mūsų apartamentai</h3>
          <div className="grid place-items-center md:px-20 px-6">
          {properties.map((property, index) => (
            <Card key={index} property={property}></Card>
          ))}
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 gapartments.lt Visos teisės saugomos.
          </p>
        </div>
      </footer>
    </div>
  );
}