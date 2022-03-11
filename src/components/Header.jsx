import React from "react";
import hamburger from "../img/hamburger.svg";
import nucba from "../img/nucba.svg";

const Header = () => {
  let tabletWidth = "(min-width: 768px)";

  return (
    <header className="container-sm p-2">
      <div className="row justify-center">
        <div className="col-12 row justify-space-between">
          <div className="d-flex align-center col-3 ">
            <img src={nucba} alt="Logo" />
          </div>

          <ul className="d-none d-md-flex justify-space-between align-center col-md-6">
            <li>
              <a
                onClick={(e) => e.preventDefault()}
                className="text-secondary text-gray-hover"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={(e) => e.preventDefault()}
                className="text-secondary text-gray-hover"
                href="#"
              >
                Product
              </a>
            </li>
            <li>
              <a
                onClick={(e) => e.preventDefault()}
                className="text-secondary text-gray-hover"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={(e) => e.preventDefault()}
                className="text-secondary text-gray-hover"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hacer jsutify con query por favorrr */}

          <div className="d-flex align-center justify-space-around justify-md-flex-end col-6 col-md-3">
            <button className="header-button text-secondary rounded-5">
              Login
            </button>
            <img className="d-md-none" src={hamburger} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
