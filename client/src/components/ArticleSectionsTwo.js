import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import { CurrentUserContext } from "../CurrentUserContext";
const ArticleSectionsTwo = () => {
  const { allArticles } = useContext(CurrentUserContext);
  const [socialArticles, setSocialArticles] = useState(null);

  const articles = allArticles && allArticles.slice(12, 16);

  return (
    <Container>
      {articles &&
        articles.map((article) => {
          return (
            <ArticleCard
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

export default ArticleSectionsTwo;