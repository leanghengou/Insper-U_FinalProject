import styled, { keyframes } from "styled-components";
import image from "../images/featuredThree.png";

const FeaturedSectionsOne = () => {
  return (
    <Container>
      <TextGroup>
        <BigHeader>
          My <RedColor>personal</RedColor> experience
        </BigHeader>
        <BodyText>
          There are interesting stories that you might never heard of! Check out
          real stories from students.
        </BodyText>
      </TextGroup>
      <Image image={image} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const TextGroup = styled.div`
  width: 500px;
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
  line-height: 50px;
`;

const rotating = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
export default FeaturedSectionsOne;
const Image = styled.div`
  margin-right: 100px;
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 20%;
  animation: ${rotating} 35s infinite linear;
  margin-top: 30px;
  z-index: -2;
`;

const ClickButton = styled.button`
  padding: 15px 45px;
  border-radius: 3px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  margin-top: 50px;
  &:hover {
    border: none;
    cursor: pointer;
    background-color: #ed9c00;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;

const RedColor = styled.span`
  color: #ed0000;
`;
