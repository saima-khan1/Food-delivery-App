import { Routes, Route } from "react-router-dom";

import Home from "./components/Landing";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
