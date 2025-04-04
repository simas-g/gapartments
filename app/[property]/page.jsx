import { getS3ImageUrls } from '../actions/getS3Images';
import { geocoding } from '../actions/geocoding';
import { User } from 'lucide-react';
import ImageNav from '../components/ImageNav';

const fetchPropertyData = async (id) => {
  try {
    const res = await fetch(`${process.env.URL}/api/property?id=${id}`);
    const { property } = await res.json();
    const images = await getS3ImageUrls(property?.id);
    const location = await geocoding(property?.title);
    return {
      ...property,
      images: images.length > 1 ? images.slice(1) : images,
      location: location,
    };
  } catch (error) {
    console.error('Error fetching property data:', error);
    return null;
  }
};

const Page = async ({ params }) => {
  const prop = await fetchPropertyData(params.property);
  if (!prop) return <p>Failed to load property data.</p>;

  return (
    <div className="w-full pb-20 bg-gray-100 md:px-20">
      {/* heading */}
      <div className="p-8 px-8 m-auto flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold">{prop.title}</h1>
        <ul className="flex gap-x-4">
          {prop.add?.map((a, i) => (
            <li
              key={i}
              className="bg-amber-50 border border-gray-700 text-sm font-bold text-gray-700 rounded-3xl px-4 py-[2px]"
            >
              {a.length === 1 ? (
                <div className="flex items-center gap-x-1">
                  <User height={18} width={18} />
                  {a}
                </div>
              ) : (
                a
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* gallery + description */}
      <div className="grid px-8 gap-y-6 gap-x-8 items-start lg:grid-cols-2 lg-grid-flow-col">
        <div className="h-fit flex items-start max-w-4xl justify-start border-gray-300 border rounded-lg">
          <ImageNav images={prop.images} />
        </div>

        <div className="w-full lg:sticky lg:top-20 lg:right-8 h-auto bg-gray-100 border-gray-300 border px-8 p-4 rounded-lg flex flex-col gap-y-3">
          <h5 className="font-extrabold text-xl">Apie apartamentus</h5>
          <div className="text-gray-700">
            {prop.description
              ?.split('.')
              .filter(Boolean)
              .map((sentence, i) => (
                <div key={i}>
                  {i % 3 === 0 && i !== 0 && <br />}
                  {sentence}.
                </div>
              ))}
          </div>

          <div className="border-b border-gray-300 my-3"></div>

          <div className="flex flex-col items-start gap-y-4">
            <div className="flex justify-between w-full text-xl font-bold">
              <p>Kaina nuo</p>
              <p>
                <span>35€</span> / nakčiai
              </p>
            </div>
            <button className="w-full cursor-pointer text-white bg-amber-600 py-3 rounded-lg">
              Kalendorius
            </button>
            <button className="w-full cursor-pointer border-gray-300 py-3 border rounded-lg">
              Susisiekti
            </button>
          </div>
        </div>
        <div className=''>
          <div className='w-full h-12 bg-gray-200 flex items-center justify-around rounded-lg'>
              <h4 className='cursor-pointer w-full justify-center h-full flex items-center'>Žemėlapis</h4>
              <h4 className='cursor-pointer w-full justify-center h-full flex items-center'>Atsiliepimai</h4>
          </div>
        </div>
      </div>
      
      {/* map placeholder */}
      
    </div>
  );
};

export default Page;
