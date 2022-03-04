import React from "react";
import "../sass/index.css";
import hamburger from "../img/hamburger.svg";
import nucba from "../img/nucba.svg";

const Header = () => {
  return (
    <header className="container-sm p-2">
      <div className="row  ">
        <div className="d-flex align-center col-6 ">
          <img src={nucba} alt="Logo" />
        </div>
        <div className="d-flex align-center justify-space-around col-6">
          <button className="header-button text-secondary rounded-5">
            Login
          </button>
          <img src={hamburger} />
        </div>
      </div>
    </header>
  );
};

export default Header;
