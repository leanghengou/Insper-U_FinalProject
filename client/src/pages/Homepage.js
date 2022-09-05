import React, { useContext } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import Slider from "../components/Slider";
import ArticleSections from "../components/ArticleSections";
import BigArticleSections from "../components/BigArticleSection";
import FeaturedSectionsOne from "../components/FeaturedSectionOne";
import FeaturedSectionsTwo from "../components/FeaturedSectionTwo";
import FeaturedSectionsThree from "../components/FeaturedSectionThree";
import { CurrentUserContext } from "../CurrentUserContext";
import { useParams } from "react-router-dom";

const Homepage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { id } = useParams();

  return (
    <Container>
      <Slider />
      <BigHeader>
        <YellowColor>Unpopular</YellowColor> social topics
      </BigHeader>
      <ArticleSections />
      <FeaturedSectionsOne />
      <FeaturedSectionsTwo />
      <FeaturedSectionsThree />
      {/* <BigHeader>Top Liked articles</BigHeader>
      <BigArticleSections />
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

const YellowColor = styled.span`
  color: #ed9c00;
`;

export default Homepage;
