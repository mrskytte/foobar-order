import React, { useState, useEffect } from "react";

export default function Checkout(props) {
  const [emptyBasket, setEmptyBasket] = useState("");

  useEffect(() => {
    setEmptyBasket(
      props.cards.filter((card) => card.props[1].amount > 0).length < 1
    );
  }, [props.cards]);

  return (
    <main>
      {emptyBasket ? (
        <div className="empty-basket">
          <h1 className="order-summary">Your basket is empty</h1>
          <p className="order-p">
            Go back and fill it with some delicious beer
          </p>
          <button onClick={() => props.cancelOrder()}>Back to menu</button>
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}
