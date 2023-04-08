import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => setProduct(response.data));
  }, []);
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-10 min-h-[100vh]">
      {product.length ? (
        product.map((item) => {
          return (
            <ProductCard
              key={item.id}
              image={item.image}
              name={item.title}
              price={item.price}
            />
          );
        })
      ) : (
        <div className="font-bold text-4xl">Loading...</div>
      )}
    </div>
  );
};

export default Products;
