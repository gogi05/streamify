import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between border-b bg-gray-50 px-4 md:px-6 z-10">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
};

export default Header;
