import React from "react";

export default function AddButton(props) {
  return (
    <div className="add-beer">
      <button className="minus" disabled={props.amount === 0} onClick={() => props.changeAmount("-1")}>
        -
      </button>
      <p className="beer-amount">{props.amount}</p>
      <button className="plus" onClick={() => props.changeAmount("1")}>
        +
      </button>
    </div>
  );
}
