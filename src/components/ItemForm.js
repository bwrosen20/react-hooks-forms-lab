import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const [itemName, setName]=useState("");
  const [itemCategory, setSelect]=useState("Produce");

  function handleNameChange(event){
    setName(event.target.value)
  }
  
  function handleCategoryChange(event){
    console.log(event.target.value)
  setSelect(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    })
  }


 
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" id="name" placeholder="Item" onChange={handleNameChange} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" id="select" onChange={handleCategoryChange} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
