import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image from "../images/quoteFeaturedBlock.jpg";

const FeaturedQuoteBlock = () => {
  return (
    <FullContainer>
      <Container image={image} />
      <TextContainer>
        <BigHeader>Read random article</BigHeader>
        <BodyText>
          Special, that is our asset. Talent is a common word that everyone
          knows and respects.
        </BodyText>
        <ClickButton>Click here</ClickButton>
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
  /* background-position: center 20%; */
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
