import styled from "styled-components";

const FeaturedSectionsOne = () => {
  return (
    <Container>
      <Image />
      <TextGroup>
        <BigHeader>Check out our Quote generator!</BigHeader>
        <BodyText>Welcome!</BodyText>
      </TextGroup>
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

const Image = styled.div`
  width: 600px;
  height: 350px;
  background-color: antiquewhite;
`;

const TextGroup = styled.div`
  width: 600px;
  height: auto;
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default FeaturedSectionsOne;
