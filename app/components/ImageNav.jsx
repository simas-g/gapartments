"use client";
import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
const ImageNav = ({ images }) => {
  const t = useTranslations("PropertyPage");
  const [viewing, setViewing] = useState(false);
  const [selected, setSelected] = useState(0);
  const scrollBar = useRef();
  //main image
  const mainImage = images[0];
  //mid images
  const midImages = images.slice(1, 3);
  //smaller images
  const imagePreviews = images.slice(3, 8);

  const handleImageChange = (dir) => {
    if (dir === "right") {
      if (selected < images?.length - 1) {
        setSelected((prev) => prev + 1);
      } else setSelected(0);
    } else {
      if (selected > 0) {
        setSelected((prev) => prev - 1);
      } else setSelected(images?.length - 1);
    }
  };
  const handleImage = (i) => {
    setSelected(i);
  };
  const handleImagesView = () => {
    setViewing(true);
  };

  const thumbsRef = useRef([]);

  const scrollToThumb = (index) => {
    if (thumbsRef.current[index]) {
      thumbsRef.current[index].scrollIntoView({
        behavior: "instant",
        inline: "center",
        block: "nearest",
      });
    }
  };
  useEffect(() => {
    if (viewing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [viewing]);

  // Scroll when selected changes
  useEffect(() => {
    scrollToThumb(selected);
    setTimeout(() => {}, 500);
  }, [selected]);

  return (
    <div className="h-auto grid grid-cols-3 grid-rows-4 gap-2 max-w-4xl w-full rounded-lg overflow-hidden">
      {/* image viewer */}
      {viewing && (
        <div className="fixed inset-0 z-100 bg-white px-6 md:py-6">
          <div className="w-full flex justify-end absolute right-3 top-3">
            <div
              className="cursor-pointer flex items-center border border-black gap-x-1 px-2 p-1 bg-gray-300 rounded-full"
              onClick={() => setViewing(false)}
            >
              <p>Uždaryti</p>
              <X size={28} color="black" strokeWidth={2} />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-4 md:mt-8">
            <div className="select-none w-[400px] h-[400px] max-[90%] sm:w-100 sm:h-[450px] overflow-hidden flex items-center">
              <img
                src={images[selected]}
                className="object-cover object-center w-full h-auto"
                alt=""
              />
            </div>
            <div className="text-black">
              {selected + 1} / {images.length}
            </div>
            <div className="flex gap-x-6">
              <div
                onClick={() => handleImageChange("left")}
                className="sm:absolute top-[30%] sm:top-[40%] left-5 cursor-pointer"
              >
                <ChevronLeft width={50} height={50} color="black" />
              </div>
              <div
                onClick={() => handleImageChange("right")}
                className="sm:absolute top-[30%] sm:top-[40%] right-5 cursor-pointer"
              >
                <ChevronRight width={50} height={50} color="black" />
              </div>
            </div>
            <div
              ref={scrollBar}
              style={{
                scrollbarWidth: "none"
              }}
              className="relative flex gap-x-4 overflow-x-auto max-w-[390px] md:max-w-[680px] px-4 no-scrollbar [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              {images.map((image, i) => (
                <div
                  ref={(el) => (thumbsRef.current[i] = el)}
                  key={i}
                  className={`select-none w-20 h-20 flex-shrink-0 overflow-hidden cursor-pointer rounded-sm ${
                    i === selected ? "border-2 border-black" : "opacity-40"
                  }`}
                  onClick={() => handleImage(i)}
                >
                  <img
                    src={image}
                    className="object-cover rounded-sm w-full h-full"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div
        className="col-span-2 w-full relative flex items-center overflow-hidden row-span-3 cursor-pointer select-none"
        style={{
          borderRadius: "8px 0px 0px 0px",
        }}
        onClick={() => handleImagesView()}
      >
        <Image
          priority
          src={mainImage}
          fill
          alt="gapartments"
          className="object-cover h-auto"
        />
      </div>

      {/* mid images */}
      <div
        className="flex flex-col gap-2 h-auto col-span-1 row-span-3 select-none"
        style={{
          borderRadius: "0px 8px 0px 0px",
        }}
      >
        {midImages.map((image, i) => (
          <div
            key={i}
            className="overflow-hidden cursor-pointer flex h-full w-full items-center relative"
            onClick={() => handleImagesView()}
          >
            <Image
              src={image}
              fill
              priority
              className={`object-cover h-auto`}
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Image Previews */}
      <div className="grid grid-cols-5 gap-2 col-span-3 row-span-1 overflow-hidden select-none place-items-center">
        {imagePreviews.map((image, i) => (
          <div
            key={i}
            className="overflow-hidden h-auto w-full cursor-pointer rounded-sm relative"
            onClick={() => handleImagesView()}
          >
            {/* Overlay for the last image preview */}
            {i === imagePreviews.length - 1 && (
              <div
                style={{
                  backdropFilter: "blur(6px)",
                }}
                className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold rounded-sm sm:text-xs text-[10px] px-2"
              >
                {t("viewAllImages")} ({images.length})
              </div>
            )}
            <img
              src={image}
              className={`object-cover rounded-sm w-full md:h-auto h-full`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageNav;
