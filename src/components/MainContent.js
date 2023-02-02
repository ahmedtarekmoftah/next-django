import React from "react";
import Card from "./Card";
import data from "../data.js";

export default function MainContent(props) {
  const [cardsData, setCardsData] = React.useState(data);
  function toggle(id) {
    setCardsData((prevCards) => {
      return prevCards.map((card) => {
        return card.id === id
          ? { ...card, antiquewhite: !card.antiquewhite }
          : { ...card };
      });
    });
  }

  const cards = cardsData.map((card, index) => {
    return (
      <Card key={card.id} {...card} handleClick={toggle} co={props.co[index]} />
    );
  });

  return <div className="content">{cards}</div>;
}
