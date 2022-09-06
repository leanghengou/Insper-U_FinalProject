import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import Slider from "../components/Slider";
import ArticleSections from "../components/ArticleSections";
import BigArticleSections from "../components/BigArticleSection";
import FeaturedSectionsOne from "../components/FeaturedSectionOne";
import FeaturedSectionsTwo from "../components/FeaturedSectionTwo";
import FeaturedSectionsThree from "../components/FeaturedSectionThree";
import ArticleSectionsTwo from "../components/ArticleSectionsTwo";
import FeaturedQuoteBlock from "../components/FeaturedQuoteBlock";
import LoadingState from "../pages/LoadingState";
import { CurrentUserContext } from "../CurrentUserContext";
import { useNavigate, useParams } from "react-router-dom";

const Homepage = () => {
  const { allArticles, loading, setLoading } = useContext(CurrentUserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [technologyArticles, setTechnologyArticles] = useState(null);

  const [socialArticles, setSocialArticles] = useState(null);
  useEffect(() => {
    fetch(`/api/get-article-category/social`)
      .then((res) => res.json())
      .then((data) => {
        setSocialArticles(data.data);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/get-article-category/personal-development`)
      .then((res) => res.json())
      .then((data) => {
        setTechnologyArticles(data.data);
        setLoading(false);
      });
  }, []);

  const [issueArticles, setIssueArticles] = useState(null);
  useEffect(() => {
    fetch(`/api/get-article-category/issue`)
      .then((res) => res.json())
      .then((data) => setIssueArticles(data.data));
  }, []);

  if (loading) {
    return <LoadingState />;
  } else {
    // ------------------------------------------
    return (
      <Container>
        <Slider />
        <BigHeader>
          <YellowColor>Unpopular</YellowColor> social topics
        </BigHeader>
        <ArticleSections socialArticles={socialArticles && socialArticles} />
        <FeaturedSectionsOne />
        <FeaturedSectionsTwo />
        <FeaturedSectionsThree />
        <BigHeader>Featured articles</BigHeader>
        <BigArticleSections
          technologyArticles={technologyArticles && technologyArticles}
          issueArticles={issueArticles && issueArticles}
        />
        <BigHeader>Don't forget to read...</BigHeader>
        <ArticleSectionsTwo allArticles={allArticles && allArticles} />
        {/* <FeaturedQuoteBlock /> */}
      </Container>
    );
  }
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
