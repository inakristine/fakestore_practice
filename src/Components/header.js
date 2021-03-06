import React from "react";
import { Link } from "react-router-dom";
import cartImg from "../img/cart.svg";

function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <h1 className="header__title">Fake store</h1>
        </Link>

        <Link to="/cart">
          <img className="header__cartimage" src={cartImg} alt="cart" />
        </Link>
        <div className="header__cartcounter">
          <p className="header__cartnumber">0</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
