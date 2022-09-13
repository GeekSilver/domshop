import React from "react";

const ShoppingCart = () => {
  return (
    <div className="col-md-5 offset-md-1">
      <h4 className="text-center">SHOPPING CART</h4>
      <div className="d-flex justify-content-between my-1">
        <div>domainsample.com</div>
        <div>$10.24</div>
      </div>
      <div className="d-flex justify-content-between border-top border-dark mt-2">
        <div>Total</div>
        <div>$10.24</div>
      </div>
      <div className="border border-primary p-3 mt-3 text-center">Checkout</div>
    </div>
  );
};

export default ShoppingCart;
