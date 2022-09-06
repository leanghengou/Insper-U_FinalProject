import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import LoadingState from "../pages/LoadingState";
import ArticleCard from "../components/ArticleCard";

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
      <Container>
        {articles &&
          articles.map((article) => {
            return (
              <ArticleCardContainer>
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
      </Container>
    );
    // ---------------------------------
  }
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const ArticleCardContainer = styled.div`
  margin-right: 20px;
  margin-bottom: 40px;
`;

export default AllArticles;
