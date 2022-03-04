import React from "react";
import "../sass/index.css";

const Hero = () => {
  return (
    <section className="container-sm mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 mb-3">
          <h1 className="text-center font-base text-secondary mb-3 lh-lg">
            Predicciones de datos en minutos, sin escribir código.
          </h1>
          <p className="text-center font-sm text-secondary lh-sm">
            Todo el proceso de creación de algoritmos de aprendizaje automático
            y predicción de resultados, en un solo clic.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-4"></div>
        <button className="col-4 button bg-info rounded-5 text-secondary lh-base">
          Probar Ahora
        </button>
        <div className="col-4"></div>
      </div>
    </section>
  );
};

export default Hero;
