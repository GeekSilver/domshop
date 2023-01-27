import { FC } from "react";

import { SingleDomainSearchResultProp } from "../types";

import { noLineThrough, lineThrough } from "../styles";

const SingleDomainSearchResult: FC<SingleDomainSearchResultProp> = ({
  Domain,
  Available,
}) => {
  console.log(`single domain looks like:`, Domain);

  return (
    <div
      className="d-flex justify-content-between m-2"
      style={Available ? noLineThrough : lineThrough}
    >
      <div>{Domain}</div>
      <div style={Available ? { display: "block" } : { display: "none" }}>$10.24</div>
      <div style={Available ?   { display: "none" } :  { display: "block" }}>Unvailable</div>
      <div style={Available ? { display: "block" } : { display: "none" }}>
        <button className="btn btn-sm btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleDomainSearchResult;
