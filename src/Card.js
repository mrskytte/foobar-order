import React from "react";

export default function Card(props) {
  function classNames(classes) {
    return Object.entries(classes)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
      .join(" ");
  }

  const classes = {
    "card-element": true,
    "beers-ordered": props.beersOrdered > 0,
    "card-active": props.cardActive,
  };

  const myClassNames = classNames(classes);
  return (
    <article id={props.beerName} className={myClassNames}>
      <img src={props.img} alt="Image of Beer" />
      <h2>{props.beerName}</h2>
      <p>{props.percentage}, 0.5l</p>
      <p>
        {props.beerPrice} <span>{props.popular ? "⭐" : ""}</span>
      </p>
    </article>
  );
}
