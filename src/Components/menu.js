import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">

    <div className="menu__decorsquare--pink"></div>
    <div className="menu__decorsquare--yellow"></div>

    <div className="menu__decorblock--item1"></div>
    <div className="menu__decorblock--item2"></div>
    <div className="menu__decorblock--item3"></div>
    <div className="menu__decorblock--item4"></div>

    <nav>

    <Link to="/products">
    <div className="menu__menulink--link1">
        <p className="menu__menutext"> Men's clothing </p>
      </div>
    </Link>
      
    <Link to="/products">
    <div className="menu__menulink--link2">
        <p className="menu__menutext">Women's clothing</p>
      </div>
    </Link>

    <Link to="/products">
    <div className="menu__menulink--link3">
      <p className="menu__menutext">Jewelery</p>
      </div>
    </Link>

    <Link to="/products">
    <div className="menu__menulink--link4">
      <p className="menu__menutext">Electronics</p>
      </div>
    </Link>

    </nav>

    <div className="menu__decorstrip"></div>

    </div>
  );
}

export default Menu;
