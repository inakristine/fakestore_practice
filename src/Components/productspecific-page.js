import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Productspesificcard from "./productspesificcard";

const API = "https://fakestoreapi.com/products/";

export default function Productspecificpage() {
  let [cardData, setCardData] = useState(undefined);

  const ProdObj = useParams();
  console.log(ProdObj);

  const prodId = Object.values(ProdObj);
  console.log("theID is " + prodId);

  useEffect(() => {
    axios
      .get(API + prodId)
      .then((result) => {
        setCardData(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(cardData);

  return (
    <div className="productspecific">
      {cardData !== undefined ? (
        <Productspesificcard
          id={cardData.id}
          title={cardData.title}
          description={cardData.description}
          image={cardData.image}
          price={cardData.price}
        />
      ) : (
        <div>
          <h4>Waiting for data</h4>
        </div>
      )}
      <div className="product__grid"></div>
    </div>
  );
}
