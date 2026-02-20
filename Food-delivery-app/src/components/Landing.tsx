import { useState } from "react";
import FoodCategory from "./FoodCategory";
import FoodList from "./FoodList";
import NavBar from "./NavBar";

const Home = () => {
  const [category, setCategory] = useState<string>("All");
  return (
    <div>
      <NavBar />
      <FoodCategory setCategory={setCategory} />
      <FoodList category={category} />
    </div>
  );
};

export default Home;
