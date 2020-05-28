import React from "react";
import creditCards from "./assets/imgs/creditcards.png";

export default function CreditCardForm(props) {
  function confirmOrder(event) {
    event.preventDefault();
    props.postOrder();
  }

  return (
    <>
      <img src={creditCards} alt="Credit Cards" />
      <form action="">
        <label htmlFor="card-name">
          Name on Card
          <input id="card-name" type="text" />
        </label>
        <label htmlFor="card-number">
          Card Number
          <input id="card-number" type="text" />
        </label>
        <label htmlFor="expiry-date">
          {" "}
          Expiry Date
          <input id="expiry-date" type="text" />
        </label>
        <label htmlFor="security-code">
          Security Code
          <input id="security-code" type="text" />
        </label>
        <input
          onClick={confirmOrder}
          type="submit"
          name="submit"
          id="submit"
          value="CONFIRM"
        />
      </form>
    </>
  );
}
