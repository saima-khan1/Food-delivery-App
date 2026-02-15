import FoodCategory from "./FoodCategory";
import FoodList from "./FoodList";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <FoodCategory />
      <FoodList />
    </div>
  );
};

export default Home;
