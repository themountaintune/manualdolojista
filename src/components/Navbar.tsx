import type { JSX } from "react";

export function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="container h-20 flex items-center justify-between">
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-800">
          {["Featured", "How-to", "Expert Advice"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <div className="relative w-10 h-12">
            <div className="absolute w-5 h-7 bg-gray-800 top-0 left-0 rounded-sm"></div>
            <div className="absolute w-5 h-7 bg-accent top-2 left-4 rounded-sm"></div>
          </div>
          <div className="text-sm font-light text-gray-800">
            <span className="text-gray-800">daily </span>
            <span className="text-accent font-medium">beauty</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#contact"
            className="text-sm font-medium text-gray-800 hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Contact
          </a>
          <button className="px-6 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
