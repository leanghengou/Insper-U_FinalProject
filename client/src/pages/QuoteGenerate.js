import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineArrowDown } from "react-icons/ai";

const QuoteGenerate = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [quotes, setQuotes] = useState([]);
  const [changeIndex, setChangeIndex] = useState();

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuotes(data);
        console.log(data);
      });
  }, []);

  const randomHandle = () => {
    setChangeIndex(Math.floor(Math.random() * quotes.length));
  };
  const quote = quotes[changeIndex];

  return (
    <Container>
      <QuoteBox quote={quote} />
      <QuoteButton onClick={randomHandle}>
        {!quote ? "Get inspired" : "Next"}
      </QuoteButton>
    </Container>
  );
};

const QuoteBox = ({ quote }) => {
  return (
    <QuoteContainer>
      <QuoteText>{quote && quote ? quote.text : <NoQuote />}</QuoteText>
      <QuoteAuthors>{quote && quote ? quote.author : null}</QuoteAuthors>
    </QuoteContainer>
  );
};

const NoQuote = () => {
  return (
    <div>
      <NoQuoteText>Check the button to get inspired.</NoQuoteText>
      <PointingAnimation style={{ marginTop: "25px" }} />
    </div>
  );
};

// Styleing-------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const QuoteContainer = styled.div`
  text-align: center;
  width: 60%;
  height: 200px;
  max-height: 200px;
  margin: 50px 0;
`;

const QuoteText = styled.p`
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
`;

const NoQuoteText = styled.p`
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  color: #6c6c6c;
`;

const QuoteAuthors = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  color: #6c6c6c;
`;

const QuoteButton = styled.button`
  padding: 15px 35px;
  background-color: black;
  color: white;
  border-radius: 3px;
  :hover& {
    cursor: pointer;
    background-color: #ed9c00;
    color: white;
    border: #ed9c00 2px solid;
    transition: 0.5s ease-in-out;
  }
`;

const animationArrow = keyframes`
0% {
  transform: translateY(0%);
}
25%{
  transform: translateY(20%);
}

50%{
  transform: translateY(40%);
}

75%{
  transform: translateY(20%);
}
100%{
  transform: translateY(0%);
}
`;

const PointingAnimation = styled(AiOutlineArrowDown)`
  font-weight: 400;
  margin: 0 auto;
  animation: ${animationArrow} 2s infinite linear;
  font-size: 50px;
`;

export default QuoteGenerate;
