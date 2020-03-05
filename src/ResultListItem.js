import React from "react";

export default ({ title, price, mileage, image }) => (
  <li>
    <p>
      <strong>{title}</strong>
    </p>
    <img alt={title} src={image} />
    <p>{price}</p>
    <p>{mileage}</p>
  </li>
);
