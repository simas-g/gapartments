const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Giedre Apartments
        </p>
        <div className="flex gap-4 text-sm">
          <a href="/privacy" className="hover:underline">Privatumo politika</a>
          <a href="/terms" className="hover:underline">Naudojimo sąlygos</a>
          <a href="/contact" className="hover:underline">Kontaktai</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
