import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAdditem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteitem(id)
  {
    setItems((items)=>items.filter((items)=>items.id!==id));
  }
  function handleCheckedItems(id)
  {
    setItems((items)=>items.map((item)=>item.id === id? {...item,packed: !item.packed} : item)); //If the id matches, a new object is created using the spread operator (...item). This copies all the properties of the current item, but the packed property is updated to its opposite value (!item.packed).
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditem} />
      <PackingList items={items} onDeleteItem={handleDeleteitem}  onCheckItem={handleCheckedItems}/>
      <Stats items={items} />
    </div>
  );
}
function Logo() {
  return <h1>🧳FAR AWAY💼</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem,onCheckItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem, onCheckItem}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={()=>{onCheckItem(item.id)}}></input>
        
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
function Stats({ items }) {
  let count= items.filter(items=>items.packed).length;

  return (
    <footer className="stats">
      <em>
        You have {items.length} items on your list and you already have Packed {count} 
        ({items.length > 0 ? `${parseInt((count / items.length) * 100)}%` : '0%'})
      </em>
    </footer>
  );
}
