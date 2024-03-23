export default function Fruits() {
  const prices = [10, 20, 30, 40, 50];
  const discount = prices.map((prices) => prices * 0.9);
  console.log(discount);

  const fruitsArray = ["Apple", "Banana", "Orange", "Mango"];

  const fruitsObject = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 30, emoji: "🍌" },
    { name: "Orange", price: 40, emoji: "🍊" },
    { name: "Mango", price: 110, emoji: "🥭" },
    { name: "Pineapple", price: 80, emoji: "🍍" },
    { name: "Grapes", price: 60, emoji: "🍇" },
  ];

  return (
    <div>
      <h1>Fruits: Render Array Using Map</h1>
      <ul>
        {fruitsArray.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <h1>Fruits: Render Object Using Map</h1>
      <ul>
        {fruitsObject.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
