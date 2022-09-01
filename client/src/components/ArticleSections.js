import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import { CurrentUserContext } from "../CurrentUserContext";
import { useContext } from "react";

const ArticleSections = () => {
  const checkHandler = (e) => {
    console.log("Hello");
  };
  const { allArticles } = useContext(CurrentUserContext);
  // console.log("ALL article", allArticles[0].content);
  return (
    <Container>
      <ArticleCard
        title={allArticles && allArticles[0].title}
        category={allArticles && allArticles[0].category[0]}
        smallText={allArticles && allArticles[0].content[0]}
        authors={allArticles && allArticles[0].authors}
        image={allArticles && allArticles[0].image}
        id={allArticles && allArticles[0]._id}
      />
      <ArticleCard
        title={allArticles && allArticles[1].title}
        category={allArticles && allArticles[1].category[0]}
        smallText={allArticles && allArticles[1].content[0]}
        authors={allArticles && allArticles[1].authors}
        image={allArticles && allArticles[1].image}
        id={allArticles && allArticles[1]._id}
      />
      <ArticleCard
        title={allArticles && allArticles[2].title}
        category={allArticles && allArticles[2].category[0]}
        smallText={allArticles && allArticles[2].content[0]}
        authors={allArticles && allArticles[2].authors}
        image={allArticles && allArticles[2].image}
        id={allArticles && allArticles[2]._id}
      />
      <ArticleCard
        title={allArticles && allArticles[3].title}
        category={allArticles && allArticles[3].category[0]}
        smallText={allArticles && allArticles[3].content[0]}
        authors={allArticles && allArticles[3].authors}
        image={allArticles && allArticles[3].image}
        id={allArticles && allArticles[3]._id}
      />
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
