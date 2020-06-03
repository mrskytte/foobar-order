import React from "react";
import logo from "./assets/logo/logo_white_transparentbg.png";

export default function Header(props) {
  console.log(props.paymentMethod);
  return (
    <header>
      {props.paymentMethod ? (
        <>
          <button className="back-btn" onClick={props.cancelPaymentMethod}>
            ←
          </button>
          <h1 className="card-details">CARD DETAILS</h1>
        </>
      ) : props.isPaying ? (
        <>
          <button className="back-btn" onClick={props.cancelPayment}>
            ←
          </button>
          <h1 className="payment-method">PAYMENT METHOD</h1>
        </>
      ) : props.isCheckingOut ? (
        <>
          <button className="back-btn" onClick={props.cancelOrder}>
            ←
          </button>
          <h1 className="checkout">CHECKOUT</h1>
        </>
      ) : (
        <img src={logo} alt="Foobar Logo" />
      )}
    </header>
  );
}
