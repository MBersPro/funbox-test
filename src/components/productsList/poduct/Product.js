import React from "react";
import "./Product.css"
const Product = ({ product }) => {
  return (
    <>
      <div className="product">
        <p>{product.description}</p>
        <p>{product.name}</p>
        <p>{product.taste}</p>
        <p>
          <span>{product.portionsNumber}</span>
          <span> порций</span>
        </p>
        <p>
          <span>{product.gift}</span> <span>в подарок</span>
        </p>
        <div>
          <p>
            <span>{product.weight}</span> <span>кг</span>
          </p>
        </div>
      </div>
      <p>{product.callToAction}</p>
    </>
  );
};

export default Product;
