import React from "react";
import heroImage from "../img/heroImage.svg";

const Hero = () => {
  return (
    <>
      <section className="container-sm mt-5">
        <div className="row direction-column align-center justify-center">
          <div className="col-9 col-lg-6 mb-2">
            <h1 className="text-center font-base text-secondary mb-3 lh-xl fw-200">
              Predicciones de datos en minutos, sin escribir código.
            </h1>
          </div>
          <div className="col-9 col-lg-5 mb-3">
            <p className="text-center font-sm text-secondary lh-md fw-200">
              Todo el proceso de creación de algoritmos de aprendizaje
              automático y predicción de resultados, en un solo clic.
            </p>
          </div>
          <button className="col-4 col-lg-3 button bg-info rounded-5 text-secondary lh-base fw-200">
            Probar Ahora
          </button>
        </div>
      </section>
      <div className=" max-width-100 row">
        <img className="mt-3 col-12" src={heroImage} alt="Hero Image" />
      </div>
    </>
  );
};

export default Hero;
