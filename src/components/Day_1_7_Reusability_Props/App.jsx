import Hello from "./Hello";

function App() {
  const seatNumbers = [1, 2, 3, 4];

  const favourites = {
    food: "Pizza",
    drink: "Coke",
  };

  return (
    <div className="App">
      <Hello
        name="Chathura"
        age="25"
        seatNumbers={seatNumbers}
        favourites={favourites}
      />
    </div>
  );
}

export default App;
