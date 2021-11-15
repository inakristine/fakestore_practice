import React from "react";

function Newscard() {
  return (
    <div className="news__card">
    <h2 className="news__cardtitle">Perfekt<br/>til<br/>farsdag</h2>
    <img className="news__cardimage" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"/>
    <div className="news__cardprice">
    <p className="news__cardprice--number">1827 $</p>
    </div>

    </div>
  );
}

export default Newscard;
