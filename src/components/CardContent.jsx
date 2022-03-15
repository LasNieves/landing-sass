import React from "react";
import SingleCardContent from "./SingleCardContent";
import Mackbook from "../img/MacbookPro.svg";
import BoardsNotification from "../img/BoardsNotifications.svg";

const CardContent = () => {
  return (
    <section className="container-sm mt-5">
      <div className="row justify-center">
        <div className="col-9 mb-3">
          <h2 className="text-center font-base text-secondary lh-xl fw-lighter">
            En un solo Clic
          </h2>
          <p className="text-center font-sm text-secondary lh-md mt-3 fw-lighter">
            ¿Listo para comenzar?
          </p>
        </div>
        <div
          style={{ gap: "30px" }}
          className="row col-10 col-sm-8 col-lg-10 justify-center mb-5"
        >
          <SingleCardContent
            title="Haz clic en eso."
            description="Elija su columna de predicción de un
                        menú desplegable,construiremos automáticamente la IA"
            img={Mackbook}
          />
          <SingleCardContent
            title="¡Ya terminaste!"
            description="Visualice maravillosamente los
                        resultados previstos, los principales impulsores simule escenarios hipotéticos."
            img={BoardsNotification}
          />
        </div>
      </div>
    </section>
  );
};

export default CardContent;
