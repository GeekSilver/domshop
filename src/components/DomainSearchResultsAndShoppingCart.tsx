import React from "react";
import DomainSearchResults from "./DomainSearchResults";
import ShoppingCart from "./ShoppingCart";

const DomainSearchResultsAndShoppingCart = () => {
  return (
    <div className="row mt-5">
      <DomainSearchResults />
      <ShoppingCart />
    </div>
  );
};

export default DomainSearchResultsAndShoppingCart;
