import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 1, packed: true },
  { id: 2, description: "ID card", quantity: 1, packed: false },
  { id: 3, description: "charger", quantity: 2, packed: true },
  { id: 4, description: "Phone", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🧳FAR AWAY💼</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity]=useState(1);
  
  function handleSubmit(e) {
    e.preventDefault();
    
    if (!description) return;
     const newItem={description,quantity,packed:false,id:Date.now()};
     console.log (newItem);

     setDescription("");
     setQuantity(1);

  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip? </h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
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
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>&times;</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list and you already have Packed X (x%)</em>
    </footer>
  );
}
