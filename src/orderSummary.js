import React from "react";

export default function OrderSummary(props) {
  return (
    <button id="order-summary" onClick={props.isCheckingOut ? props.goToPayment : props.goToOrder}>
      {props.isCheckingOut ? "CONFIRM" : "CHECKOUT"}
      <span className="total">TOTAL {total},00kr</span>
    </button>
  );
}
