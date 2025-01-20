// src/components/Header.js
import { ReactComponent as StreamifyIcon } from "../../assets/streamify.svg";
import { NAV_LINKS } from "./constants";

const Header = () => {
  return (
    <nav className="hidden md:flex items-center justify-between w-full px-4 py-2">
      <button
        type="button"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <StreamifyIcon className="h-10 w-10" />
        <span>Streamify</span>
      </button>

      <div className="flex gap-6 justify-end flex-1 font-semibold">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`transition-colors ${
              link.isActive
                ? "text-primary"
                : "text-gray-500 hover:text-primary"
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
