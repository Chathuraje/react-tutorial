export default function Fruit({ fruit }) {
  return (
    // we use fragments here to add normal list insted of wrapping it with div tags
    <>
      {fruit.stock ? (
        <h2>
          <li>
            {fruit.emoji} {fruit.name} - {fruit.price}
          </li>
        </h2>
      ) : (
        <h2></h2>
      )}
    </>
  );
}

// export default function Fruit({ fruit }) {
//   let content;
//   if (fruit.stock) {
//     content = (
//       <h2>
//         <li>
//           {fruit.emoji} {fruit.name} - {fruit.price}
//         </li>
//       </h2>
//     );
//   } else {
//     content = "";
//   }

//   return <div>{content}</div>;
// }
