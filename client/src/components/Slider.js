import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import { Slide } from "@material-ui/core";

const Slider = () => {
  return (
    <Container>
      <BigHeader>Explore your favorite stories!</BigHeader>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Anton", sans-serif;
  font-style: normal;
`;

const BodyText = styled.p`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 16px;
  line-height: 25px;
`;

export default Slider;
