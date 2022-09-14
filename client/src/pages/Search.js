import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import LoadingState from "./LoadingState";

const Search = () => {
  const { loading, setLoading, currentUser } = useContext(CurrentUserContext);

  if (loading) {
    return <LoadingState />;
  } else {
    return (
      <Container>
        <SearchInput placeholder="Write your search here..." />
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
