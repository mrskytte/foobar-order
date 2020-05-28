import React from "react";

export default function OrderSummary(props) {
  let total = 0;
  props.beersInOrder.forEach((oneOrder) => {
    const isBeerInOrder = props.beerInfo.filter(
      (beer) => beer[0] === oneOrder.name
    );

    let price = parseInt(isBeerInOrder[0][1].price);
    total += price * oneOrder.amount;
  });

  return (
    <button
      id="order-summary"
      onClick={props.isCheckingOut ? props.goToPayment : props.goToOrder}
    >
      {props.isCheckingOut ? "CONFIRM" : "CHECKOUT"}
      <span>TOTAL {total}kr</span>
    </button>
  );
}
