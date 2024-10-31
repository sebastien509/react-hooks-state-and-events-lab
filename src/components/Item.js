import React from "react";
import { useState } from "react";

function Item({ name, category }) {

    const [itemClass, setItemClass ]= useState(" ")  
    const [nameClass, setNameClass]= useState("add")
    const [buttonName, setButtonName]= useState("Add To Cart")

  function handleClick(event){
    setItemClass(itemClass === "in-cart" ? "" : "in-cart");
    setNameClass(nameClass === "remove" ? "add" : "remove");
    setButtonName(buttonName === "Remove From Cart" ? "Add To Cart" : "Remove From Cart");
  }
   
  return (
    <li className= {itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={nameClass}>{buttonName}</button>
    </li>
  );
}

export default Item;
