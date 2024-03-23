export default function Header() {
  const headerStyle = {
    textAlign: "center",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>My React App</h1>
    </header>
  );
}
