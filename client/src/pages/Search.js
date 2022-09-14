import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import LoadingState from "./LoadingState";

const Search = () => {
  const { loading, setLoading, currentUser, allArticles } =
    useContext(CurrentUserContext);

  const [searchText, setSearchText] = useState("");

  if (!allArticles) {
    return <LoadingState />;
  } else {
    return (
      <Container>
        <SearchInput
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
          }}
          placeholder="Write your search here..."
        />

        <div>
          {allArticles &&
            allArticles
              .filter((item) => {
                if (searchText === "") {
                  return null;
                } else if (
                  item &&
                  item.title
                    .toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                ) {
                  return item;
                }
              })
              .map((article, index) => {
                return (
                  <div>
                    <p>{article && article.title}</p>
                  </div>
                );
              })}
        </div>
      </Container>
    );
  }
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

const SearchInput = styled.input`
  width: 800px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
`;

export default Search;
