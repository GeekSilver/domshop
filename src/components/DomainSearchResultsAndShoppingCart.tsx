import React, { FC } from "react";
import DomainSearchResults from "./DomainSearchResults";
import ShoppingCart from "./ShoppingCart";

import { DomainProps } from "../types";

const DomainSearchResultsAndShoppingCart: FC<DomainProps> = ({domains}) => {
  return (
    <div className="row mt-5">
      <DomainSearchResults domains={domains} />
      <ShoppingCart />
    </div>
  );
};

export default DomainSearchResultsAndShoppingCart;
