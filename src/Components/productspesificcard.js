import React from "react";
import { Link } from "react-router-dom";

const Productspesificcard = (props) => {
  const { index, id, title, description, image, price } = props;
  console.log(props);

  return (
    <div className="productspecific__card" id={id} key={index}>
      <div className="productspecific__cardheader">
        <h2 className="productspecific__cardtitle">{title}</h2>
      </div>

      <div className="productspecific__cardtext">
        <p>{description}</p>
      </div>

      <div className="productspecific__cardimage">
        <img
          className="productspecific__img"
          src={image}
          alt={"img nr." + "id"}
        />
      </div>

      <div className="productspecific__cardprice">
        <p className="productspecific__cardprice--number">{price} $</p>
      </div>
      <div className="productspecific__cardrate">
        <p className="productspecific__cardrate--number">Rating {price} </p>
      </div>
      <Link to="/Productspecificpage" className="productspecific__button">
        <p className="productspecific__buttontext">Add to cart</p>
      </Link>
    </div>
  );
};

export default Productspesificcard;
