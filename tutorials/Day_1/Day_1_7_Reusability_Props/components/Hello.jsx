function Hello({ name, age, numbers, favourites }) {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <h2>Age: {age}</h2>
      <p>Seat Numbers: {numbers}</p>

      <p>
        Favourites: Food: {favourites.food} / Drink: {favourites.food}
      </p>
    </div>
  );
}

// Can also use like this too
// function Hello(props) {
//   const { name, age } = props;

//   return (
//     <div>
//       {/* Can also use like props.name and props.age */}
//       <h1>Hello {name}!</h1>
//       <h2>Age: {age}</h2>
//     </div>
//   );
// }

export default Hello;
