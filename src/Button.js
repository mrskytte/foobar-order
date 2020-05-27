import React from "react";

export default function button(props) {
  function buttonClicked() {
    props.callback();
  }
  return (
    <>
      <button onClick={buttonClicked}>{props.name}</button>
    </>
  );
}
