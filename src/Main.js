import React, { useEffect } from "react";
import Card from "./Card";
import beers from "./beers.json";

export default function Main(props) {
  const endpoint = "https://fireoranges.herokuapp.com";
  console.log(beers.Steampunk);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      const data = await fetch(endpoint);
      console.log(data);
      const response = await data.json();
      console.log(response.taps[1]);
      console.log(beers[response.taps[1].beer]);
    }
  });
  return (
    <main>
      <Card beerName="Hello World" />
    </main>
  );
}
