import React, { useState } from "react";

export default function AddButton(props) {
  return (
    <div className="add-beer">
      <button
        disabled={props.amount === 0}
        onClick={() => props.changeAmount("-1")}
      >
        -
      </button>
      <p>{props.amount}</p>
      <button onClick={() => props.changeAmount("1")}>+</button>
    </div>
  );
}
