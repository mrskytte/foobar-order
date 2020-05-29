import React from "react";

export default function Checkout(props) {
  console.log("bababab", props.cards);
  return (
    <main>
      <h1 className="order-summary">ORDER SUMMARY</h1>
      <button className="close-btn" onClick={props.cancelOrder}>
        X
      </button>
      <table>
        <thead>
          <tr>
            <th className="summary-item">Item</th>
            <th className="summary-price">Price</th>
            <th className="summary-amount">Amount</th>
          </tr>
        </thead>
        <tbody>{props.cards}</tbody>
      </table>
    </main>
  );
}
