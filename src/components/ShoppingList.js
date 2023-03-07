import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setTypeFilter]=useState("");
  const [array,setArray]=useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event){
    setTypeFilter(event.target.value)
  }

  function onItemFormSubmit(element){
    setArray([...array,element])
  }

  const itemsToDisplay = array.filter((item) => {
    if (search===""){

    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }
else {

  return ((item.name).toLowerCase()).includes((search).toLowerCase());
}


})

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
