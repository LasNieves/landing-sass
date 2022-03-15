import React from "react";

const ListItems = ({ icon, title1, title2, description }) => {
  return (
    <section>
      <div className="d-flex align-center direction-row w-70">
        <div className="mt-1">
          <img src={icon} alt="Primer ícono" />
        </div>
        <h3 className="text-secondary ml-2 fw-200">
          {title1} <br className="d-md-none" /> {title2}
        </h3>
      </div>
      <p className="mt-2 text-secondary fw-200">{description}</p>
    </section>
  );
};

export default ListItems;

ListItems.defaultProps = {
  title2: "",
};
