import React, { useEffect, useState } from "react";
import Card from "./Card";
import beers from "./beers.json";
import Button from "./Button";
import Checkout from "./Checkout";

const endpoint = "https://fireoranges.herokuapp.com";

export default function Main(props) {
  const beersArray = Object.entries(beers);
  let beersOnTap = "";

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const data = await fetch(endpoint);
      const response = await data.json();
      const onTap = Object.values(response.taps);
      let test = [];
      onTap.forEach((oneTap) => {
        test.push(oneTap.beer);
      });
      beersOnTap = beersArray.filter((beer) => {
        if (test.includes(beer[0])) {
          return beer;
        }
        return;
      });
      setCards(beersOnTap);
    }
  }, []);

  console.log("hello");
  const cardsInUse = cards.map((c) => <Card {...c} key={c[0]} />);
  return (
    <main>
      <h1 className="main-title">ON TAP TODAY</h1>
      <div>
        <Button name="PRICE" />
        <Button name="POPULAR" />
      </div>
      {cardsInUse}
      <Checkout />
    </main>
  );
}
