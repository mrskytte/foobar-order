import React from "react";
import CreditCardForm from "./CreditCardForm";
import creditCards from "./assets/imgs/creditcards.png";
import applePay from "./assets/imgs/applepay.png";
import mobilePay from "./assets/imgs/mobilepay.png";

export default function Payment(props) {
  return (
    <>
      {props.paymentMethod === "creditCard" ? (
        <CreditCardForm postOrder={props.postOrder} setCardInformation={props.setCardInformation} />
      ) : props.paymentMethod === "mobilePay" ? (
        console.log("mobilePay")
      ) : props.paymentMethod === "ApplePay" ? (
        console.log("applePay")
      ) : (
        <ul className="payment-options">
          <li>
            <button className="mobilepay-btn" onClick={() => props.setPayment("mobilePay")}>
              <img className="mobilepay" src={mobilePay} alt="Mobile Pay" />
            </button>
          </li>
          <li>
            <button className="applepay-btn " onClick={() => props.setPayment("applePay")}>
              <img className="applepay" src={applePay} alt="Apple Pay" />
            </button>
          </li>
          <li>
            <button className="creditcard-btn" onClick={() => props.setPayment("creditCard")}>
              <img className="creditcard" src={creditCards} alt="Credit Cards" />
            </button>
          </li>
        </ul>
      )}
    </>
  );
}
