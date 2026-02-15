import { food_list } from "../assets/frontend_assets/assets";

const FoodList = () => {
  return (
    <div className="p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list.map((food) => (
          <li
            key={food._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 space-y-1">
              <h3 className="text-lg font-bold text-gray-800">{food.name}</h3>

              <p className="text-sm text-orange-500 font-medium">
                {food.category}
              </p>

              <p className="text-sm text-gray-500 line-clamp-2">
                {food.description}
              </p>

              <p className="text-lg font-semibold text-green-600">
                €{food.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
