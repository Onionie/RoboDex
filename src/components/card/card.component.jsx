import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="robot"
      src={`https://robohash.org/${props.id}?set=set3&size=180x180`}
    />
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>
);
