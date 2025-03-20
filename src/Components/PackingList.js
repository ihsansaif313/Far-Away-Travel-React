import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({ items, onDeleteItem, onCheckItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sorting;
  if (sortBy === "input") sorting = items;
  if (sortBy === "description")
    sorting = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "status")
    sorting = items.slice().sort((a, b) => a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {sorting.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem} />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="status">Sort By Packed Status</option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}
