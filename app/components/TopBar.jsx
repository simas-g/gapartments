import React from "react";
import { Phone, Mail } from "lucide-react";
const TopBar = () => {
  return (
    <div className="sticky top-0 w-full h-12 z-8 bg-black">
      <div className="flex items-center justify-around h-full max-w-7xl mx-auto px-4">
        <div className="text-white text-sm font-semibold flex gap-x-2">
            <Mail/>
            <p>g.gedeikiene@gmail.com</p>
        </div>
        <div className="text-white flex gap-x-2 text-sm font-semibold">
            <Phone/>
            <p>+370 610 95591</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
