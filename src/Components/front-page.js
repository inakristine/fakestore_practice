import React from "react";
import Carusel from "./carusel";
import News from "./news";


function Frontpage() {
  return (
    <div className="frontpage">

      <div className="frontpage__shade--left"></div>
      <div className="frontpage__shade--right"></div>

      <Carusel/>
      <Carusel/>
      <Carusel/>

      <News/>


    </div>
  );
}

export default Frontpage;
