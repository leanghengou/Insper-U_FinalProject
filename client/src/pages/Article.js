import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  useEffect(() => {
    fetch(`/api/article/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.data));
  }, [id]);

  console.log("article", article);
  return (
    <Container>
      <p>{article && article.title}</p>
      <div>
        <p>By:{article && article.authors.map((item) => item)}</p>
      </div>
      <div>
        <ParagraphContainer>
          {article &&
            article.content.map((item) => {
              return <BodyText>{item}</BodyText>;
            })}
        </ParagraphContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ParagraphContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const BodyText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 25px;
`;

export default Article;
