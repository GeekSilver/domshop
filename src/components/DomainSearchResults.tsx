import React, { FC } from "react";
import SingleDomainSearchResult from "./SingleDomainSearchResult";

import { DomainProps, Domain } from "../types";



const DomainSearchResults: FC<DomainProps> = ({domains}) => {
  return (
    <div  className="col-md-5">
      {
        domains.map((dom: Domain) => {
          return <SingleDomainSearchResult key={`${dom.Domain}-${new Date().getTime()}`} Domain={dom.Domain} />
        })
      }

    </div>
  );
};

export default DomainSearchResults;
