"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import languageContext from "../language/languageProvider";
const locations = [
  { title: "APARTAMENTAI", url: "/apartamentai" },
  { title: "KALNIEČIŲ G. 219", url: "/kalnieciu219" },
  { title: "KALNIEČIŲ G. 196 (1)", url: "/kalnieciu196(1)" },
  { title: "KALNIEČIŲ G. 196 (2)", url: "/kalnieciu196(2)" },
  { title: "TAIKOS PR. 33B", url: "/taikospr33b" },
  { title: "VARNIŲ G. 24", url: "/varniu24" },
  { title: "NEMUNO G. 22", url: "/nemuno22" },
  { title: "PUODŽIŲ G. 27", url: "/puodziu27" },
  { title: "LINKUVOS G. 55", url: "/linkuvos55" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const {locale, changeLang} = useContext(languageContext)
  // Toggle dropdown function to ensure only one is open at a time
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Handle location selection
  const handleLocationClick = (url) => {
    router.push(url);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  // Handle language selection
  const toggleLanguage = (lang) => {
    setActiveDropdown(null)
    changeLang(lang);
  };
  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow =""
    }
  }, [isOpen])
  return (
    <nav className="w-full z-40 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 py-4 md:px-18">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-42">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                height={80}
                width={80}
                alt="GApartments"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('locations')}
                className="flex items-center gap-2 text-white font-medium px-4 py-2 hover:bg-amber-700 rounded-md transition-all duration-300"
              >
                <span className="uppercase">Apartamentai</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${activeDropdown === 'locations' ? "rotate-180" : ""}`} 
                />
              </button>

              {activeDropdown === 'locations' && (
                <div className="absolute mt-2 left-0 bg-white text-amber-800 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn w-64">
                  {locations.slice(1).map((location, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-3 hover:bg-amber-100 transition-colors border-b border-amber-100 last:border-0"
                      onClick={() => handleLocationClick(location.url)}
                    >
                      {location.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('language')}
                className="flex items-center gap-2 text-white font-medium px-4 py-2 hover:bg-amber-700 rounded-md transition-all duration-300"
              >
                <Globe size={16} />
                <span className="uppercase">{locale}</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${activeDropdown === 'language' ? "rotate-180" : ""}`} 
                />
              </button>
              
              {activeDropdown === 'language' && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-amber-800 rounded-md shadow-lg overflow-hidden z-50 animate-fadeIn">
                  {["lt", "en"].map((l) => (
                    <button
                      key={l}
                      className={`block w-full text-left px-4 py-3 transition-colors ${locale === l ? "bg-gray-300" : ""}`}
                      onClick={() => toggleLanguage(l)}
                    >
                      <span className="uppercase font-medium">{l}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <Link 
              href="/susisiekti"
              className="text-white font-medium px-4 py-2 hover:bg-amber-600 rounded-md transition-all duration-300 uppercase"
            >
              Susisiekti
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 text-white p-2 bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute inset-0 overflow-auto bg-amber-800 bg-opacity-95 z-43 transition-transform transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col`}
      >
        <div className="container h-full mx-auto px-6 pt-24 pb-8 flex flex-col">
          <div className="space-y-6 w-full">
            {/* Location Dropdown (Mobile) */}
            <div className="border-b border-amber-600 pb-4 relative w-full">
              <button
                onClick={() => toggleDropdown('locations')}
                className="flex items-center gap-2 text-white font-medium px-4 py-3 hover:bg-amber-700 rounded-md transition-all duration-300 w-full justify-between"
              >
                <span className="uppercase text-lg">Apartamentai</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${activeDropdown === 'locations' ? "rotate-180" : ""}`} 
                />
              </button>

              {activeDropdown === 'locations' && (
                <ul className="relative w-full mt-2 text-white rounded-md overflow-hidden z-50 animate-fadeIn">
                  {locations.slice(1).map((location, index) => (
                    <li
                      key={index}
                      className="block text-sm w-full text-left px-6 py-3 transition-colors cursor-pointer"
                      onClick={() => handleLocationClick(location.url)}
                    >
                      {location.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Language Selector (Mobile) */}
            <div className="border-b border-amber-600 pb-4 relative w-full">
              <button 
                onClick={() => toggleDropdown('language')}
                className="flex items-center gap-2 text-white font-medium px-4 py-3 hover:bg-amber-700 rounded-md transition-all duration-300 w-full justify-between"
              >
                <div className="flex items-center gap-2">
                  <Globe size={18} />
                  <span className="uppercase text-lg">{locale}</span>
                </div>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${activeDropdown === 'language' ? "rotate-180" : ""}`} 
                />
              </button>
              
              {activeDropdown === 'language' && (
                <div className="relative mt-2 w-fit flex rounded-md border text-white shadow-lg overflow-hidden z-50 animate-fadeIn">
                  {["lt", "en"].map((lang) => (
                    <button
                      key={lang}
                      className={`block w-full text-left px-6 py-4 ${locale===lang ? "bg-white/20" : ''}`}
                      onClick={() => toggleLanguage(lang)}
                    >
                      <span className="uppercase font-medium text-lg">{lang}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Contact Link (Mobile) */}
            <Link 
              href="/susisiekti"
              className="text-white font-medium px-4 mb-20 py-3 w-full text-center bg-amber-600 rounded-md transition-all duration-300 uppercase flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              Susisiekti
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;