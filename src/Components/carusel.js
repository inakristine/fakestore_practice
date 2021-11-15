import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from "../img/squareArtboard-1.png";
import img2 from "../img/squareArtboard-2.png";
import img3 from "../img/squareArtboard-3.png";
import img4 from "../img/squareArtboard-4.png";


function Carusel() {
    return (
      <div className="frontpage__carousel">

      <Carousel
      pause="false"
      data-interval="3000"
      >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      id="img1"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      id="img2"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      id="img3"
      alt="Third slide"
    />
    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      id="img4"
      alt="Fourth slide"
    />
    
  </Carousel.Item>
</Carousel>

      
        
      </div>
    );
  }
  
  export default Carusel;