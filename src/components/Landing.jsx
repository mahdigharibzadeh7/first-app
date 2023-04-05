import React from "react";

import Banner from "./Banner";
import ProductsList from "./ProductsList";
import Search from "./Search";
import Support from "./Support";

const Landing = () => {
  return (
    <div>
      <Banner />
      <ProductsList />
      <Search />
      <Support />
    </div>
  );
};

export default Landing;
