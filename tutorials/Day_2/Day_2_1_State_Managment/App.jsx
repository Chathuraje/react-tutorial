import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import { AppContext } from "./contexts/AppContext";

function App() {
  const [username, setUsername] = useState("John Doe");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/" element={<Profile />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
