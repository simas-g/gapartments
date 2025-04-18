import { getS3ImageUrls } from '../actions/getS3Images';
import { geocoding } from '../actions/geocoding';
import { User } from 'lucide-react';

import GalleryDesc from '../components/GalleryDesc';
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
        <h1 className="text-3xl font-bold">{prop?.name}</h1>
        <ul className="flex gap-x-4">
          {prop?.add?.map((a, i) => (
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
      <GalleryDesc prop={prop} />
    </div>
  );
};

export default Page;
