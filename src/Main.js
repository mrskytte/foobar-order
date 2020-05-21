import React, { useEffect } from "react";
import Card from "./Card";

export default function Main(props) {
  const endpoint = "https://fireoranges.herokuapp.com";

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const data = await fetch(endpoint);
      const response = await data.json();
      console.log(response.taps);
    }
  });
  return (
    <main>
      <Card beerName="Hello World" />
    </main>
  );
}
