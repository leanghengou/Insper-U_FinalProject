import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BigArticleCard from "./BigArticleCard";
import ArticleCard from "./ArticleCard";

const BigArticleSections = ({ issueArticles, technologyArticles }) => {
  const [changeIndex, setChangeIndex] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      setChangeIndex(Math.floor(Math.random() * MaxNumber));
    }, 3000);
    return () => clearInterval(interval);
  }, [changeIndex]);
  const MaxNumber = technologyArticles && technologyArticles.length;
  const featuredArticles =
    technologyArticles && technologyArticles[changeIndex];
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
            groupOne.map((article, index) => {
              return (
                <ArticleCard
                  key={index}
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
            groupTwo.map((article, index) => {
              return (
                <ArticleCard
                  key={index}
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
