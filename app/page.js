
import Card from './components/Card';
import {properties} from '@/lib/properties'

export default function Home() {

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