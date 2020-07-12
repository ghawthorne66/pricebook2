import React, { useState } from 'react';
import Card from "./Card"
import _items from "../items"

import { searchItem, searchText } from '../components/search'

function CardMaker() {
  const [items, setItems] = useState(_items)

  function handleSearch(event) {
    console.log(event.target.value)

  }

  // function getCard(item, index) {
  //   return (
  //     <Card
  //       key={index}
  //       id={item.Id}
  //       img={item.image}
  //       title={item.title}
  //       description={item.description}
  //       descriptionTwo={item.descriptionTwo}
  //       price={item.price}
  //     />
  //   )
  // }

  const cards = items && items.map((item, index) => (
    <Card
      key={index}
      id={item.Id}
      img={item.image}
      title={item.title}
      description={item.description}
      descriptionTwo={item.descriptionTwo}
      price={item.price}
    />
  ))
  return (
    <>
      <input
        onChange={handleSearch}
        type="text"
        id="search"
        placeholder={'Search'}
        older="enter name here"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "30%" }}
      />
      <h1 className="items">Items</h1>
      <div id={"match-list"}></div>
      <div className="container">
        {cards}
      </div>
    </>

  );
}

export default CardMaker;