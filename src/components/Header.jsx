import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";

const Header = ({ handleThemeSwitch }) => {
  return (
    <header className="pt-8 pb-9 px-6 bg-transparent flex items-center max-w-[621px] md:max-w-[778px] mx-auto">
      <span className="text-[26px] font-bold text-lightHeader mr-auto dark:text-white">
        devfinder
      </span>
      <div
        className="block dark:hidden cursor-pointer"
        onClick={handleThemeSwitch}
      >
        <span className="text-[13px] text-lightBlue mr-4 font-bold">DARK</span>
        <img className="inline-block" src={Moon} alt="Dark mode toggle" />
      </div>
      <div
        className="hidden dark:block cursor-pointer"
        onClick={handleThemeSwitch}
      >
        <span className="text-[13px] text-white mr-4 font-bold">LIGHT</span>
        <img className="inline-block" src={Sun} alt="Light mode toggle" />
      </div>
    </header>
  );
};

export default Header;
