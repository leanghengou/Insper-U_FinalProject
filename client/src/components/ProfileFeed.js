import styled from "styled-components";

const ProfileFeed = () => {
  return (
    <Container>
      <BoxContainer>
        <Subtitle>Recent like</Subtitle>
        <ArticleName>Is talent is natural or hardwork?</ArticleName>
        <ArticleCategory>Social</ArticleCategory>
      </BoxContainer>
      <BoxContainer>
        <Subtitle>Recent comments</Subtitle>
        <ArticleName>Is talent is natural or hardwork?</ArticleName>
        <ArticleCategory>Social</ArticleCategory>
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #c7c7c7;
`;

const BoxContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h1`
  text-transform: uppercase;
  font-size: 25px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  padding-top: 30px;
  margin-block-start: 0em;
  margin-block-end: 1em;
`;

const ArticleName = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
`;

const ArticleCategory = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: #6c6c6c;
  margin-top: 5px;
`;
export default ProfileFeed;
