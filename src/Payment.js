import React, { useState } from "react";
import CreditCardForm from "./CreditCardForm";
import creditCards from "./assets/imgs/creditcards.png";

export default function Payment(props) {
  const [paymentMethod, setPaymentMethod] = useState("");

  function setPayment(method) {
    setPaymentMethod(method);
  }

  return (
    <>
      {paymentMethod === "creditCard" ? (
        <CreditCardForm postOrder={props.postOrder} />
      ) : paymentMethod === "mobilePay" ? (
        console.log("mobilePay")
      ) : paymentMethod === "ApplePay" ? (
        console.log("applePay")
      ) : (
        <ul className="payment-options">
          <li>
            <button onClick={() => setPayment("mobilePay")}>MobilePay</button>
          </li>
          <li>
            <button onClick={() => setPayment("applePay")}>Apple Pay</button>
          </li>
          <li>
            <button onClick={() => setPayment("creditCard")}>
              <img src={creditCards} alt="Credit Cards" />
            </button>
          </li>
        </ul>
      )}
    </>
  );
}
