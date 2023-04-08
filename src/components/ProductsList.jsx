import React from "react";
import ProductCard from "./ProductCard";

import x from "./../images/phones/x.jpg";
import i11 from "./../images/phones/i11.jpg";
import i12 from "./../images/phones/i12.jpg";
import s21 from "./../images/phones/s21.jpg";

const ProductsList = () => {
  const phones = [
    { id: 1, image: x, name: "Iphone X", price: "500" },
    { id: 2, image: i11, name: "Iphone 11", price: "650" },
    { id: 3, image: i12, name: "Iphone 12", price: "800" },
    { id: 4, image: s21, name: "S21 Ultra", price: "790" },
  ];
  return (
    <div className="flex justify-center gap-10 mx-5 mt-5">
      {phones.map((item) => {
        return (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
