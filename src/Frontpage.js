import React, { useEffect, useState } from "react";
import Anime, { anime } from "react-anime";

export default function Frontpage(props) {
  const lastOrder = localStorage.getItem("lastOrder");
  const [loadDone, setLoadStatus] = useState(false);

  useEffect(() => {
    setTimeout(showPage, 2000);
  }, []);

  function showPage() {
    if (!lastOrder) {
      setLoadStatus(true);
      props.setFrontpageStatus(false);
    }
  }

  function addLastOrder() {
    const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
    lastOrder.forEach((oneItem) =>
      props.setAmount(oneItem.name, oneItem.amount)
    );
    props.addLastOrder(lastOrder);
    setLoadStatus(true);
    props.setFrontpageStatus(false);
  }

  return (
    <div id="frontpage" className={loadDone ? "hidden" : "visible"}>
      {lastOrder ? (
        <>
          <h1>HEY AGAIN</h1>
          <h2>WELCOME BACK TO FOOBAR</h2>
          <button onClick={addLastOrder}>REPEAT LAST ROUND?</button>
          <button
            onClick={() => {
              setLoadStatus(true);
              props.setFrontpageStatus(false);
            }}
          >
            VIEW MENU
          </button>
        </>
      ) : (
        <>
          <h1>HEY THERE</h1>
          <h2>WELCOME TO FOOBAR</h2>
          <div id="loader">
            <Anime
              duration={750}
              delay={anime.stagger(100, { start: 100 })}
              translateX="4em"
              loop={true}
              direction={"alternate"}
            >
              <div className="loader-element"></div>
              <div className="loader-element"></div>
              <div className="loader-element"></div>
              <div className="loader-element"></div>
            </Anime>
          </div>
        </>
      )}
    </div>
  );
}
