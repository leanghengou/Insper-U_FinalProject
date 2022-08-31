import React, { useContext } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import Slider from "../components/Slider";
import ArticleSections from "../components/ArticleSections";
import BigArticleSections from "../components/BigArticleSection";
import FeaturedSectionsOne from "../components/FeaturedSectionOne";
import FeaturedSectionsTwo from "../components/FeaturedSectionTwo";
import { CurrentUserContext } from "../CurrentUserContext";

const Homepage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Container>
      <Slider />
      <BigHeader>Articles</BigHeader>
      <ArticleSections />
      {/* <FeaturedSectionsOne />
      <BigHeader>Top Liked articles</BigHeader>
      <BigArticleSections />
      <FeaturedSectionsTwo />
      <BigHeader>Read to improve yourself</BigHeader>
      <ArticleSections /> */}
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
  width: 100%;
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-top: 70px;
  margin-bottom: 40px;
  padding-top: 20px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.5);
`;

export default Homepage;
