import React from "react";

export default function Checkout(props) {
  return (
    <main>
      <h1 className="order-summary">ORDER SUMMARY</h1>
      <table>
        <thead className="thead">
          <tr className="summary-item-list">
            <th className="summary-item">Item</th>
            <th className="summary-price">Price</th>
            <th className="summary-amount">Amount</th>
          </tr>
        </thead>
        <tbody className="tbody">{props.cards}</tbody>
      </table>
    </main>
  );
}
