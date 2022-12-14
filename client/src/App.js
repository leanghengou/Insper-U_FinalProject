import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Article from "./pages/Article";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import QuoteGenerate from "./pages/QuoteGenerate";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Message from "./pages/Message";
import UploadImages from "./pages/UploadImage";
import LoadingState from "./pages/LoadingState";
import AllArticles from "./pages/AllArticles";
import Error404 from "./pages/Error404";
import ErrorPage from "./pages/ErrorPage";
import UpdateUser from "./pages/UpdateUser";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          <Route path="articles" element={<AllArticles />} />
          <Route path="/article/:id" element={<Article />} />{" "}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/quotes" element={<QuoteGenerate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<Message />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/upload" element={<UploadImages />} />
          <Route path="/loading" element={<LoadingState />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/edit-user" element={<UpdateUser />} />
          <Route path="/search" element={<Search />} />
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
  margin-top: 50px;
`;
export default App;
