import React, { useEffect, useState } from "react";
import Card from "./Card";
import beers from "./beers.json";
import Button from "./Button";
import Checkout from "./Checkout";
import OrderSummary from "./orderSummary";

const endpoint = "https://fireoranges.herokuapp.com";

export default function Main(props) {
  const beersArray = Object.entries(beers);
  const [cards, setCards] = useState([]);
  let beersOnTap = "";
  let cardsInUse = [];
  useEffect(() => {
    fetchData();
    async function fetchData() {
      const data = await fetch(endpoint);
      const response = await data.json();
      const onTap = Object.values(response.taps);
      let taps = [];
      onTap.forEach((oneTap) => {
        taps.push(oneTap.beer);
      });
      beersOnTap = beersArray.filter((beer) => {
        if (taps.includes(beer[0])) {
          return beer;
        }
      });
      setCards(beersOnTap);
    }
  }, []);

  const [beersInOrder, setBeersInOrder] = useState([]);

  function addBeerToOrder(beer, amount) {
    let newOrder = "";
    if (beersInOrder.some((oneOrder) => oneOrder.name === beer)) {
      newOrder = beersInOrder.map((oneOrder) => {
        if (oneOrder.name === beer) {
          return { name: oneOrder.name, amount: amount };
        } else {
          return { name: oneOrder.name, amount: oneOrder.amount };
        }
      });
    } else {
      newOrder = beersInOrder.concat({ name: beer, amount: amount });
    }
    setBeersInOrder(newOrder);
  }

  cardsInUse = cards.map((c) => (
    <Card {...c} key={c[0]} addBeerToOrder={addBeerToOrder} />
  ));

  function goToOrder() {
    console.log("lets order");
  }

  return (
    <main>
      <h1 className="main-title">ON TAP TODAY</h1>
      <div>
        <Button name="PRICE" />
        <Button name="POPULAR" />
      </div>
      {cardsInUse}
      {beersInOrder.length > 0 ? (
        <OrderSummary
          beersInOrder={beersInOrder}
          beerInfo={beersArray}
          goToOrder={goToOrder}
        />
      ) : (
        console.log("noOrder")
      )}
      <Checkout />
    </main>
  );
}
