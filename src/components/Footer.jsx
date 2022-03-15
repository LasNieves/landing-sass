import React from "react";
import gps from "../img/gps.svg";
import phone from "../img/phone.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import twitter from "../img/twitter.svg";

const Footer = () => {
  return (
    <footer className="container-sm row justify-center">
      <div className="col-6 col-md-9 col-lg-12 row justify-center text-secondary">
        <div className="d-md-flex col-md-12 col-lg-7 justify-space-between justify-lg-space-around">
          <div className="d-flex direction-column mb-3">
            <h5 className="lh-xxl font-md">#SomosDATOS</h5>
            <a className="lh-xl" href="#">
              Home
            </a>
            <a className="lh-xl" href="#">
              Ejemplos
            </a>
            <a className="lh-xl" href="#">
              Pricing
            </a>
            <a className="lh-xl" href="#">
              Status
            </a>
          </div>

          <div className="d-flex direction-column mb-3">
            <h5 className="lh-xxl font-md">Producto</h5>
            <a className=" lh-xl" href="#">
              Integraciones
            </a>
            <a className=" lh-xl" href="#">
              Videos en uso
            </a>
            <a className=" lh-xl" href="#">
              Seguridad
            </a>
          </div>

          <div className="d-flex direction-column mb-3">
            <h5 className="lh-xxl font-md">Compañia</h5>
            <a className=" lh-xl" href="#">
              Acerca de
            </a>
            <a className=" lh-xl" href="#">
              Carreras
            </a>
            <a className=" lh-xl" href="#">
              Contáctenos
            </a>
          </div>
        </div>

        <div className="d-lg-flex justify-flex-end justify-xl-center align-flex-start col-md-5 col-lg-5 mt-5 margin-lg-0 pt-2">
          <div className="d-flex direction-column text-secondary">
            <div className="d-flex direction-row align-center mb-3">
              <img className="mr-1" src={gps} alt="icongps" />
              <p>Segurola y Habana 4310...</p>
            </div>

            <div className="d-flex direction-row align-center mb-3 ">
              <img className="mr-1" src={phone} alt="iconphone" />
              <p>0303 456</p>
            </div>

            <div className="d-flex max-width-80 justify-space-between">
              <img src={twitter} alt="iconTwitter" />
              <img src={facebook} alt="iconFacebook" />
              <img src={linkedin} alt="iconLinkedin" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
