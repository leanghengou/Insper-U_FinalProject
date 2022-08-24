import styled from "styled-components";
import ArticleCard from "./ArticleCard";

const ArticleSections = () => {
  return (
    <Container>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ArticleSections;
