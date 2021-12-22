import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.robots.map((robots) => (
        <Card
          key={robots.id}
          id={robots.id}
          name={robots.name}
          email={robots.email}
        ></Card>
      ))}
    </div>
  );
};
