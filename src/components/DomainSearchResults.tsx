import React from "react";
import SingleDomainSearchResult from "./SingleDomainSearchResult";

const DomainSearchResults = () => {
  return (
    <div className="col-md-5">
          <SingleDomainSearchResult />
          <SingleDomainSearchResult />
          <SingleDomainSearchResult/>
    </div>
  );
};

export default DomainSearchResults;
