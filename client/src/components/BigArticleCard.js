import styled from "styled-components";

const BigArticleCard = () => {
  return (
    <Container>
      <Image />
      <ArticleInfo>
        <Title>Is talent is natural or hardwork?</Title>
        <ShortText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </ShortText>
        <CategoryTag>Life tips</CategoryTag>
      </ArticleInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  height: 320px;
  background-color: aquamarine;
`;

const ArticleInfo = styled.div`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 25px;
  font-weight: 500;
  line-height: 35px;
`;

const ShortText = styled.p`
  color: #6c6c6c;
  font-size: 16px;
  line-height: 25px;
  margin-top: 10px;
`;

const CategoryTag = styled.div`
  text-align: center;
  max-width: 17%;
  color: white;
  background-color: #ed9c00;
  border-radius: 50px;
  margin-top: 25px;
`;

export default BigArticleCard;
