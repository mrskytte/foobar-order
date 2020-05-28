import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import beers from "./beers.json";
import Button from "./Button";
import Checkout from "./Checkout";
import OrderSummary from "./orderSummary";

const endpoint = "https://fireoranges.herokuapp.com";

export default function Main(props) {
  const beersArray = Object.entries(beers);
  const [cards, setCards] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);
  const [sortingStatus, setSortingStatus] = useState(null);
  const [isCheckingOut, setCheckingOut] = useState(false);
  let cardsInUse = [];
  let beersOnTap = useRef("");
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
      beersOnTap.current = beersArray.filter((beer) => {
        if (taps.includes(beer[0])) {
          return beer;
        }
      });
      setCards(beersOnTap.current);
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
    setAmount(beer, amount);
  }

  function sortByPrice() {
    let theseCards = [...cards];
    let sortedCards = "";
    if (sortingStatus === null || sortingStatus === "desc") {
      sortedCards = theseCards.sort((a, b) =>
        a[1].price > b[1].price ? 1 : -1
      );
      setSortingStatus("asc");
    } else {
      sortedCards = theseCards.sort((a, b) =>
        a[1].price < b[1].price ? 1 : -1
      );
      setSortingStatus("desc");
    }
    setCards(sortedCards);
  }

  function filterPopular() {
    if (!filterStatus) {
      let filteredCards = cards.filter((card) => card[1].popular === "true");
      setCards(filteredCards);
    } else {
      setCards(beersOnTap.current);
    }
    setFilterStatus(!filterStatus);
  }

  function setAmount(beer, amount) {
    const newCards = cards.map((c) => {
      if (c[0] === beer) {
        return [
          c[0],
          {
            name: c[1].name,
            desc: c[1].desc,
            alc: c[1].alc,
            image: c[1].image,
            popular: c[1].popular,
            price: c[1].price,
            type: c[1].type,
            amount: amount,
          },
        ];
      } else {
        return [
          c[0],
          {
            name: c[1].name,
            desc: c[1].desc,
            alc: c[1].alc,
            image: c[1].image,
            popular: c[1].popular,
            price: c[1].price,
            type: c[1].type,
            amount: c[1].amount,
          },
        ];
      }
    });

    setCards(newCards);
  }

  cardsInUse = cards.map((c) => (
    <Card
      {...c}
      key={c[0]}
      addBeerToOrder={addBeerToOrder}
      isCheckingOut={isCheckingOut}
    />
  ));

  function goToOrder() {
    setCheckingOut(true);
  }

  function cancelOrder() {
    setCheckingOut(false);
  }

  return (
    <main>
      {!isCheckingOut ? (
        <>
          <h1 className="main-title">ON TAP TODAY</h1>
          <div>
            <Button
              name={
                sortingStatus === null
                  ? "PRICE"
                  : sortingStatus === "asc"
                  ? "PRICE ↑"
                  : "PRICE ↓"
              }
              callback={sortByPrice}
            />
            <Button
              name={filterStatus ? "ALL" : "POPULAR"}
              callback={filterPopular}
            />
          </div>
          {cardsInUse}
        </>
      ) : (
        <Checkout cards={cardsInUse} cancelOrder={cancelOrder} />
      )}

      {beersInOrder.length > 0 ? (
        <OrderSummary
          beersInOrder={beersInOrder}
          beerInfo={beersArray}
          goToOrder={goToOrder}
          isCheckingOut={isCheckingOut}
        />
      ) : (
        console.log("noOrder")
      )}
    </main>
  );
}
