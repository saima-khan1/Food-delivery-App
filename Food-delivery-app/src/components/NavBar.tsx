import { assets } from "../assets/frontend_assets/assets";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="  flex items-center  px-6 py-3">
        <div className="flex items-center  gap-2 ">
          <img
            src={assets.logo_icon}
            style={{ width: "120px", height: "auto" }}
            alt="Cart"
            className="cursor-pointer"
          />
          <h1 className="text-orange-500 font-bold text-2xl">ZestyGo</h1>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl">
          <SearchBar />
        </div>
        <div className="flex items-center ml-auto gap-4">
          <SignIn />
          <Cart />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
