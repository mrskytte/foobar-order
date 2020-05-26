import React from "react";
import logo from "./assets/logo/logo_nobackground.png";

export default function Header(props) {
  return (
    <header>
      <img src={logo} alt="Foobar Logo" />
    </header>
  );
}
