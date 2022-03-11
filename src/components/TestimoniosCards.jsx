import React from "react";

const TestimoniosCards = ({ title1, title2, description, img }) => {
  return (
    <article className="card-testimonios mb-3 col-12 col-md-5">
      <div className="card-title">
        <img src={img} alt="Thumbnail" />
        <div className="card-subtitle">
          <h4 className="text-secondary">{title1}</h4>
          <h4 className="text-secondary">{title2}</h4>
        </div>
      </div>
      <div className="card-description">
        <p className="text-secondary">{description}</p>
      </div>
    </article>
  );
};

export default TestimoniosCards;
