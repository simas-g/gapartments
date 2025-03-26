
'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
const Card = (property) => {
  return (
    <div 
      className="h-auto min-h-[400px] rounded-xl max-w-5xl w-full md:px-20 relative flex flex-col justify-center items-center mt-10 bg-gray-100 pt-8" 
      style={{
        gridColumn: 1,
        gridRow: 1,
      }}>

      <div className='text-center w-full h-full'>
        <h4 className='text-xl font-semibold'>Kalniečių g. 219</h4>
        <p className='px-18 text-left mt-5 text-gray-600 font-light'>
        Atsipalaiduokite su visa šeima šioje ramioje vietoje. Jaukūs, naujai įrengti 2iejų kambarių apartamentai. Atskiras įėjimas! Pirmas aukštas! Langai iš kiemo pusės. Nesigirdi miesto triukšmo! Kauno Klinikos pasiekiamos pėstute! Šalia namo maisto prekių parduotuvė “Express Market”, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Mašinai nemokama parkingo vieta prie pat Jūsų buto durų. Talpiname iki 4 asmenų.
        </p>
      </div>
      <div>
        Galerija
      </div>
      <div className='pb-10 md:absolute top-[270px] flex md:justify-between justify-center gap-x-40 w-full'>
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
    </div>
  )
}
export default function Home() {
  const properties = [
    {
      title: 'Kalniečių g. 219',
      description: "Atsipalaiduokite su visa šeima šioje ramioje vietoje. Jaukūs, naujai įrengti 2iejų kambarių apartamentai. Atskiras įėjimas! Pirmas aukštas! Langai iš kiemo pusės. Nesigirdi miesto triukšmo! Kauno Klinikos pasiekiamos pėstute! Šalia namo maisto prekių parduotuvė “Express Market”, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Mašinai nemokama parkingo vieta prie pat Jūsų buto durų. Talpiname iki 4 asmenų.",
      images: [
        
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