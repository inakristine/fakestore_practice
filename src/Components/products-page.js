import React, { useState, useEffect } from "react";
import axios from "axios";
import Productcard from "./productcard";

const APIall = "https://fakestoreapi.com/products";

export default function Products(props) {
  let [CardData, setCardData] = useState(undefined);

  useEffect(() => {
    axios
      .get(APIall)
      .then((result) => {
        setCardData(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="product">
    
      <h1 className="product__title">products</h1>

      <div className="product__grid">
        {CardData !== undefined ? (
          CardData.map((value, index) => {
            return (
              <Productcard
                key={index}
                id={value.id}
                title={value.title}
                image={value.image}
                price={value.price}
              />
            );
          })
        ) : (
          <div>Waiting for blog data</div>
        )}
      </div>
    </div>
  );
}
