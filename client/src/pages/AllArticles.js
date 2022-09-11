import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import LoadingState from "../pages/LoadingState";
import ArticleCard from "../components/ArticleCard";
import ArticleSlider from "../components/ArticleSlider";

const AllArticles = () => {
  const { currentUser, setLoading, loading } = useContext(CurrentUserContext);
  const nagivate = useNavigate();
  const [articles, setArticles] = useState();
  if (!currentUser) {
    nagivate("/login");
  }

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/all-articles`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
        setLoading(false);
      });
  }, []);

  // ---------------------------------
  if (loading) {
    return <LoadingState />;
  } else {
    // -------------------------
    return (
      <FullContainer>
        <ArticleSlider />

        <BoxContainer>
          {/* <Filter /> */}
          <ArticlersContainer>
            {articles &&
              articles.map((article, index) => {
                return (
                  <ArticleCardContainer key={index}>
                    <ArticleCard
                      title={article && article.title}
                      category={article && article.category[0]}
                      smallText={article && article.content[0]}
                      authors={article && article.authors}
                      image={article && article.image}
                      id={article && article._id}
                    />
                  </ArticleCardContainer>
                );
              })}
          </ArticlersContainer>
        </BoxContainer>
      </FullContainer>
    );
    // ---------------------------------
  }
};

// ------------------------------------
const Filter = () => {
  return (
    <FilterContainer>
      <BigHeader>Filter</BigHeader>
    </FilterContainer>
  );
};

// ------------------------------------

const FullContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const BoxContainer = styled.div`
  border-top: 1px solid #e9e9e9;
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const ArticlersContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  /* width: 75%; */
  display: flex;
  flex-wrap: wrap;
`;

const ArticleCardContainer = styled.div`
  margin-right: 20px;
  margin-bottom: 70px;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  padding-top: 30px;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export default AllArticles;
