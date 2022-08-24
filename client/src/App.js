import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Article from "./pages/Article";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
export default App;
