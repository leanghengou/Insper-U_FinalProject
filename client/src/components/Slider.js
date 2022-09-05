import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import { Slide } from "@material-ui/core";
import sliderOne from "../images/slider-one.jpg";
import sliderTwo from "../images/topofthemountain.jpg";
import slierThree from "../images/registerbackground.png";

const Slider = () => {
  const sliders = [sliderOne, sliderTwo, slierThree];
  let [carousel, setCarousel] = useState(0);

  return (
    <Container sliders={sliders[0]}>
      <TextContainer>
        <BigHeader>Inspired</BigHeader>
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
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props) => props.sliders});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center 20%; */
`;
const TextContainer = styled.div`
  margin-left: 5%;
  width: 30%;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
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

export default Slider;
