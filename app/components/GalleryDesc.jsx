"use client";
import { useState, useEffect } from "react";
import ImageNav from "./ImageNav";
import PropNavigation from "./PropNavigation";
import MapBlock from "./Map";
import Reviews from "./Reviews";
import { properties } from "@/lib/properties";
const GalleryDesc = ({ prop }) => {
  const [selected, setSelected] = useState(1);
  const [width, setWidth] = useState(0);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const handleSelected = (i) => {
    setSelected(i);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowSize = window.innerWidth;
      setWidth(windowSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const width = window.innerWidth;
    if (width > 1024) {
      setSelected(2);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const targetProperty = properties.find((p) => p.title === prop?.title);
      try {
        const res = await fetch(
          `/api/property/reviews?place=${targetProperty?.placeId}`,
          {
            method: "GET",
          }
        );
        const initialData = await res.json();
        const data = initialData.data.result;
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error, "error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="grid px-8 gap-y-4 gap-x-8 items-start lg:grid-cols-2">
      <div className="flex flex-col">
        <ImageNav images={prop.images} />
        <div className="w-full mt-8 h-12 bg-gray-200 grid grid-cols-3 lg:grid-cols-2 rounded-lg p-1">
          <h4
            onClick={() => handleSelected(1)}
            className={`lg:hidden cursor-pointer w-full justify-center h-full flex items-center ${selected == 1 ? " bg-gray-100 rounded-md" : ""}`}
          >
            Informacija
          </h4>
          <h4
            onClick={() => handleSelected(2)}
            className={`cursor-pointer w-full justify-center h-full flex items-center ${selected == 2 ? " bg-gray-100 rounded-md" : ""}`}
          >
            Žemėlapis
          </h4>
          <h4
            onClick={() => handleSelected(3)}
            className={`cursor-pointer w-full justify-center h-full flex items-center ${selected == 3 ? " bg-gray-100 rounded-md" : ""}`}
          >
            Atsiliepimai
          </h4>
        </div>
        {selected == 2 && !loading && <MapBlock location={prop.location} url={data?.url}></MapBlock>}
        {selected == 3 && (
          <>
            {loading && <p>Kraunama...</p>}
            {!loading && data ? (
              <Reviews {...data} />
            ) : (
              <p>Atsiliepimų nerasta.</p>
            )}
          </>
        )}
      </div>
      {(selected == 1 || width > 1024) && (
        <PropNavigation
          prop={prop}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

export default GalleryDesc;
