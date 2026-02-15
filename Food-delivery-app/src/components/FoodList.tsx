import { food_list } from "../assets/frontend_assets/assets";

const FoodList = () => {
  return (
    <div>
      <ul>
        {food_list.map((food) => (
          <>
            <li key={food._id}>{food.name}</li>
            <img src={food.image} className="w-24 h-24 object-contain "></img>
            <p>{food.category}</p>
            <p>{food.description}</p>
            <p>{food.price}</p>
          </>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
