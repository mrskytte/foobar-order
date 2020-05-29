import React from "react";

export default function Checkout(props) {
  return (
    <main>
      <h1>ORDER SUMMARY</h1>
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
