import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineArrowDown } from "react-icons/ai";
import FeaturedQuoteBlock from "../components/FeaturedQuoteBlock";
import LoadingState from "./LoadingState";
import { BiHeart } from "react-icons/bi";

const QuoteGenerate = () => {
  const { loading, setLoading, currentUser } = useContext(CurrentUserContext);
  const [quotes, setQuotes] = useState([]);
  const [changeIndex, setChangeIndex] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [likeLoding, setLikeLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuotes(data);
        setLoading(false);
      });
  }, []);

  const randomHandle = () => {
    setChangeIndex(Math.floor(Math.random() * quotes.length));
    setIsLiked(false);
  };
  const quote = quotes[changeIndex];

  const likeQuoteHandler = (e) => {
    if (!quote || isLiked || likeLoding) {
      return;
    }
    setLikeLoading(true);
    const payLoad = {
      userId: currentUser._id,
      quote: quote.text,
      author: quote.author,
    };

    fetch(`/api/quote-like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payLoad),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
        setIsLiked(true);
        setLikeLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <LoadingState />;
  } else {
    return (
      <Container>
        <QuoteBox quote={quote} />
        {currentUser ? (
          <LikeButton isLiked={isLiked} onClick={likeQuoteHandler}>
            <BiHeart style={{ fontSize: "30px", marginTop: "5px" }} />
          </LikeButton>
        ) : null}

        <QuoteButton onClick={randomHandle}>
          {!quote ? "Get inspired" : "Next"}
        </QuoteButton>
        <FeaturedQuoteBlock />
      </Container>
    );
  }
};

const QuoteBox = ({ quote }) => {
  return (
    <QuoteContainer>
      {quote && quote.text ? (
        <QuoteText>{quote && quote.text}</QuoteText>
      ) : (
        <NoQuote />
      )}
      {/* <QuoteText>{quote && quote ? quote.text : <NoQuote />}</QuoteText> */}
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
  margin-top: 50px;
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
  margin-bottom: 170px;
  font-weight: 600;
  :hover& {
    cursor: pointer;
    background-color: #ed9c00;
    color: white;
    border: #ed9c00 2px solid;
    transition: 0.5s ease-in-out;
  }
  &:active {
    background-color: black;
  }
`;

const animationArrow = keyframes`
0% {
  z-index: -100;
  transform: translateY(0%);
}
25%{
  z-index: -100;
  transform: translateY(20%);
}

50%{
  z-index: -100;
  transform: translateY(40%);
}

75%{
  z-index: -100;
  transform: translateY(20%);
}
100%{
  z-index: -100;
  transform: translateY(0%);
}
`;

const PointingAnimation = styled(AiOutlineArrowDown)`
  z-index: -100;
  font-weight: 400;
  margin: 0 auto;
  animation: ${animationArrow} 2s infinite linear;
  font-size: 50px;
`;

const LikeButton = styled.button`
  height: 49px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ isLiked }) => {
    return isLiked ? "black" : "#f84a55";
  }};
  border: none;
  color: white;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: black;
    transition: 0.3s ease-in-out;
  }
  margin-bottom: 40px;
  margin-top: 15px;
`;

export default QuoteGenerate;
