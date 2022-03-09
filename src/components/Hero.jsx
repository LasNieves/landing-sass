import React from "react";
import heroImage from "../img/heroImage.svg";

const Hero = () => {
  return (
    <section className="container-sm mt-5">
      <div className="row justify-center">
        <div className="col-9 mb-2">
          <h1 className="text-center font-base text-secondary mb-3 lh-xl">
            Predicciones de datos en minutos, sin escribir código.
          </h1>
        </div>
        <div className="col-9 mb-3">
          <p className="text-center font-sm text-secondary lh-md">
            Todo el proceso de creación de algoritmos de aprendizaje automático
            y predicción de resultados, en un solo clic.
          </p>
        </div>
        <button className="col-4 button bg-info rounded-5 text-secondary lh-base">
          Probar Ahora
        </button>
      </div>
      <img className="mt-3" src={heroImage} alt="Hero Image" />
    </section>
  );
};

export default Hero;
