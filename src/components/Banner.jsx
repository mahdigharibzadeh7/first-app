import React from "react";
import Mountain from "./../images/mountain.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <img src={Mountain} alt="" />
      <div className="absolute bottom-80 left-36 slate-400 text-6xl font-extrabold leading-snug">
        <p>Botostart</p>
        <p>
          We're learning <span className="text-sky-500">React.js</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
