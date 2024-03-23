// Exporting and createing a function sametimers using export default
export default function Fruit({ fruit }) {
  return (
    <div>
      <li>
        {fruit.emoji} {fruit.name} - {fruit.price}
      </li>
    </div>
  );
}
