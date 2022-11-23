import React, { FC } from "react";

import { Domain } from "../types";



const SingleDomainSearchResult: FC<Domain> = ({Domain}) => {
    return (
        <div className="d-flex justify-content-between m-2">
        <div>{Domain}</div>
        <div>$10.24</div>
        <div>
          <button className="btn btn-sm btn-primary">Add to Cart</button>
        </div>
      </div>
    )
}

export default SingleDomainSearchResult