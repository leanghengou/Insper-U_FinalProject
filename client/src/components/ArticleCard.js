import styled from "styled-components";

const ArticleCard = () => {
  return (
    <Container>
      <Image />
      <ArticleInfo>
        <Title>Is talent is natural or hardwork?</Title>
        <AuthorText>By Piseth</AuthorText>
        <CategoryTag>Life tips</CategoryTag>
      </ArticleInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  height: 220px;
  background-color: aquamarine;
`;

const ArticleInfo = styled.div`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 35px;
`;

const AuthorText = styled.p`
  color: #6c6c6c;
`;

const CategoryTag = styled.div`
  text-align: center;
  max-width: 30%;
  padding: 7px 8px;
  color: white;
  background-color: #ed9c00;
  border-radius: 50px;
  margin-top: 25px;
`;

export default ArticleCard;
