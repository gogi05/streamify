import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as StreamifyIcon } from "../../assets/streamify.svg";
import { NAV_LINKS } from "./constants";
import { useState } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative md:hidden flex items-center justify-between px-4 h-16 w-full">
      <a
        href="#"
        className="flex items-center text-lg font-semibold"
        aria-label="Streamify Home"
      >
        <StreamifyIcon className="h-8 w-8" />
      </a>

      <button
        aria-label="Toggle navigation menu"
        className="p-2 border rounded-md text-gray-900 hover:bg-gray-200 flex items-center justify-center"
        onClick={toggleMenu}
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gray-50 shadow-md z-20 transform transition-transform duration-300 ease-in-out translate-x-0">
            <nav className="grid gap-4 p-6 text-lg font-medium">
              <div
                aria-label="Close menu"
                className="absolute top-4 right-4 px-2  py-1 border rounded-md text-gray-900 hover:bg-gray-200 flex items-center justify-center cursor-pointer"
                onClick={toggleMenu}
              >
                ✕
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${
                    link.isActive
                      ? "text-black hover:text-gray-900"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileHeader;
