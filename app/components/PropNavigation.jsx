"use client";
import { useState, useEffect } from "react";
import Cal from "./Cal";
import Contact from "./Contact";

const PropNavigation = ({ prop, selected }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    if(openContact===true || openCalendar === true) {
      document.body.style.overflow = "hidden";
    
      return () => {
        document.body.style.overflow = "";
      };
    } else return

  }, [openContact, openCalendar]);

  return (
    <div className="w-full order-2 lg:sticky lg:top-20 lg:right-8 h-fit bg-white border-gray-300 border px-8 p-4 mt-2 md:mt-0 rounded-lg shadow flex flex-col gap-y-5">
      {openCalendar && <Cal prop={prop} setOpenContact={setOpenCalendar} />}
      {openContact && <Contact prop={prop} setOpenContact={setOpenContact} />}
      <h5 className="font-extrabold text-xl">Apie apartamentus</h5>
      <div className="text-gray-700 text-justify">{prop.description}</div>

      <div className="border-b border-gray-300 my-3"></div>
      <div className="flex flex-col items-start gap-y-4">
        <div className="flex justify-between w-full text-xl font-bold">
          <p>Kaina nuo</p>
          <p>
            35€{" "}
            <span className="text-gray-700 font-medium text-sm">/ nakčiai</span>
          </p>
        </div>
        <button onClick={() => setOpenCalendar(true)} className="w-full cursor-pointer text-white bg-amber-600 py-3 rounded-lg">
          Kalendorius
        </button>
        <button
          onClick={() => setOpenContact(true)}
          className="w-full cursor-pointer border-gray-300 py-3 border rounded-lg"
        >
          Susisiekti
        </button>
      </div>
    </div>
  );
};
export default PropNavigation;
