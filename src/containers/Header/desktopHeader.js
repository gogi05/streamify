// src/components/Header.js
import { ReactComponent as StreamifyIcon } from "../../assets/streamify.svg";
import { NAV_LINKS } from "./constants";

const Header = () => {
  return (
    <nav className="hidden md:flex items-center justify-between w-full px-4 py-2">
      <a href="#" className="flex items-center gap-2 text-lg font-semibold">
        <StreamifyIcon className="h-10 w-10" />
        <span>Streamify</span>
      </a>

      <div className="flex gap-6 justify-center flex-1 font-semibold">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`transition-colors ${
              link.isActive
                ? "text-gray-900 hover:text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
