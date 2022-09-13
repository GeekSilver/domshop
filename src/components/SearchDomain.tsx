import React from "react";
import { useRef } from "react";

const SearchDomain = () => {
  const domainInput = useRef<HTMLInputElement>(null)
  
 
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
   await fetch(`http://localhost:8000/domains?domain=${domainInput.current?.value}`)
      .then(res => {
        console.log('res is:',res)
      })
      .catch(err => {
        console.error(`error: `, err)
      })
    }
  
  return (
    <form method="post">
      <div className="row mt-5">
        <h1 className="LucidaBold text-uppercase text-center">
          search available domains
        </h1>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="input-group input-group-lg mt-3">
            <input ref={domainInput} placeholder="type the domain here..."
              className="form-control border border-primary"
              type="text"
              name="domain"
            />
            <button onClick={(event) => handleClick(event)} className="btn btn-outline-primary ">
              <span className="d-none d-md-block px-5">Search</span>{" "}
              <span className="d-md-none">&#x1F50E;&#xFE0E;</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchDomain;
