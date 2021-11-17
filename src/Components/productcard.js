import React from "react";
import { Link } from "react-router-dom";

const Productcard = (props) => {
  const { index, id, title, image, price } = props;
  console.log(props);

  return (
    <div className="product__card" id={id} key={index}>
      <h2 className="product__cardtitle">{title}</h2>

      <Link className="product__cardimage" to={"/Productspecificpage/" +id}>
      <img className="product__img" src={image} alt={"img nr." + "id"} />
      </Link>

      <div className="product__cardprice">
        <p className="product__cardprice--number">{price} $</p>
      </div>
      
      <Link className="product__cardrate" to={"/Productspecificpage/" +id}>
        <p className="product__cardrate--number">view more </p>
        </Link>
        
      <Link to="/Productspecificpage" className="product__button">
        <p className="product__buttontext">Add to cart</p>
      </Link>
    </div>
  );
};

export default Productcard;


