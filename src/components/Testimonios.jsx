import React from "react";
import "../sass/index.css";
import TestimoniosCards from "./TestimoniosCards";
import Avatar1 from "../img/Avatar1.svg";
import Avatar2 from "../img/Avatar2.svg";
import Avatar3 from "../img/Avatar3.svg";
import Avatar4 from "../img/Avatar4.svg";

const Testimonios = () => {
  return (
    <section className="container-sm">
      <div className="row justify-center">
        <div className="col-9 mb-3">
          <h2 className="text-center font-base text-secondary lh-xl">
            Testimonios
          </h2>
        </div>
        <div className="col-10 col-md-6 mb-3">
          <TestimoniosCards
            title1="El sr. Miyagi"
            title2="Comerciante"
            description="Las herramientas de IA de hoy son muy complicadas y tardan meses en obtener resultados. "
            img={Avatar1}
          />
          <TestimoniosCards
            title1="Cosme Fulanito"
            title2="Comerciante"
            description="Implementamos la herramientaen nuestro negocio ya tuvimosun crecimiento abismal en cuestión de 3 meses."
            img={Avatar2}
          />
          <TestimoniosCards
            title1="El Tucu López"
            title2="Educador"
            description="Con Nucba, pudimos incorporar a varios de nuestros analistas sin problemas y ponernos en marcha en solo unas pocas horas."
            img={Avatar3}
          />
          <TestimoniosCards
            title1="Jorge Suspenso"
            title2="Emprendedor"
            description="Al principio le teniamos miedo alNoCode pero cuando lo implementamos, tuvimos resultados al instante. Además tienen buen apartado de recursos."
            img={Avatar4}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
