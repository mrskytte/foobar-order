import React, { useState } from "react";

export default function AddButton() {
  const [amount, setAmount] = useState(0);
  function changeAmount(value) {
    let newValue = amount + 1 * value;
    setAmount(newValue);
  }
  return (
    <div className="add-beer">
      <button disabled={amount === 0} onClick={() => changeAmount("-1")}>
        -
      </button>
      <p>{amount}</p>
      <button onClick={() => changeAmount("1")}>+</button>
    </div>
  );
}
