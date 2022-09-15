import React, { useState, useEffect } from "react";
import styled from "styled-components";
import sliderOne from "../images/slider-one.jpg";
import sliderTwo from "../images/topofthemountain.jpg";
import slierThree from "../images/registerbackground.png";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const sliders = [sliderOne, sliderTwo, slierThree];
  const nagivate = useNavigate();
  // --------------------------

  const [changeIndex, setChangeIndex] = useState();

  const sevenColors = [
    "#ED9C00",
    "#005FED",
    "#EE3828",
    "#000000",
    "#36B908",
    "#7809D0",
    "#F0CA01",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeIndex(Math.floor(Math.random() * sevenColors.length));
    }, 200);
    return () => clearInterval(interval);
  }, [changeIndex]);

  let randomColors = sevenColors[changeIndex];

  // -------------------------------

  return (
    <Container sliders={sliders[0]}>
      <TextContainer>
        <BigHeader>
          Get{" "}
          <SevenColorsSpan randomColors={randomColors}>
            Inspired
          </SevenColorsSpan>
        </BigHeader>
        <BodyText>Be inspired by the essays from amazing people.</BodyText>
        <ClickButton
          onClick={() => {
            nagivate("/articles");
          }}
        >
          Click here
        </ClickButton>
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
`;
const TextContainer = styled.div`
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
  &:active {
    background-color: black;
  }
`;

const SevenColorsSpan = styled.span`
  color: ${({ randomColors }) => {
    return randomColors;
  }};
`;

export default Slider;
