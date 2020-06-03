import React, { useState, useEffect } from "react";
import is from "is_js";
import CardReactFormContainer from "card-react";

export default function CreditCardForm(props) {
  const [nameOnCard, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExDate] = useState("");
  const [cvcNumber, setCvcNumber] = useState("");
  const [nameValidity, setNameValidity] = useState("");
  const [cardValidity, setCardValidity] = useState("");
  const [expireValidity, setExpireValidity] = useState("");
  const [cvcValidity, setCvcValidity] = useState("");
  const [paying, setPaying] = useState(false);
  const [readyToSubmit, setSubmitState] = useState("false");

  function storeCardInformation() {
    const cardInformation = { name: nameOnCard, number: cardNumber };
    props.setCardInformation(cardInformation);
  }

  function confirmOrder(event) {
    console.log("pay");
    setPaying(true);
    event.preventDefault();
    if (readyToSubmit) {
      props.postOrder();
      storeCardInformation();
    } else {
      checkValidity();
      setPaying(false);
    }
  }

  // useEffect(() => {
  //   checkValidity();
  // }, [nameOnCard, cardNumber, cvcNumber, expirationDate]);

  function checkValidity() {
    if (nameOnCard.length > 1) {
      setNameValidity(true);
    } else if (nameOnCard !== "" || paying) {
      setNameValidity(false);
    } else {
      setNameValidity("");
    }

    if (cardNumber !== "" && is.not.creditCard(cardNumber.replace(/\s/g, ""))) {
      setCardValidity(false);
    } else if (is.creditCard(cardNumber.replace(/\s/g, ""))) {
      setCardValidity(true);
    } else if (paying) {
      setCardValidity(false);
    } else {
      setCardValidity("");
    }

    if (cvcNumber !== "" && is.falsy(RegExp(/^[0-9]{3,4}$/).test(cvcNumber))) {
      setCvcValidity(false);
    } else if (is.truthy(RegExp(/^[0-9]{3,4}$/).test(cvcNumber))) {
      setCvcValidity(true);
    } else if (paying) {
      setCvcValidity(false);
    } else {
      setCvcValidity("");
    }

    if (
      expirationDate !== "" &&
      is.falsy(
        RegExp(/^[0-9]{2}\s\/\s[0-9]{2}([0-9]{2})?$/).test(expirationDate)
      )
    ) {
      setExpireValidity(false);
    } else if (
      is.truthy(
        RegExp(/^[0-9]{2}\s\/\s[0-9]{2}([0-9]{2})?$/).test(expirationDate)
      )
    ) {
      setExpireValidity(true);
    } else if (paying) {
      setExpireValidity(false);
    } else {
      setExpireValidity("");
    }
  }

  useEffect(() => {
    if (nameValidity && cardValidity && cvcValidity && expireValidity) {
      setSubmitState(true);
    } else {
      setSubmitState(false);
    }
  }, [nameValidity, cardValidity, cvcValidity, expireValidity]);

  return (
    <>
      <div id="card-wrapper"></div>

      {/* SOURCE: https://github.com/shatran/card-react  */}
      <CardReactFormContainer
        container="card-wrapper"
        formInputsNames={{
          number: "CCnumber",
          expiry: "CCexpiry",
          cvc: "CCcvc",
          name: "CCname",
        }}
        initialValues={{
          number: "",
          cvc: "",
          expiry: "",
          name: "",
        }}
        formatting={true} // optional - default true
      >
        <form className="card-form">
          <label id="card-number" htmlFor="CCnumber" onBlur={checkValidity}>
            Credit Card Number
            <input
              id="CCnumber"
              type="text"
              name="CCnumber"
              onChange={(e) => setCardNumber(e.target.value)}
              className={
                cardValidity === "" ? "" : cardValidity ? "valid" : "invalid"
              }
            />
          </label>
          <label id="card-name" htmlFor="CCname" onBlur={checkValidity}>
            Full Name
            <input
              id="CCname"
              type="text"
              name="CCname"
              onChange={(e) => setName(e.target.value)}
              className={
                nameValidity === "" ? "" : nameValidity ? "valid" : "invalid"
              }
            />
          </label>
          <label id="expiry-date" htmlFor="CCexpiry" onBlur={checkValidity}>
            Expiry Date
            <input
              id="CCexpiry"
              type="text"
              name="CCexpiry"
              onChange={(e) => setExDate(e.target.value)}
              className={
                expireValidity === ""
                  ? ""
                  : expireValidity
                  ? "valid"
                  : "invalid"
              }
            />
          </label>
          <label id="security-code" htmlFor="CCcvc" onBlur={checkValidity}>
            Security Number
            <input
              id="CCcvc"
              type="text"
              name="CCcvc"
              onChange={(e) => setCvcNumber(e.target.value)}
              className={
                cvcValidity === "" ? "" : cvcValidity ? "valid" : "invalid"
              }
            />
          </label>
          <input
            onClick={confirmOrder}
            type="submit"
            name="submit"
            id="submit"
            value="PAY"
          />
        </form>
      </CardReactFormContainer>
      {/* <form className="card-form" action="">
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
      </form> */}
    </>
  );
}
