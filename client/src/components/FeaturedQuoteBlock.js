import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import image from "../images/quoteFeaturedBlock.jpg";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FeaturedQuoteBlock = () => {
  const navigate = useNavigate();
  const [articleIds, setArticleIds] = useState(undefined);
  useEffect(() => {
    fetch(`/api/get-article-ids`)
      .then((res) => res.json())
      .then((data) => {
        setArticleIds(data.data);
      });
  }, []);
  const articleLength = articleIds && articleIds.length;
  const randomIndex = Math.floor(Math.random() * articleLength);
  const navigateHandler = (e) => {
    navigate(`/article/${articleIds[randomIndex]}`);
  };
  if (!articleIds) {
    return <LoadingBox />;
  } else {
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
  }
};

const LoadingBox = () => {
  return <LoadingObject />;
};

const rotating = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const LoadingObject = styled(AiOutlineLoading3Quarters)`
  font-weight: 200;
  margin: 0 auto;
  animation: ${rotating} 2s infinite linear;
  font-size: 50px;
`;

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
  &:active {
    background-color: black;
  }
`;

export default FeaturedQuoteBlock;
