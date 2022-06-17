import React, { useState } from "react";
import Product from "./poduct/Product";
import "./ProductsList.css"
const initialState = [
  {
    description: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с фуа-гра",
    portionsNumber: 10,
    gift: "мышь",
    weight: "0,5",
    callToAction: "Чего сидишь? Порадуй котэ,",
    afterAction: "Печень утки разварная с артишоками.",
  },
  {
    description: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с рыбой",
    portionsNumber: 40,
    gift: "2 мыши",
    weight: "2",
    callToAction: "Чего сидишь? Порадуй котэ,",
    afterAction: "Головы щучьи с ченоком да свежайшая сёмгушка.",
  },
  {
    description: "Сказочное заморское яство",
    name: "Нямушка",
    taste: "с курой",
    portionsNumber: 100,
    gift: "5 мышей",
    weight: "5",
    callToAction: "Чего сидишь? Порадуй котэ,",
    afterAction: "Филе из цеплят с трюфелями в бульоне.",
  },
];

const ProductsList = () => {
  const [products, setProducts] = useState([...initialState]);
  return (
  <div className="products-list-container">
    <ul className="products-list">
      {products.map((product, index) => (
        <li key={index} className="product-container">
          <Product product={product} />
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ProductsList;
