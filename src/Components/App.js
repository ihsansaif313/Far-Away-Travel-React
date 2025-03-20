import { useState } from "react";
import Logo from './Logo.js';
import Form from './Form.js';
import PackingList  from "./PackingList.js";
import  Stats  from "./Stats.js";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAdditem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteitem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    ); //If the id matches, a new object is created using the spread operator (...item). This copies all the properties of the current item, but the packed property is updated to its opposite value (!item.packed).
  }
  function handleClearall()
  {
    let confirmed= window.confirm("Do you really want to delete all the items?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteitem}
        onCheckItem={handleCheckedItems}
        onClearList={handleClearall}
      />
      <Stats items={items} />
    </div>
  );
}



