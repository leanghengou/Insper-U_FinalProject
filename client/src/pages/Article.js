import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import CommentSection from "../components/CommentSection";

const Article = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [comments, setComments] = useState(null);
  useEffect(() => {
    fetch(`/api/article/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.data));
  }, [id]);

  useEffect(() => {
    fetch(`/api/get-comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data.data));
  }, [id]);

  return (
    <Container>
      <ArticleImage imageSrc={article && article.image} />
      <ArticleSection>
        <ArticleBox>
          <BigHeader>{article && article.title}</BigHeader>
          <div>
            <AuthorText>
              By: {article && article.authors.map((item) => item + ", ")}
            </AuthorText>
            <DateText>
              {article &&
                article.postDate.month +
                  " " +
                  article.postDate.day +
                  " " +
                  article.postDate.year}
            </DateText>
          </div>
          {article &&
            article.content.map((item) => {
              return <BodyText key={item}>{item}</BodyText>;
            })}
        </ArticleBox>
        <Sidebar></Sidebar>
      </ArticleSection>
      <CommentSection
        comments={comments}
        articleId={id}
        currentUser={currentUser}
        setComments={setComments}
        articleComments={article && article.comments}
      />
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

const ArticleBox = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const ArticleSection = styled.div`
  display: flex;
  text-align: left;
`;

const BodyText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 25px;
`;

const AuthorText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 25px;
`;

const DateText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 25px;
  color: #6c6c6c;
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 20px;
`;

const BigHeader = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-top: 70px;
  margin-bottom: 20px;
  padding-top: 20px;
  line-height: 60px;
`;

const ArticleImage = styled.div`
  width: 1280px;
  height: 600px;
  background-image: url(${(props) => props.imageSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export default Article;
