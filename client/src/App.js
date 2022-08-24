import React, { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./pages/Article";

function App() {
  const { contextMessage, allArticles } = useContext(CurrentUserContext);
  console.log(">>>>> ", allArticles && allArticles[0].image);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
