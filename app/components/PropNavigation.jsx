"use client";
import { useState, useEffect } from "react";
import Contact from "./Contact";
import { Share2 } from "lucide-react";
const PropNavigation = ({ prop }) => {
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    if (openContact === true) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "";
      };
    } else return;
  }, [openContact]);
  function share() {
    if(navigator.share) {
      navigator.share({
        title: prop.title,
        url: window.location.href, 
      })
    }
    else {
      navigator.clipboard.writeText(window.location.href)
    }
  }
  return (
    <div className="w-full order-2 lg:sticky lg:top-20 lg:right-8 h-fit bg-white border-gray-300 border px-8 p-4 mt-2 md:mt-0 rounded-lg shadow flex flex-col gap-y-5">
      {openContact && <Contact prop={prop} setOpenContact={setOpenContact} />}
      <h5 className="font-extrabold text-xl">Apie apartamentus</h5>
      <div className="text-gray-700 text-justify">{prop.description}</div>

      <div className="border-b border-gray-300 my-3"></div>
      <div className="flex flex-col items-start gap-y-4">
        <div className="flex justify-between w-full text-xl font-bold">
          <p>Kaina nuo</p>
          <p>
            {prop.price}
            {"€ "}
            <span className="text-gray-700 font-medium text-sm">/ nakčiai</span>
          </p>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <button
            onClick={() => setOpenContact(true)}
            className="w-full cursor-pointer text-white bg-amber-600 py-3 rounded-lg"
          >
            Susisiekti
          </button>
          <button onClick={share} className="flex items-center gap-x-3 border px-2 py-3 rounded-lg justify-center">
            <Share2 size={20} />
            <p>Dalintis</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PropNavigation;
