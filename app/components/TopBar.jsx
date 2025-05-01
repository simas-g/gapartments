import React from "react";
import { Phone, Mail } from "lucide-react";
const TopBar = () => {
  return (
    <div className="sticky top-0 w-full h-12 z-8 bg-black">
      <div className="flex items-center justify-around h-full max-w-7xl mx-auto px-4 gap-x-2">
        <div className="text-white text-xs sm:text-sm font-semibold flex gap-1 items-center md:gap-x-2">
          <Mail size={'2em'}/>
          <p>g.gedeikiene@gmail.com</p>
        </div>
        <div className="text-white flex gap-1 items-center md:gap-x-2 text-xs sm:text-sm font-semibold">
          <Phone size={'2em'}/>
          <p>+370 610 95591</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
