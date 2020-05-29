import React from "react";

export default function Checkout(props) {
  return (
    <main>
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
    </main>
  );
}
