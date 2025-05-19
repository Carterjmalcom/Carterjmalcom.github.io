import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-lg border-b border-red-500/20 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            malco<span className="text-red-500">.dev</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-300 relative group"
              >
                <span className="group-hover:text-white transition-colors">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40 shadow-lg border-l border-red-500/20`}
      >
        <div className="flex flex-col space-y-6 p-8">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-300 relative group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="group-hover:text-white transition-colors">
              {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-37 transition-transform origin-left duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
