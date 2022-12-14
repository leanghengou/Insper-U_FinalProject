import React from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
const ArticleSections = ({ socialArticles }) => {
  const articles = socialArticles && socialArticles.slice(0, 4);

  return (
    <Container>
      {articles &&
        articles.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              title={article && article.title}
              category={article && article.category[0]}
              smallText={article && article.content[0]}
              authors={article && article.authors}
              image={article && article.image}
              id={article && article._id}
            />
          );
        })}
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

export default ArticleSections;
