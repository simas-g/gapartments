'use client'
import checkLanguage from "@/lib/checkLanguage";
import setLanguageCookie from "@/lib/languageCookie";
import { createContext, useEffect, useState } from "react";
const languageContext = createContext({
  locale: '',
  changeLang: () => {}
});
export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("");
  useEffect(() => {
    async function getLanguage() {
      const lang = await checkLanguage();
      if (lang) {
        setLanguage(lang);
      } else {
        setLanguage("lt");
      }
    }
    getLanguage();
  }, []);
  function changeLang(locale) {
    setLanguage(locale)
    setLanguageCookie(locale);
  }
  const languageCtx = {
    locale: language,
    changeLang
  }
  return (
    <languageContext.Provider value={languageCtx}>
      {children}
    </languageContext.Provider>
  );
}
export default languageContext;
