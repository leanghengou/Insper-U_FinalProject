import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import Slider from "../components/Slider";
import ArticleSections from "../components/ArticleSections";
import BigArticleSections from "../components/BigArticleSection";
import FeaturedSectionsOne from "../components/FeaturedSectionOne";
import FeaturedSectionsTwo from "../components/FeaturedSectionTwo";

const Homepage = () => {
  return (
    <Container>
      <Slider />
      <BigHeader>Articles</BigHeader>
      <ArticleSections />
      <FeaturedSectionsOne />
      <BigArticleSections />
      <FeaturedSectionsTwo />
      <BigHeader>Articles</BigHeader>
      <ArticleSections />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default Homepage;
