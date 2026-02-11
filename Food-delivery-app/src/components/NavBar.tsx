import { assets } from "../assets/frontend_assets/assets";

const NavBar = () => {
  return (
    <div className="flex items-center p-4">
      <img
        src={assets.logo_icon}
        style={{ width: "120px", height: "auto" }}
        alt="Cart"
        className="cursor-pointer"
      />
      <h1 className="text-orange-500 font-bold text-2xl">ZestyGo</h1>
    </div>
  );
};

export default NavBar;
