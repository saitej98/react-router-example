import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Learn React Router Component...</h1>
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

export default Home;
