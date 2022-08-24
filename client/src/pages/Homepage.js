import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import ArticleCard from "../components/ArticleCard";
import Slider from "../components/Slider";

const Homepage = () => {
  return (
    <Container>
      <Slider />
      <h1>Articles</h1>
      <ArticleCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Anton", sans-serif;
  font-style: normal;
`;

const BodyText = styled.p`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 16px;
  line-height: 25px;
`;

export default Homepage;
