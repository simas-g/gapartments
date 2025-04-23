
import fetchPropertyData from '@/lib/fetchPropertyData';
import { User } from 'lucide-react';
import { properties } from '@/lib/properties';
export const dynamicParams = false
export async function generateStaticParams() {

  return properties.map((p) => ({
    property: p.id.replace(/\/$/, ''),
  }));
}
import GalleryDesc from '../components/GalleryDesc';


const Page = async ({ params }) => {
  const property = (await params).property
  const prop = await fetchPropertyData(property);
  return (
    <div className="w-full pb-20 bg-gray-100 md:px-20" id='top-page'>
      {/* heading */}
      <div className="p-8 px-8 m-auto flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold">{prop?.title}</h1>
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
