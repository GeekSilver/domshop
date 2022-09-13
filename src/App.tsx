import React from "react";
import "./App.css";
import DomainSearchResultsAndShoppingCart from "./components/DomainSearchResultsAndShoppingCart";
import Navbar from "./components/Navbar";
import SearchDomain from "./components/SearchDomain";

function App() {
  return (
    <div className="">
      <div className="container">
        <Navbar />
        <SearchDomain />
        <DomainSearchResultsAndShoppingCart />
      </div>
    </div>
  );
}

export default App;
