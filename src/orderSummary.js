import React from "react";

export default function OrderSummary(props) {
  console.log("ordersummary", props);
  let total = 0;
  props.beersInOrder.forEach((oneOrder) => {
    const isBeerInOrder = props.beerInfo.filter((beer) => {
      console.log("order Name", oneOrder);
      console.log(beer[0]);
      if (beer[0] === oneOrder.name) {
        return beer[1];
      }
    });
    console.log("onlyBeer", isBeerInOrder);
    console.log("beerNPrice", isBeerInOrder[0][1].price);
    let price = parseInt(isBeerInOrder[0][1].price);
    total += price * oneOrder.amount;
  });

  return (
    <button id="order-summary" onClick={props.goToOrder}>
      CONFIRM<span>TOTAL {total}kr</span>
    </button>
  );
}
