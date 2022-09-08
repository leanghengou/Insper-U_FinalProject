import React from "react";
import styled from "styled-components";
import sliderOne from "../images/articleSlider.png";

const ArticleSlider = () => {
  return (
    <Container image={sliderOne}>
      <TextContainer>
        <BigHeader>Keep reading, keep growing</BigHeader>
        <BodyText>
          Special, that is our asset. Talent is a common word that everyone
          knows and respects.
        </BodyText>
        <ClickButton>Click here</ClickButton>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;
const TextContainer = styled.div`
  width: 45%;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  line-height: 65px;
`;

const BodyText = styled.p`
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 16px;
  line-height: 25px;
`;

const ClickButton = styled.button`
  padding: 15px 45px;
  border-radius: 3px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  &:hover {
    border: none;
    cursor: pointer;
    background-color: #ed9c00;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;

export default ArticleSlider;
