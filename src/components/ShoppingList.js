import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
 const [filterValue, setFilterValue] = useState("All")
 
 function handleChange(event){
setFilterValue(event.target.value ) }


  const itemsToDisplay = filterValue === "All"
    ? items
    : items.filter((item) => item.category === filterValue);
 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter" value={filterValue}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
