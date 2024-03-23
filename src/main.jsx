import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  //This is for development only - <React.StrictMode> </React.StrictMode>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
