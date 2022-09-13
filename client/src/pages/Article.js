import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import styled, { keyframes } from "styled-components";
import CommentSection from "../components/CommentSection";
import YouMayInterested from "../components/YouMayInterested";
import LoadingState from "../pages/LoadingState";
import { AiFillCheckCircle, AiOutlineExclamationCircle } from "react-icons/ai";

const Article = () => {
  const { currentUser, setLoading, loading } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
        setCurrentCategory(data.data.category[0]);
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
  }, [comments && comments]);
  // ----------------------------------

  useEffect(() => {
    if (currentCategory) {
      fetch(`/api/get-article-category/${currentCategory && currentCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setCategoryArticles(data.data);
        });
    }
  }, [currentCategory]);

  // ---------------------------------
  if (loading) {
    return <LoadingState />;
  } else {
    // -------------------------
    return (
      <Container>
        {success ? <SuccessMessage /> : null}
        {error ? <ErrorMessage /> : null}
        {article ? (
          <>
            <ArticleImage imageSrc={article && article.image} />
            <ArticleSection>
              <ArticleBox>
                <BigHeader>{article && article.title}</BigHeader>
                <div>
                  <AuthorText>
                    {"By " + `${article && article.authors[0]}`}
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
                <Subtitle>{`Related articles`}</Subtitle>
                {categoryArticles &&
                  categoryArticles.map((article, index) => {
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
                      <div key={index}>
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
              setError={setError}
              setSuccess={setSuccess}
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
// -----------------------
const SuccessMessage = () => {
  return (
    <SuccessBox>
      <AiFillCheckCircle
        style={{ fontSize: "35px", color: "white", marginRight: "15px" }}
      />
      <MessageText>Your comment is successfully posted!</MessageText>
    </SuccessBox>
  );
};

const ErrorMessage = () => {
  return (
    <ErrorBox>
      <AiOutlineExclamationCircle
        style={{ fontSize: "35px", color: "white", marginRight: "15px" }}
      />
      <MessageText>Negative comments are not allowed here.</MessageText>
    </ErrorBox>
  );
};
// -----------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 70px;
`;

const ArticleBox = styled.div`
  width: 70%;
  margin-top: 100px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9e9e9;
  padding-bottom: 70px;
`;

const Sidebar = styled.div`
  width: 27%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding-left: 3%;
`;
const ArticleSection = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
  border-bottom: 1px solid #e9e9e9;
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
  margin-bottom: 20px;
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

// ----------------------------
const animationOne = keyframes`
0% {
    transform: translateY(-1000px);
  }
  25%{ 
    transform: translateY(0px);
  }

  75%{ 
    transform: translateY(0px);
  }
  100%{ 
    transform: translateY(-1000px);
  }
`;
const SuccessBox = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 65px;
  background-color: #ed9c00;
  position: fixed;
  border-radius: 10px;
  align-items: center;
  animation: ${animationOne} 7s linear forwards;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 65px;
  background-color: #ed0000;
  position: fixed;
  border-radius: 10px;
  align-items: center;
  animation: ${animationOne} 7s linear forwards;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const MessageText = styled.div`
  color: white;
  font-weight: 500;
`;

// ----------------------------
export default Article;
