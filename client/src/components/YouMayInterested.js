import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
const YouMayInterested = () => {
  const allCategories = [
    "lifestyle",
    "economic",
    "social",
    "personal-development",
    "life-tip",
    "job",
    "culture",
    "issue",
    "psychology",
    "technology",
    "chemistry",
    "biology",
    "agriculture",
  ];
  const randomNum =
    allCategories[Math.floor(Math.random() * allCategories.length)];
  const [selectedArticles, setSelectedArticles] = useState(null);
  useEffect(() => {
    fetch(`/api/get-article-category/${randomNum}`)
      .then((res) => res.json())
      .then((data) => setSelectedArticles(data.data));
  }, []);

  const articles = selectedArticles && selectedArticles.slice(0, 4);

  return (
    <FullContainer>
      <BigHeader>You may also like</BigHeader>
      <Container>
        {articles &&
          articles.map((article, index) => {
            return (
              <div key={index} style={{ marginRight: "27px" }}>
                <ArticleCard
                  title={article && article.title}
                  category={article && article.category[0]}
                  smallText={article && article.content[0]}
                  authors={article && article.authors}
                  image={article && article.image}
                  id={article && article._id}
                />
              </div>
            );
          })}
      </Container>
    </FullContainer>
  );
};

const FullContainer = styled.div`
  border-top: 1px solid #e9e9e9;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  padding-top: 30px;
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
`;

const BigHeader = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-bottom: 20px;
  padding-top: 20px;
  line-height: 60px;
`;

export default YouMayInterested;
