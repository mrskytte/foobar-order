import React from "react";

export default function OrderSummary(props) {
  return (
    <button
      id="order-summary"
      onClick={props.isCheckingOut ? props.goToPayment : props.goToOrder}
    >
      {props.isCheckingOut ? "CONFIRM" : "CHECKOUT"}
      <span>TOTAL {props.total}kr</span>
    </button>
  );
}
