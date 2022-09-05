import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BigArticleCard from "./BigArticleCard";
import ArticleCard from "./ArticleCard";

// -------------------

// const quote = quotes[changeIndex];
// -----------------------

const BigArticleSections = () => {
  const [changeIndex, setChangeIndex] = useState();
  const [technologyArticles, setTechnologyArticles] = useState(null);
  useEffect(() => {
    fetch(`/api/get-article-category/issue`)
      .then((res) => res.json())
      .then((data) => setTechnologyArticles(data.data));
  }, []);

  const MaxNumber = technologyArticles && technologyArticles.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeIndex(Math.floor(Math.random() * MaxNumber));
    }, 3000);
    return () => clearInterval(interval);
  }, [changeIndex]);
  const featuredArticles =
    technologyArticles && technologyArticles[changeIndex];

  console.log(
    "FEATUED ARTICLE",
    technologyArticles && technologyArticles.length
  );

  const [issueArticles, setIssueArticles] = useState(null);
  useEffect(() => {
    fetch(`/api/get-article-category/issue`)
      .then((res) => res.json())
      .then((data) => setIssueArticles(data.data));
  }, []);

  const groupOne = issueArticles && issueArticles.slice(0, 2);
  const groupTwo = issueArticles && issueArticles.slice(2, 4);

  return (
    <Container>
      <BigContainer>
        <BigArticleCard
          title={featuredArticles && featuredArticles.title}
          image={featuredArticles && featuredArticles.image}
          category={featuredArticles && featuredArticles.category[0]}
          smallText={featuredArticles && featuredArticles.content[0]}
          authors={featuredArticles && featuredArticles.authors}
          id={featuredArticles && featuredArticles._id}
        />
      </BigContainer>
      <MidContainer>
        <SmallContainer>
          {groupOne &&
            groupOne.map((article) => {
              return (
                <ArticleCard
                  title={article && article.title}
                  image={article && article.image}
                  category={article && article.category[0]}
                  smallText={article && article.content[0]}
                  authors={article && article.authors}
                  id={article && article._id}
                />
              );
            })}
        </SmallContainer>
        <SmallContainer>
          {groupTwo &&
            groupTwo.map((article) => {
              return (
                <ArticleCard
                  title={article && article.title}
                  image={article && article.image}
                  category={article && article.category[0]}
                  smallText={article && article.content[0]}
                  authors={article && article.authors}
                  id={article && article._id}
                />
              );
            })}
        </SmallContainer>
      </MidContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const BigContainer = styled.div`
  width: 47%;
  height: auto;
  display: flex;
  align-items: center;
`;

const SmallContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const MidContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default BigArticleSections;
