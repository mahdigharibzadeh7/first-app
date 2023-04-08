import React, { useState } from "react";

const ProductCard = ({ image, name, price }) => {
  const [counter, setCounter] = useState(0);

  const downHandler = () => {
    if (counter > 0) {
      setCounter((prevState) => {
        return prevState - 1;
      });
    }
  };

  const upHandler = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div className="rounded-xl bg-slate-300 shadow-2xl text-slate-600 w-1/4">
      <div className="flex justify-center mb-7">
        <img className="w-full h-60" src={image} alt="" />
      </div>
      <p className="ml-10 mb-3 font-bold max-h-5 overflow-hidden">{name}</p>
      <div
        className={`border-none rounded-lg bg-green-700 px-4 py-2 ml-10 mb-5 w-fit text-white ${
          counter ? "" : "opacity-50"
        }`}
      >
        {counter ? counter * price : price}$
      </div>
      <div className="flex items-center border border-b-0 border-x-0 border-slate-400 py-5 pl-8 child:m-1 text-2xl">
        <i
          className={`fas fa-arrow-circle-down cursor-pointer text-4xl ${
            counter ? "" : "opacity-40 cursor-not-allowed"
          }`}
          onClick={downHandler}
        ></i>
        <span className="select-none bg-blue-700 text-white px-2 rounded-lg">
          {counter}
        </span>
        <i
          className="fas fa-arrow-circle-up cursor-pointer text-4xl"
          onClick={upHandler}
        ></i>
      </div>
    </div>
  );
};

export default ProductCard;
