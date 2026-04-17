const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-space-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-gray-600 order-2 md:order-1">
          © {new Date().getFullYear()} Ravindu Nirman. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-500 font-medium order-1 md:order-2">
          <a href="#" className="hover:text-accent-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-accent-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-accent-primary transition-colors">Projects</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;