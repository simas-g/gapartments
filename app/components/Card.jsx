import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
const Card = ({property}) => {
  const t = useTranslations('Card')
  const propT = useTranslations(`properties.id[${property.id}]`)
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
            <div key={i} className='py-1 bg-amber-600 text-white text-sm rounded-3xl px-4'>
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
            <p className='font-normal text-gray-500'>{t('from')}</p>
            <p className='font-bold text-xl'>{property.price}€</p>
            <p className='text-gray-500 text-sm mt-2 mr-3'>/ {t('night')}</p>
          </div>
          <Link href={`/${property.id}`} className='bg-amber-600 text-gray-100 w-fit cursor-pointer px-4 py-2 rounded-lg'>
            {t("moreInfo")}
          </Link>
        </div>

      </div>
      <div className='h-48 overflow-hidden rounded-b-lg items-center flex'>
        <img src={property.images[0]} className='w-auto h-auto object-cover object-center'></img>
      </div>
    </div>
  )
}
export default Card