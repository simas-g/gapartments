
import Card from './components/Card';


export default function Home() {
  const properties = [ 
    {
      title: 'Kalniečių g. 219',
      id: 'kalnieciu219/',
      description: "Atsipalaiduokite su visa šeima šioje ramioje vietoje. Jaukūs, naujai įrengti 2iejų kambarių apartamentai. Atskiras įėjimas! Pirmas aukštas! Langai iš kiemo pusės. Nesigirdi miesto triukšmo! Kauno Klinikos pasiekiamos pėstute! Šalia namo maisto prekių parduotuvė “Express Market”, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Mašinai nemokama parkingo vieta prie pat Jūsų buto durų. Talpiname iki 4 asmenų.",
      images: [
        'https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu219/20240815_132619.jpg'
      ],
      price: 35,
      add: [
        '2 kamb.',
        '4',
        'WiFi'
      ]
    },
    {
      title: 'Kalniečių g. 196 (1)',
      id: 'kalnieciu196(1)/',
      description: "Pėstute iki Kauno Klinikų! Viršutiniame panoraminiame 9 ame aukšte dveji 2iejų kambarių apartamentai vienas šalia kito! Langai į kiemą – į privačių namų kvartalą, nesigirdi miesto triukšmo. Šalia maisto prekių parduotuvė “Express Market”, „Maxima“, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi, įstiklintas balkonas. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai.",
      images: [
        'https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu196(1)/20240420_113625.jpg'
      ],
      price: 35,
      add: [
        '2 kamb.',
        '4',
        'WiFi'
      ]
    },
    {
      title: 'Kalniečių g. 196 (2)',
      id: 'kalnieciu196(2)/',
      description: "Pėstute iki Kauno Klinikų! Viršutiniame panoraminiame 9 ame aukšte dveji 2iejų kambarių apartamentai vienas šalia kito! Langai į kiemą – į privačių namų kvartalą, nesigirdi miesto triukšmo. Šalia maisto prekių parduotuvė “Express Market”, „Maxima“, šiek tiek tolėliau prekybos centras “Maxima XXL”. Iki miesto centro 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi, įstiklintas balkonas. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai.",
      images: [
        'https://gapartments.s3.eu-north-1.amazonaws.com/kalnieciu196(2)/20240420_132045.jpg'
      ],
      price: 35,
      add: [
        '2 kamb.',
        '4',
        'WiFi'
      ]
    },
    {
      title: 'Taikos pr. 33B',
      id: 'taikospr33b/',
      description: "Šviesūs ir erdvūs 2iejų kambarių apartamentai. Langai į kiemo pusę, nesigirdi miesto triukšmo. 8ame aukšte, yra liftas. Šalia maisto prekių parduotuvė “Šilas”, 7 min automobiliu iki miestelio „Urmas“ bei miesto centro, 5 min automobiliu iki Zoologijos sodo bei Dariaus ir Girėno stadiono. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi, dveji balkonai. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 4 asmenų.",
      images: [
        'https://gapartments.s3.eu-north-1.amazonaws.com/taikospr33b/20240404_174410.jpg'
      ],
      price: 35,
      add: [
        '2 kamb.',
        '4',
        'WiFi'
      ]
    },
    {
      title: 'Varnių g. 24',
      id: 'varniu24/',
      description: "Dideli ir erdvūs 2iejų kambarių apartamentai. Langai į kiemo pusę, nesigirdi miesto triukšmo. Pirmame namo aukšte konditerijos parduotuvė-kavinukė “Alkava”. Šalia maisto prekių parduotuvė “Iki”, „Rimi“, šiek tiek tolėliau Vilijampolės turgus”. Už poros minučių Neries krantinė su pasivaikščiojimo takais ir vaikų žaidimo aikštelėmis, senamiestis 7 min automobiliu. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 6 asmenų.",
      images: [
        'https://gapartments.s3.eu-north-1.amazonaws.com/varniu24/20240701_142359.jpg'
      ],
      price: 35,
      add: [
        '2 kamb.',
        '4',
        'WiFi'
      ]
    },
    {
      title: 'Nemuno g. 22',
      id: 'nemuno22/',
      description: "Nuomojami 2-ju kambariu apartamentai pačioje senamieščio širdyje. Langai į kiemo pusę, nesigirdi miesto triukšmo. Šalia maisto prekių parduotuvė “Iki”, Žalgirio arena 15 min pėškute. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 6 asmenų.",
      images: [
        'https://gapartments.s3.eu-north-1.amazonaws.com/nemuno22/1.jpg'
      ],
      price: 35,
      add: [
        '2 kamb.',
        '4',
        'WiFi'
      ]
    },
    {
      title: 'Puodžių g. 27',
      id: 'puodziu27/',
      description: "Nuomojama studija per 2 aukštus su kiemeliu rytinei kavai! Langai į kiemo pusę, nesigirdi miesto triukšmo. Žalgirio arena 15 min pėškute. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Mokamas parkingas prie namo gatvėje. Talpiname iki 4 asmenų.",
      images: [
        'https://gapartments.s3.eu-north-1.amazonaws.com/puodziu27/1.jpg'
      ],
      price: 35,
      add: [
        '2 kamb.',
        '4',
        'WiFi'
      ]
    },
    {
      title: 'Linkuvos g. 55',
      id: 'linkuvos55/',
      description: "Butukas su atskiru įėjimu pirmame aukšte! Iki senamieščio 20min pėškute, parduotuvė „Šilas“ 3 min pėškute, Veterinarijos akademija 3 min automobiliu, šalia skausmo klinika „Agatas“. Bute yra visa reikalinga buitinė technika: skalbimo mašina, Šaldytuvas, kaitlentė, gartraukis, virdulys, lygintuvas, Smart TV + Wifi. Rankšluosčiai, patalynė ir visi indai maisto ruošimui, kava bei arbata, prieskoniai. Nemokamas parkingas atviroje namo aikštelėje. Talpiname iki 4 asmenų.",
      images: [
        'https://gapartments.s3.eu-north-1.amazonaws.com/linkuvos55/20240625_134736.jpg'
      ],
      price: 35,
      add: [
        '2 kamb.',
        '4',
        'WiFi'
      ]
    },

  ]
  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="relative h-screen w-full">
        {/* Background Image */}
        <div 
          className="inset-0 bg-cover bg-center z-[-1] fixed"
          style={{
            backgroundImage: "url(/kaunas.jpg)",
            height: '100vh'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-26 h-full flex pt-40 justify-start relative z-1">
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
      <section className="py-16 bg-gray-100 z-2 relative">
          <h3 className='text-center text-4xl text-gray-700 font-bold pb-3'>Mūsų apartamentai</h3>
          <div className=' w-18 rounded-lg h-1 bg-amber-600 m-auto mb-9'></div>
          <div className="grid z-90 place-items-center md:px-20 px-6 gap-y-8 grid-cols-1 md:grid-cols-2 gap-x-8 lg:grid-cols-3 3xl:grid-cols-4">
            {properties.map((prop, i) => (
              <Card 
                property={prop} 
                key={i} 
              />
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