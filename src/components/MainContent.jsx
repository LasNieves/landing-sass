import React from "react";
import mainImg from "../img/mainImg.svg";
import icon1 from "../img/icon1.svg";
import icon2 from "../img/icon2.svg";
import icon3 from "../img/icon3.svg";
import ListItems from "./ListItems";

const MainContent = () => {
  return (
    <main className="container-sm">
      <div className="row justify-center">
        <div className="col-9 mb-3">
          <h2 className="text-center font-base text-secondary lh-xl">
            Potenciá <br className="d-md-none" /> tu producto
          </h2>
          <p className="text-center font-sm text-secondary lh-md mt-3">
            Lleve predicciones dinámicas de MLa su propia aplicación utilizando
            nuestra APIde bajo código. Haz predicciones en tiempo real.
          </p>
        </div>
        <div className="col-8 d-flex justify-center mb-3">
          <img src={mainImg} alt="Potencia tu producto" />
        </div>
        <div className="col-7 d-flex direction-column gap-2">
          <ListItems
            icon={icon1}
            title1="Compartí"
            title2="el superpoder"
            description="Comparta sus modelos con
            su equipo o hágalos públicos."
          />
          <ListItems
            icon={icon2}
            title1="Intuitiva"
            title2="Accesible"
            description="Fácil de integrar,
            en todas partes."
          />
          <ListItems
            icon={icon3}
            title1="Predecí el futuro"
            description="Diseñado para usar sin esfuerzo
            para todos. Sin código.Sin molestias. Al instante."
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
