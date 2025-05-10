import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { LanguageContextProvider } from "./language/languageProvider";
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Giedre Apartments",
  description: "Kauno apartamentai įsikūrę jums patogiose vietose",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale()
  return (
    <html lang={locale} translate="no">
      <head>
         <meta name="google" content="notranslate" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider>
          <LanguageContextProvider>
          <Nav></Nav>
          <TopBar />
          {children}
          <Footer />
          </LanguageContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
