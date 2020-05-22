import React from "react";

export default function Card(props) {
  const beerInfo = props[1];
  console.log(beerInfo.popular);
  function classNames(classes) {
    return Object.entries(classes)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
      .join(" ");
  }

  const classes = {
    "card-element": true,
    "beers-ordered": beerInfo.beersOrdered > 0,
    "card-active": beerInfo.cardActive,
  };

  const myClassNames = classNames(classes);
  return (
    <article id={beerInfo.name} className={myClassNames}>
      <img src={beerInfo.img} alt="Beer" />
      <h2>{beerInfo.name}</h2>
      <p className="alc">{beerInfo.alc}%, 0.5l</p>
      <p className="price">
        {beerInfo.price}kr{" "}
        <span>{beerInfo.popular === "true" ? "⭐" : ""}</span>
      </p>
    </article>
  );
}
