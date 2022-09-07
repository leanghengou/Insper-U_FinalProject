import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import styled from "styled-components";
import CommentSection from "../components/CommentSection";
import YouMayInterested from "../components/YouMayInterested";
import LoadingState from "../pages/LoadingState";

const Article = () => {
  const { currentUser, setLoading, loading } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login");
  }

  const { id } = useParams();

  const [categoryArticles, setCategoryArticles] = useState(null);

  const [article, setArticle] = useState();
  const [comments, setComments] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/article/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.data);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    fetch(`/api/get-comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.data);
      });
  }, [id]);
  // ----------------------------------

  useEffect(() => {
    fetch(`/api/get-article-category/economic`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryArticles(data.data);
      });
  }, []);
  // ---------------------------------
  if (loading) {
    return <LoadingState />;
  } else {
    // -------------------------
    return (
      <Container>
        {article ? (
          <>
            <ArticleImage imageSrc={article && article.image} />
            <ArticleSection>
              <ArticleBox>
                <BigHeader>{article && article.title}</BigHeader>
                <div>
                  <AuthorText>
                    By {article && article.authors.map((item) => item)}
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
                <TextContainer>
                  {article &&
                    article.content.map((item) => {
                      return <BodyText key={item}>{item}</BodyText>;
                    })}
                </TextContainer>
              </ArticleBox>
              <Sidebar>
                <Subtitle>{`Read about related articles`}</Subtitle>
                {categoryArticles &&
                  categoryArticles.map((article) => {
                    console.log("ARTICLLEEE", article);
                    let category = article && article.category[0];
                    if (category === "personal-development") {
                      category = "Personal development";
                    }
                    if (category === "life-tip") {
                      category = "Life tips";
                    }
                    if (category === "Personal story") {
                      category = "Personal story";
                    } else {
                      category =
                        category.charAt(0).toUpperCase() + category.slice(1);
                    }
                    return (
                      <div>
                        <ArticleName
                          onClick={() => {
                            navigate(`/article/${article && article._id}`);
                          }}
                        >
                          {article && article.title}
                        </ArticleName>
                        <ArticleCategory>{category}</ArticleCategory>
                      </div>
                    );
                  })}
              </Sidebar>
            </ArticleSection>
            <CommentSection
              comments={comments}
              articleId={id}
              currentUser={currentUser}
              setComments={setComments}
              articleComments={article && article.comments}
              articleLikes={article && article.likes}
              articleTitle={article && article.title}
            />
            <YouMayInterested />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    );
    // ---------------------------------
  }
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
  width: 27%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  border-left: 1px solid #e9e9e9;
  padding-left: 3%;
`;
const ArticleSection = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
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
  border-bottom: 1px solid #e9e9e9;
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

const Subtitle = styled.h1`
  text-transform: uppercase;
  font-size: 25px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  padding-top: 30px;
  margin-block-start: 0em;
  margin-block-end: 1em;
`;

const ArticleName = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: #ed9c00;
    transition: 0.3s ease-in-out;
  }
`;

const ArticleCategory = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: #6c6c6c;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  width: 95%;
`;

export default Article;
