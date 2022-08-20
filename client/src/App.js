import logo from "./logo.svg";
import "./App.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

function App() {
  const { contextMessage, allArticles } = useContext(CurrentUserContext);
  console.log(">>>>> ", allArticles && allArticles.allArticles[0].image);
  return (
    <div className="App">
      <img src={allArticles && allArticles.allArticles[0].image} />
    </div>
  );
}

export default App;
