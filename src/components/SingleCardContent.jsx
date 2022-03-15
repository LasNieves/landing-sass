import React from "react";

const SingleCardContent = ({ title, description, img }) => {
  return (
    <article className="card-items col-lg-5 mb-3">
      <h3>{title}</h3>
      <p className="fw-200">{description}</p>
      <button className="button min-width-40 max-width-60 bg-info text-secondary lh-base ">
        Empezar
      </button>
      <img src={img} alt="Card Logo" />
    </article>
  );
};

export default SingleCardContent;
