import { Dispatch } from "react";
import { menu_list } from "../assets/frontend_assets/assets";

type Props = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const FoodCategory = ({ setCategory }: Props) => {
  return (
    <div className="p-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">
          Food Categories
        </h2>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Discover your favorite delicious meals
        </p>

        <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-8 gap-6">
        {menu_list.map((menu) => (
          <li
            key={menu.menu_name}
            onClick={() => setCategory(menu.menu_name)}
            className="flex flex-col items-center "
          >
            <img
              src={menu.menu_image}
              alt={menu.menu_name}
              className="w-24 h-24 object-contain "
            />
            <p className="font-semibold">{menu.menu_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodCategory;
