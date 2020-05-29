import React, { useState } from "react";
import CreditCardForm from "./CreditCardForm";
import creditCards from "./assets/imgs/creditcards.png";

export default function Payment(props) {
  return (
    <>
      {props.paymentMethod === "creditCard" ? (
        <CreditCardForm
          postOrder={props.postOrder}
          setCardInformation={props.setCardInformation}
        />
      ) : props.paymentMethod === "mobilePay" ? (
        console.log("mobilePay")
      ) : props.paymentMethod === "ApplePay" ? (
        console.log("applePay")
      ) : (
        <ul className="payment-options">
          <li>
            <button onClick={() => props.setPayment("mobilePay")}>
              MobilePay
            </button>
          </li>
          <li>
            <button onClick={() => props.setPayment("applePay")}>
              Apple Pay
            </button>
          </li>
          <li>
            <button onClick={() => props.setPayment("creditCard")}>
              <img src={creditCards} alt="Credit Cards" />
            </button>
          </li>
        </ul>
      )}
    </>
  );
}
