import FullMap from "../components/FullMap";
import Form from "../components/Form";
import Info from "../components/Info";
import { getTranslations } from "next-intl/server";
const sharedMeta = {
  title: 'Giedre Apartments - susisiekite su mumis',
  description: 'Apartamentai kaune išsidėstę jums patogiose vietose su reikalinga buitine technika, patogumais ir viskuo ko reikia, kad jaustumėtės kaip namuose.',
  image: '/kaunas.jpg',
};

export const metadata = {
  title: sharedMeta.title,
  description: sharedMeta.description,
  openGraph: {
    title: sharedMeta.title,
    description: sharedMeta.description,
    url: 'https://gapartments.lt/susisiekti',
    type: 'website',
    images: [
      {
        url: sharedMeta.image,
        width: 1200,
        height: 630,
        alt: 'Giedre Apartments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: sharedMeta.title,
    description: sharedMeta.description,
    images: [sharedMeta.image],
  },
};

const Page = async () => {
  const t = await getTranslations('ContactPage')
  return (
    <div className="relative w-full min-h-screen py-20">
      {/* Full screen background map */}
      <div className="absolute inset-0 z-0">
        <FullMap empty={true} />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/10 z-5"></div>

      {/* Content container */}
      <div className="w-full px-4">
        <div className="relative z-7 md:w-3xl lg:w-4xl border shadow-2xl container mx-auto px-10 py-12 w-fit bg-white rounded-lg p-4">
          {/* Page heading */}
          <div className="text-center mb-12 bg-white/20 rounded-md p-2 w-fit m-auto backdrop-blur-md">
            <h1 className="text-4xl font-bold drop-shadow-md">
              {t('heading')}
            </h1>
            <p className="mt-2 max-w-2xl mx-auto drop-shadow">
              {t('description')}
            </p>
          </div>

          {/* Cards container */}
          <div className="grid md:grid-cols-2 md:place-items-start place-items-center gap-12 max-w-4xl mx-auto">
            <Form />
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
