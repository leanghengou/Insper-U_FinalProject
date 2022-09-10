import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedSectionsTwo = () => {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);
  const [changeIndex, setChangeIndex] = useState();
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuotes(data);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeIndex(Math.floor(Math.random() * quotes.length));
    }, 2000);
    return () => clearInterval(interval);
  }, [changeIndex]);

  // ------------------
  const quote = quotes[changeIndex];

  // --------------
  return (
    <Container>
      <TextGroup>
        <BigHeader>
          Stay <RedColor>motivated</RedColor>
        </BigHeader>
        <BodyText>
          Explore hundred of meaningful quotes from extraordinary individuals in
          history. Click the below button to explore.
        </BodyText>
        <ClickButton
          onClick={() => {
            navigate("/quotes");
          }}
        >
          Explore
        </ClickButton>
      </TextGroup>
      <QuoteContainer>
        <TextContainer>
          <QuoteText>{quote && quote.text}</QuoteText>
          <QuoteAuthors>{quote && quote.author}</QuoteAuthors>
        </TextContainer>
      </QuoteContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
`;

const QuoteContainer = styled.div`
  width: 700px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #e9e9e9;
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
  margin-bottom: 50px;
`;

const RedColor = styled.span`
  color: #ed0000;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const QuoteText = styled.p`
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
`;

const QuoteAuthors = styled.p`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  color: #6c6c6c;
`;

export default FeaturedSectionsTwo;
