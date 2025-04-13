import { Inter, Montserrat } from "next/font/google"
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
})
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Giedre Apartments",
  description: "Kauno apartamentai įsikūrę jums patogiose vietose",
};

  export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased overflow-x-hidden`}
      suppressHydrationWarning={true}
      >
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
