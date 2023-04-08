import React from "react";
import apple from "./../images/support/apple.svg";
import samsung from "./../images/support/samsung.png";
import xiaomi from "./../images/support/xiaomi.png";

const Support = () => {
  return (
    <div>
      <div className="text-center font-bold text-6xl mb-20">
        Who supports us?
      </div>
      <div className="flex justify-center items-center gap-40">
        <img className="w-1/6 h-64" src={apple} alt="" />
        <img className="w-1/6 h-1/6" src={samsung} alt="" />
        <img className="w-1/6 h-1/6" src={xiaomi} alt="" />
      </div>
    </div>
  );
};

export default Support;
