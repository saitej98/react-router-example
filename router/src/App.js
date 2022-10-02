import "./App.css";
import { Route, Router, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/other">Other</Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
