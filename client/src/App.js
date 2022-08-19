import logo from "./logo.svg";
import "./App.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

function App() {
  const { contextMessage } = useContext(CurrentUserContext);
  console.log(">>>>> ", contextMessage);
  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
