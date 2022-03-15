import React from "react";
import BoardsNotificationsx2 from "./../img/BoardsNotificationsx2.svg";

const Cta = () => {
  return (
    <>
      <section className="d-md-none max-width-100 mb-5 mt-5 p-5 d-flex justify-center align-center direction-column bg-gre">
        <h2 className="mb-2 text-secondary text-center text-lg fw-md">
          Empieza <br /> ahora
        </h2>
        <button className="cta-button bg-info text-secondary lh-lg">
          Véalo en acción
        </button>
      </section>

      <section className="d-none d-md-flex row max-width-md-80 max-width-xl-70 m-auto mt-5 mb-5 p-3 pr-1 bg-gre rounded-10">
        <div className="col-md-6 pl-3 d-flex direction-column justify-center">
          <h2 className="fw-md text-secondary font-base mb-2">
            Empieza <br /> ahora
          </h2>
          <button className="cta-button width-md-75 width-lg-55 bg-info text-secondary lh-lg">
            Véalo en acción
          </button>
        </div>
        <div className="col-md-6 d-flex justify-flex-end">
          <img src={BoardsNotificationsx2} alt="Cta Img" />
        </div>
      </section>
    </>
  );
};

export default Cta;
