import React from "react";
import "../sass/index.css";

const ListItems = ({ icon, title1, title2, description }) => {
  return (
    <section>
      <div className="d-flex direction-row w-70">
        <div className="mt-1">
          <img src={icon} alt="Primer ícono" />
        </div>
        <h3 className="text-secondary ml-2">
          {title1} <br /> {title2}
        </h3>
      </div>
      <p className="mt-2 text-secondary">{description}</p>
    </section>
  );
};

export default ListItems;

ListItems.defaultProps = {
  title2: "",
};
