import React, { useContext } from "react";
import styled from "styled-components";
import image from "../images/quoteFeaturedBlock.jpg";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";

const FeaturedQuoteBlock = () => {
  const navigate = useNavigate();
  // const { allArticles, loading, setLoading } = useContext(CurrentUserContext);
  const navigateHandler = (e) => {
    navigate(`/`);
  };

  return (
    <FullContainer>
      <Container image={image} />
      <TextContainer>
        <BigHeader>Read random article</BigHeader>
        <BodyText>
          Not sure where to start, or what to try? Pick a random article!
        </BodyText>
        <ClickButton onClick={navigateHandler}>Read</ClickButton>
      </TextContainer>
    </FullContainer>
  );
};

const Container = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`;
const TextContainer = styled.div`
  width: 70%;
`;

const FullContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Anton", sans-serif;
  font-style: normal;
`;

const BodyText = styled.p`
  margin-top: 30px;
  margin-bottom: 50px;
  font-size: 16px;
  line-height: 25px;
`;

const ClickButton = styled.button`
  padding: 15px 30px;
  border-radius: 3px;
  background-color: transparent;
  color: black;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid black;
  &:hover {
    border: 1px solid black;
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;

export default FeaturedQuoteBlock;
