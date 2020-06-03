import React, { useState } from "react";
import creditCards from "./assets/imgs/creditcards.png";

export default function CreditCardForm(props) {
  const [nameOnCard, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  function storeCardInformation() {
    const cardInformation = { name: nameOnCard, number: cardNumber };
    props.setCardInformation(cardInformation);
  }

  function confirmOrder(event) {
    event.preventDefault();
    props.postOrder();
    storeCardInformation();
  }

  return (
    <>
      <img className="cards-img" src={creditCards} alt="Credit Cards" />
      <form className="card-form" action="">
        <label htmlFor="card-name">
          Name on Card
          <input onChange={(e) => setName(e.target.value)} id="card-name" type="text" />
        </label>
        <label htmlFor="card-number">
          Card Number
          <input onChange={(e) => setCardNumber(e.target.value)} id="card-number" type="text" />
        </label>
        <label htmlFor="expiry-date">
          {" "}
          Expiry Date
          <input placeholder="MM/YY" id="expiry-date" type="text" />
        </label>
        <label htmlFor="security-code">
          Security Code
          <input id="security-code" type="text" />
        </label>
        <input onClick={confirmOrder} type="submit" name="submit" id="submit" value="PAY" />
      </form>
    </>
  );
}
