
'use client'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react';
import { getS3ImageUrls } from './actions/getS3Images';
const Card = ({property, count, setCount}) => {
  const [image, setImage] = useState();
  const [imageIndex, setImageIndex] = useState(0)
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
      className="md:h-[500px] fade-in-container pb-20 rounded-xl max-w-5xl w-full md:px-20 relative flex flex-col justify-center items-center mt-10 bg-gray-100 pt-8">
      <div className='flex flex-col w-full h-full'>
        <h4 className='text-xl font-semibold text-center'>{property?.title}</h4>
        <div className='flex items-center flex-col md:flex-row gap-y-4 md:items-start'>
        <p className='text-justify max-w-90  mt-5 text-gray-600 font-light'>
          {property?.description}
        </p>
        <div className='grid grid-cols-4 gap-x-1 gap-y-1 px-12 mt-6'>
        {property?.images?.length > 0 && (
          images.slice(1, 9).map((image, i) => (
            <div
              className='cursor-pointer w-24 h-24 relative'
              key={i}
              onClick={() => handleImageSelect(image, i)}
            > 
              <Image 
                src={`${image}`}  
                fill
                style={{ objectFit: 'cover' }} 
                alt='gapartments'
              />
            </div>
          ))
        )}

      </div>
        </div>

      </div>
      <div className='pb-10 md:absolute flex md:justify-between justify-center gap-x-40 w-full'>
      {/*arrow left*/}
      <div onClick={moveLeft} className='md:absolute flex items-center justify-center bg-white rounded-full opacity-80 left-6 h-14 w-14 hover:bg-gray-200 mx-2 cursor-pointer'>
        <Image src='/left.svg' width={30} height={30} alt='left'/>
        </div>

        {/*arrow right*/}
        <div onClick={moveRight} className='md:absolute flex items-center justify-center bg-white rounded-full opacity-80 right-6 h-14 w-14 hover:bg-gray-200 mx-2 cursor-pointer'>
          <Image src='/right.svg' width={30} height={30} alt='left'/>
        </div>
      </div>
      <div className='flex gap-2 absolute bottom-8 z-90'>
          {[...Array(7)].map((_, index) => (
            <div onClick={() => setCount(index)} key={index} className={`${count === index ? 'bg-black w-4 h-2': 'bg-gray-300 w-2 h-2'} rounded-full cursor-pointer`}> 
              
            </div>
          ))}
      </div>
      {image && (
        <div className='fixed inset-0 z-90 flex items-center justify-center bg-black/40 backdrop-blur-sm'> 
          <div className='flex flex-col items-center justify-center'>
          <div onClick={() => setImage(false)} className='absolute right-[5px] top-[5px] p-2 z-200 hover:bg-gray-100/20 rounded-md cursor-pointer'>
            <Image 
            style={{ 
              userSelect: 'none',

            }} src={'/close.svg'} width={50} height={50} alt='close'></Image>
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
  const imagePrefixes = useRef(['kalnieciu219/', 'kalnieciu196/', 'taikospr33b/', 'varniu24/', 'nemuno22/', 'puodziu27/', 'linkuvos55/'])
  useEffect(() => {
    for(const prefix of imagePrefixes.current) {
      getS3ImageUrls(prefix).then((urls) => {
        setProperties(prev => prev.map(property => 
          prefix.startsWith(property.id) ? {...property, images: urls} : property
        ));        
      })
    }
  }, [])
  const [propertyCount, setPropertyCount] = useState(0)
  const [properties, setProperties] = useState([ 
    {
      title: 'Kalniečių g. 219',
      id: 'kalnieciu219/',
      description: "Atsipalaiduokite su visa šeima šioje ramioje vietoje. Jaukūs, naujai įrengti 2iejų kambarių apartamentai. Atskiras įėjimas! Pirmas aukštas! Langai iš kiemo pusės. Nesigirdi miesto triukšmo! Kauno Klinikos pasiekiamos pėstute! Šalia namo maisto prekių parduotuvė “Express Market”, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Mašinai nemokama parkingo vieta prie pat Jūsų buto durų. Talpiname iki 4 asmenų.",
      images: [
        
      ]
    },
    {
      title: 'Kalniečių g. 196',
      id: 'kalnieciu196/',
      description: "Pėstute iki Kauno Klinikų! Viršutiniame panoraminiame 9 ame aukšte dveji 2iejų kambarių apartamentai vienas šalia kito! Langai į kiemą – į privačių namų kvartalą, nesigirdi miesto triukšmo. Šalia maisto prekių parduotuvė “Express Market”, „Maxima“, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi, įstiklintas balkonas. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai.",
      images: [
        
      ]
    },
    {
      title: 'Taikos pr. 33',
      id: 'taikospr33b/',
      description: "Šviesūs ir erdvūs 2iejų kambarių apartamentai. Langai į kiemo pusę, nesigirdi miesto triukšmo. 8ame aukšte, yra liftas. Šalia maisto prekių parduotuvė “Šilas”, 7 min automobiliu iki miestelio „Urmas“ bei miesto centro, 5 min automobiliu iki Zoologijos sodo bei Dariaus ir Girėno stadiono. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi, dveji balkonai. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 4 asmenų.",
      images: [
        
      ]
    },
    {
      title: 'Varnių g. 24',
      id: 'varniu24/',
      description: "Dideli ir erdvūs 2iejų kambarių apartamentai. Langai į kiemo pusę, nesigirdi miesto triukšmo. Pirmame namo aukšte konditerijos parduotuvė-kavinukė “Alkava”. Šalia maisto prekių parduotuvė “Iki”, „Rimi“, šiek tiek tolėliau Vilijampolės turgus”. Už poros minučių Neries krantinė su pasivaikščiojimo takais ir vaikų žaidimo aikštelėmis, senamiestis 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 6 asmenų.",
      images: [
        
      ]
    },
    {
      title: 'Nemuno g. 22',
      id: 'nemuno22/',
      description: "Nuomojami 2-ju kambariu apartamentai pačioje senamieščio širdyje. Langai į kiemo pusę, nesigirdi miesto triukšmo. Šalia maisto prekių parduotuvė “Iki”, Žalgirio arena 15 min pėškute. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 6 asmenų.",
      images: [
        
      ]
    },
    {
      title: 'Puodžių g. 27',
      id: 'puodziu27/',
      description: "Nuomojama studija per 2 aukštus su kiemeliu rytinei kavai! Langai į kiemo pusę, nesigirdi miesto triukšmo. Žalgirio arena 15 min pėškute. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Mokamas parkingas prie namo gatvėje. Talpiname iki 4 asmenų.",
      images: [
        
      ]
    },
    {
      title: 'Linkuvos g. 55',
      id: 'linkuvos55/',
      description: "Butukas su atskiru įėjimu pirmame aukšte! Iki senamieščio 20min pėškute, parduotuvė „Šilas“ 3 min pėškute, Veterinarijos akademija 3 min automobiliu, šalia skausmo klinika „Agatas“. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 4 asmenų.",
      images: [
      ]
    },

  ])
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
        <div className="container mx-auto px-4 md:px-20 h-full flex items-center justify-start relative z-1">
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
            <Card property={properties[propertyCount]} count={propertyCount} setCount={setPropertyCount}></Card>
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