import React, { useState } from "react";
import githop from "./assets/mockups/githop.png";
import elhefe from "./assets/mockups/elhefe.png";
import bigdaddy from "./assets/mockups/bigdaddy.png";
import hollaback from "./assets/mockups/hollaback.png";
import hoppilyeverafter from "./assets/mockups/hoppilyeverafter.png";
import mowingtime from "./assets/mockups/mowingtime.png";
import row26 from "./assets/mockups/row26.png";
import ruinedchildhood from "./assets/mockups/ruinedchildhood.png";
import sleighride from "./assets/mockups/sleighride.png";
import steampunk from "./assets/mockups/steampunk.png";
import AddButton from "./AddButton";

export default function Card(props) {
  const imgArray = [
    { name: "githop", value: githop },
    { name: "elhefe", value: elhefe },
    { name: "bigdaddy", value: bigdaddy },
    { name: "hollaback", value: hollaback },
    { name: "hoppilyeverafter", value: hoppilyeverafter },
    { name: "mowingtime", value: mowingtime },
    { name: "row26", value: row26 },
    { name: "ruinedchildhood", value: ruinedchildhood },
    { name: "sleighride", value: sleighride },
    { name: "steampunk", value: steampunk },
  ];
  const beerInfo = props[1];

  function classNames(classes) {
    return Object.entries(classes)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
      .join(" ");
  }

  const initialAmount = parseInt(beerInfo.amount);

  const [amount, setAmount] = useState(initialAmount);
  function changeAmount(value) {
    let newValue = amount + 1 * value;
    setAmount(newValue);
    props.addBeerToOrder(beerInfo.name, newValue);
  }

  const [open, setOpen] = useState(false);

  const classes = {
    "card-element": true,
    "beers-ordered": beerInfo.beersOrdered > 0,
    "open-menu": open,
    "beers-added": beerInfo.amount > 0,
  };

  const myClassNames = classNames(classes);

  const thisImage = imgArray.filter((image) => image.name === beerInfo.image);

  return (
    <>
      {props.isCheckingOut && beerInfo.amount > 0 ? (
        <tr className="tbody">
          <td className="beer-name-table">{beerInfo.name}</td>
          <td className="beer-price-table">{beerInfo.price},00kr</td>
          {props.orderConfirmed ? (
            <td>{beerInfo.amount}</td>
          ) : (
            <td className="beer-amount-table">
              <AddButton changeAmount={changeAmount} amount={beerInfo.amount} />
            </td>
          )}
        </tr>
      ) : props.isCheckingOut ? (
        <></>
      ) : (
        <article
          id={beerInfo.name}
          className={myClassNames}
          onClick={open ? console.log("no") : () => setOpen(true)}
        >
          <button
            className="close-beer-button"
            onClick={() => {
              setOpen(false);
              console.log("clicked");
            }}
          >
            X
          </button>
          <img src={thisImage[0].value} alt="Beer" />
          <h2 className="beername">{beerInfo.name}</h2>
          <p className="alc">
            {beerInfo.alc}%, 0.5l{" "}
            <span>{beerInfo.popular === "true" ? "⭐" : ""}</span>
          </p>
          <p className="price">{beerInfo.price},00kr </p>
          <p className="desc">{beerInfo.desc}</p>
          <AddButton changeAmount={changeAmount} amount={beerInfo.amount} />
        </article>
      )}
    </>
  );
}
