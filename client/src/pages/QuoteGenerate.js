import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "../styleVariable/GlobalStyle";
import { CurrentUserContext } from "../CurrentUserContext";

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
      <p>{quote && quote.text}</p>

      <button onClick={randomHandle}>Change quote</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

export default QuoteGenerate;
