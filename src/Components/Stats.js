export default function Stats({ items }) {
  let count = items.filter((items) => items.packed).length;
  let percentage = items.length > 0 ? Math.round((count / items.length) * 100) : "0";

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "YOU GOT EVERYTHING. READY TO FLY ✈️"
          : `You have ${items.length} items on your list and you already have Packed ${count} 
        (${percentage}%)`}
      </em>
    </footer>
  );
}
