import {getS3ImageUrls} from '../actions/getS3Images'
import ImageNav from '../components/ImageNav';
const getProperty = async ({id}) => {
    const data = await fetch(`${process.env.URL}/api/property?id=${id}`)
    const {property} = await data.json();
    return property
  }

const page = async ({params}) => {
    const id = (await params).property
    const prop = await getProperty({id})
    const idd = prop?.id;
    const images = await getS3ImageUrls(`${idd}`)
    let newImages
    newImages = images.slice(1, images?.length);

  return (
    <div className="w-full pb-20">
      {/* navigation overlay */}
      <div className="absolute top-0 overflow-x-hidden w-full z-[-2] h-32">
        <div className="w-full h-full bg-[#9D774F] absolute"></div>
      </div>

      {/* heading */}
      <div className=' p-8 px-8 m-auto flex flex-col gap-y-2'>
        <h1 className='text-3xl font-bold text-gray-800'>{prop?.title}</h1>
        <ul className='flex gap-x-4'>{prop?.add?.map((a, i) => (
          <li key={i} className='bg-[#9D774F] text-white text-sm rounded-3xl px-4'>
          {a.length === 1 ? (
            <div className='flex items-center gap-x-1'>
              <img width={15} height={15} src='/user.svg'></img>
              {a}
            </div>
          ) : (
            a
          )}
        </li>
        ))}
        </ul>
      </div>

      {/* gallery + descr */}
      <div className='grid px-8 gap-y-6 justify-items-stretch lg:grid-cols-3 gap-x-8'>
        <ImageNav images={newImages}></ImageNav>

        <div className='w-full h-auto md:max-h-[480px] bg-[#f4ddc5] px-8 p-4 rounded-lg flex flex-col gap-y-3'>
          <h5 className='font-bold text-xl tracking-wide'>Apie apartamentus</h5>
          <p>
            {prop?.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default page