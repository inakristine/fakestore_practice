import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Productcard from "./productcard";

const APIall = "https://fakestoreapi.com/products";

export default function Products(props) {
  let [CardData, setCardData] = useState(undefined);

  const ProdObj = useParams();
  console.log(ProdObj);

  const prodId = Object.values(ProdObj);
  console.log("theID is " + prodId);

  let pageCategory =
    prodId == "man"
      ? "/category/men's clothing"
      : prodId == "woman"
      ? "/category/women's clothing"
      : prodId == "jewels"
      ? "/category/jewelery"
      : "/category/electronics";

  console.log("pageCategory = " + pageCategory);

  useEffect(() => {
    axios
      .get(APIall + pageCategory)
      .then((result) => {
        setCardData(result.data);
        console.log(result.data);
        console.log(APIall + pageCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="product">
      <h1 className="product__title">{prodId}</h1>

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
                category={value.category}
              />
            );
          })
        ) : (
          <h2>Data will load soon</h2>
        )}
      </div>
    </div>
  );
}
