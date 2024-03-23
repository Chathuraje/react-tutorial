import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", stock: true },
    { name: "Banana", price: 30, emoji: "🍌", stock: true },
    { name: "Orange", price: 40, emoji: "🍊", stock: false },
    { name: "Mango", price: 110, emoji: "🥭", stock: true },
    { name: "Pineapple", price: 80, emoji: "🍍", stock: false },
    { name: "Grapes", price: 60, emoji: "🍇", stock: false },
  ];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
