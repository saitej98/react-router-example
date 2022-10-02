import "./App.css";
import { Route, Router, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
  );
}

export default App;
