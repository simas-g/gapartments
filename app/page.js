import Link from "next/link";
import Card from "./components/Card";
import { properties } from "@/lib/properties";
import { useTranslations } from "next-intl";
const sharedMeta = {
  title: "Giedre Apartments",
  description:
    "Apartamentai kaune išsidėstę jums patogiose vietose su reikalinga buitine technika, patogumais ir viskuo ko reikia, kad jaustumėtės kaip namuose.",
  image: "/kaunas.jpg",
};

export const metadata = {
  title: sharedMeta.title,
  description: sharedMeta.description,
  openGraph: {
    title: sharedMeta.title,
    description: sharedMeta.description,
    url: "https://gapartments.lt",
    type: "website",
    images: [
      {
        url: sharedMeta.image,
        width: 1200,
        height: 630,
        alt: "Giedre Apartments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: sharedMeta.title,
    description: sharedMeta.description,
    images: [sharedMeta.image],
  },
};

export default function Home() {
  const t = useTranslations("Hero");
  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="relative h-[90vh] w-full">
        {/* Background Image */}
        <div
          className="inset-0 bg-cover bg-center z-[-1] fixed"
          style={{
            backgroundImage: "url(/kaunas.jpg)",
            height: "100%",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-26 h-full flex pt-40 justify-start relative z-1">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-[--font-poppins-sans] mb-4">
              {t("title")}
              <br />
              <span className="block text-6xl md:text-8xl uppercase font-bold mt-2">
                {t("city")}
              </span>
            </h1>

            <p className="text-xl md:text-2xl tracking-wider opacity-90 max-w-md">
              {t("description")}
            </p>

            <div className="mt-8 flex space-x-4">
              <Link
                href="/susisiekti"
                className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
              >
                {t('link')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Properties Preview Section */}
      <section className="py-16 bg-gray-100 z-2 relative">
        <h3 className="text-center px-5 text-4xl text-gray-700 font-bold pb-3">
          {t('heading')}
        </h3>
        <div className=" w-18 rounded-lg h-1 bg-amber-600 m-auto mb-9"></div>
        <div className="grid z-90 place-items-center md:px-20 px-6 gap-y-8 grid-cols-1 md:grid-cols-2 gap-x-8 lg:grid-cols-3 3xl:grid-cols-4">
          {properties.map((prop, i) => (
            <Card property={prop} key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
