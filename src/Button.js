import React from "react";

export default function Button(props) {
  function buttonClicked() {
    props.callback();
  }
  return (
    <>
      <button className={props.className} onClick={buttonClicked}>
        {props.name}
      </button>
    </>
  );
}
