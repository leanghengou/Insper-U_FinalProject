import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import LoadingState from "./LoadingState";

const Search = () => {
  const { loading, setLoading, currentUser, allArticles } =
    useContext(CurrentUserContext);

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  if (!allArticles) {
    return <LoadingState />;
  } else {
    return (
      <Container>
        <SearchBackground>
          <PageTitle>
            Looking for something? You could search for it below!
          </PageTitle>
          <SearchInput
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
            placeholder="Write your search here..."
          />
          <ResultContainer>
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
                    <ArticleBox
                      onClick={() => {
                        navigate(`/article/${article && article._id}`);
                      }}
                    >
                      <ArticleImage image={article && article.image} />
                      <ArticleInfoContainer>
                        <TitleText>{article && article.title}</TitleText>
                        <Category category={article && article.category[0]} />
                      </ArticleInfoContainer>
                    </ArticleBox>
                  );
                })}
          </ResultContainer>
        </SearchBackground>
      </Container>
    );
  }
};

// ---------------------------------------------------

const Category = ({ category }) => {
  if (category && category === "personal-development") {
    const articleCateogry = "Personal development";
    return <BodyText>{articleCateogry}</BodyText>;
  }
  if (category && category === "life-tip") {
    const articleCateogry = "Life tips";
    return <BodyText>{articleCateogry}</BodyText>;
  }
  if (category && category === "personal-story") {
    const articleCateogry = "Personal story";
    return <BodyText>{articleCateogry}</BodyText>;
  } else {
    return (
      <div>
        <BodyText>
          {category && category.charAt(0).toUpperCase() + category.slice(1)}
        </BodyText>
      </div>
    );
  }
};

// Styleing-------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 100px;
`;

const PageTitle = styled.div`
  font-size: 30px;
  line-height: 43px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const SearchBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  z-index: 95;
`;

const SearchInput = styled.input`
  width: 800px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

// ---------------------------

const animationOne = keyframes`
 from{
    opacity: 0;
    transform: translateY(1400px);
 }to{
    transform: translateY(0px);
    opacity: 1;
 }
`;

// ------------------------

const ArticleBox = styled.div`
  width: 800px;
  height: 120px;
  display: flex;
  align-items: center;
  background-color: white;
  transition: 0.3s ease-in-out;
  animation: ${animationOne} 1s forwards;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

const ArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
`;

const TitleText = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
`;

const ArticleImage = styled.div`
  height: 100px;
  width: 140px;
  margin-left: 10px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
`;

export default Search;
