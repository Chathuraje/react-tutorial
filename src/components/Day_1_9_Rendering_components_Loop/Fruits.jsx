import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 30, emoji: "🍌" },
    { name: "Orange", price: 40, emoji: "🍊" },
    { name: "Mango", price: 110, emoji: "🥭" },
    { name: "Pineapple", price: 80, emoji: "🍍" },
    { name: "Grapes", price: 60, emoji: "🍇" },
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
