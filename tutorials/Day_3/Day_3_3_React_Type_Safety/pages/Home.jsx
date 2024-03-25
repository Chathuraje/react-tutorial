import { Person } from "../components/Person";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Person
        name="Alice"
        emails="alice@gmail.com"
        age={25}
        isMarried={true}
        friends={["Chathura", "Jake", "Nore"]}
      />
    </div>
  );
}
