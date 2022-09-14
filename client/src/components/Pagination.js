import React from "react";
import styled from "styled-components";

const Pagination = ({ totalMessages, messageGroupNum, movePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMessages / messageGroupNum); i++) {
    pageNumbers.push(i);
  }
  console.log("page number", pageNumbers, totalMessages, messageGroupNum);
  return (
    <Container>
      <ul>
        {pageNumbers &&
          pageNumbers.map((item) => {
            return (
              <NumberButton
                onClick={() => {
                  movePage(item);
                }}
              >
                {item}
              </NumberButton>
            );
          })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const NumberButton = styled.button`
  margin: 5px;
  padding: 10px 15px;
  border: 1px solid #c7c7c7;
  border-radius: 3px;
  transition: 0.3s ease-in-out;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: #ed9c00;
    border: 1px solid #ed9c00;
    color: white;
  }
`;

export default Pagination;
