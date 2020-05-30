import React, { useState } from "react";

export default function OrderConfirmation(props) {
  const [viewOrder, setView] = useState(false);

  function importAll(r) {
    let tickets = {};
    r.keys().map((item, index) => {
      return (tickets[item.replace("./", "")] = r(item));
    });
    return tickets;
  }

  const tickets = importAll(
    require.context("./assets/tickets_withhand", true, /\.png/)
  );

  function setViewOrder() {
    setView(!viewOrder);
  }

  return (
    <>
      {viewOrder ? (
        <>
          <h1>ORDER SUMMARY</h1>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{props.cards}</tbody>
          </table>
          <h4>
            Total Amount:<span> {props.total}</span>
          </h4>
          <div className="payment-details">
            <h4>Payment Details</h4>
            <p className="confirmation-name">{props.cardInformation.name}</p>
            <p className="confirmation-number">
              {props.cardInformation.number}
            </p>
          </div>
        </>
      ) : (
        <>
          <h1>We got your order!</h1>
          <h2>
            Your order number is
            <span> {props.orderNumber}</span>
          </h2>
          <p>
            Keep an eye on the dashboard - once your number reaches one of our
            bartenders - go ahead and grab your drinks at the bar!
          </p>
          <img
            className="ticket"
            src={tickets[`ticket_${props.orderNumber}.png`]}
            alt="Your order number"
          />
        </>
      )}
      <button onClick={setViewOrder}>
        {viewOrder ? "CLOSE" : "VIEW ORDER"}
      </button>
    </>
  );
}
