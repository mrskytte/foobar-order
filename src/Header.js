import React from "react";
import logo from "./assets/logo/logo_white_transparentbg.png";

export default function Header(props) {
  return (
    <header>
      {props.paymentMethod ? (
        <>
          <button onClick={props.cancelPaymentMethod}>←</button>
          <h1>CARD DETAILS</h1>
        </>
      ) : props.isPaying ? (
        <>
          <button onClick={props.cancelPayment}>←</button>
          <h1>PAYMENT METHOD</h1>
        </>
      ) : props.isCheckingOut ? (
        <>
          <button onClick={props.cancelOrder}>←</button>
          <h1>CHECKOUT</h1>
        </>
      ) : (
        <img src={logo} alt="Foobar Logo" />
      )}
    </header>
  );
}
