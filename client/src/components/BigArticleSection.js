import styled from "styled-components";
import BigArticleCard from "./BigArticleCard";
import ArticleCard from "./ArticleCard";

const BigArticleSections = () => {
  return (
    <Container>
      <BigContainer>
        <BigArticleCard />
      </BigContainer>
      <MidContainer>
        <SmallContainer>
          <ArticleCard />
          <ArticleCard />
        </SmallContainer>
        <SmallContainer>
          <ArticleCard />
          <ArticleCard />
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
  margin-top: 100px;
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
  align-items: center;
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
