import { getS3ImageUrls } from '../actions/getS3Images';
import { geocoding } from '../actions/geocoding';
import { User } from 'lucide-react';
import ImageNav from '../components/ImageNav';
import PropNavigation from '../components/PropNavigation';
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
  const property = (await params).property
  const prop = await fetchPropertyData(property);
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
      <div className="grid px-8 gap-y-6 gap-x-8 items-start lg:grid-cols-2 lg-grid-flow-col-dense">
        <div className="h-fit flex flex-col max-w-4xl">
          <ImageNav images={prop.images} />
          <div className='order-3 w-full h-12 bg-gray-200 flex items-center justify-around rounded-lg mt-6'>
            <h4 className='lg:hidden cursor-pointer w-full justify-center h-full flex items-center'>Informacija</h4>
            <h4 className='cursor-pointer w-full justify-center h-full flex items-center'>Žemėlapis</h4>
            <h4 className='cursor-pointer w-full justify-center h-full flex items-center'>Atsiliepimai</h4>
          </div>
        </div>
        <PropNavigation prop={prop}/>
        

      </div>      
    </div>
  );
};

export default Page;
