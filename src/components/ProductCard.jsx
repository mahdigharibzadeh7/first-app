import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="rounded-xl bg-slate-300 shadow-2xl text-slate-600 cursor-pointer hover:scale-105">
      <div className="flex justify-center mb-7">
        <img className="w-72 h-60" src={image} alt="" />
      </div>
      <p className="ml-10 mb-3 font-bold">{name}</p>
      <div className="border-none rounded-lg bg-green-700 px-4 py-2 ml-10 mb-5 w-fit text-white">{price}$</div>
    </div>
  );
};

export default ProductCard;
