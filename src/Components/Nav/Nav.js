import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Search from "../Search/Search";

function Nav() {
  return (
    <div className="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listusers">List users</Link>
        </li>
        {/* <li>
          <Link to="/counter">Counter</Link>
        </li> */}
      </ul>
      <Search />
    </div>
  );
}

export default Nav;
