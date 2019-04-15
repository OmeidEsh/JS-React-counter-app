import React, { Component } from "react";

//Stateless Functional Compinent. So it's a function that returns a React element.
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    //Copy pasted <nav ...... </nav> from: https://getbootstrap.com/docs/4.3/components/navbar/
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
