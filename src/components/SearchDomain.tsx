import React, { useEffect, useState } from "react";
import { useRef } from "react";
import DomainSearchResultsAndShoppingCart from "./DomainSearchResultsAndShoppingCart";
import { Domain, DomainProps } from "../types";

const SearchDomain = () => {
  const domainInput = useRef<HTMLInputElement>(null);
  const [domainsResult, setDomainsResult] = useState([]);
  const [domainInputValue, setDomainInputValue] = useState('');
  //TODO: Fine tune regex in handleChange to validate complex domains like domain.co.uk
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDomainInputValue(event.target.value);
    const regex = new RegExp(
      "^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:.[a-zA-Z]{2,})+$"
    );
    let matchBool: boolean = regex.test(domainInputValue);
    if (!matchBool) {
      event.target.classList.add("border-danger");
    } else {
      event.target.classList.remove("border-danger");
    }
  };

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    await fetch(
      `http://localhost:8000/domains?domain=${domainInput.current?.value}`
    )
      .then((res) => res.json())
      .then((res: any) => {
        console.log("res is:", res.domains);
        if (res.status !== "ERROR") {
          setDomainsResult(res.domains);
        }
        //domains = res.body;
      })
      .catch((err) => {
        console.error(`error: `, err);
      });
  };

  return (
    <>
      <form method="post">
        <div className="row mt-5">
          <h1 className="LucidaBold text-uppercase text-center">
            search available domains
          </h1>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="input-group input-group-lg mt-3">
              <input
                ref={domainInput}
                placeholder="domain.com"
                className="form-control border border-primary"
                type="text"
                name="domain"
                onChange={(event) => handleChange(event)}
              />
              <button
                onClick={(event) => handleClick(event)}
                className="btn btn-outline-primary "
              >
                <span className="d-none d-md-block px-5">Search</span>{" "}
                <span className="d-md-none">&#x1F50E;&#xFE0E;</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      <DomainSearchResultsAndShoppingCart domains={domainsResult} />
    </>
  );
};

export default SearchDomain;
