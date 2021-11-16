import React from "react";
import { Link } from "react-router-dom";

function Productcard() {
  return (
    <div className="product__card">
    <h2 className="product__cardtitle">Perfekt til farsdagPerfekt til farsdag Perfekt til farsdag Perfekt til farsdag </h2>
    <img className="product__cardimage" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"/>
    <div className="product__cardprice">
    <p className="product__cardprice--number">1827 $</p>
    </div>
    <div className="product__cardrate">
    <p className="product__cardrate--number">Rating 18.2 </p>
    </div>
    <Link to="/Productspecificpage"className="product__button">
    
    <p className="product__buttontext">Add to cart</p>
    
    </Link>

    </div>
  );
}

export default Productcard;
