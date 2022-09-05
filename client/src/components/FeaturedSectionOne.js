import styled from "styled-components";
import image from "../images/featuredOne.jpg";

const FeaturedSectionsOne = () => {
  return (
    <Container>
      <Image image={image} />
      <TextGroup>
        <BigHeader>Perspective 101</BigHeader>
        <BodyText>
          Perspective 101 is the collection of essays with stories that have
          been shared by many individuals. With so many topics being included
          readers could find interesting perspectives and enjoy the stories.
        </BodyText>
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
  margin-top: 200px;
  /* border-top: 1px solid #e9e9e9;
  padding-top: 50px; */
`;

const Image = styled.div`
  width: 550px;
  height: 350px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
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
