import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
