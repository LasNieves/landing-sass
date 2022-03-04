import React from "react";
import "../sass/index.css";
import hamburger from "../img/hamburger.svg";
import nucba from "../img/nucba.svg";

const Header = () => {
  return (
    <header className="container-sm p-2">
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <img src={nucba} alt="Logo" />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-flex-end">
            <button className="header-button text-secondary mr-2 rounded-5">
              Login
            </button>
            <img src={hamburger} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
