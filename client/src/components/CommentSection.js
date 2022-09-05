import styled from "styled-components";
import CommentInputBox from "./CommentInputBox";
import CommentsPosted from "./CommentsPosted";
import { BiHeart } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";

const CommentSection = ({
  comments,
  articleId,
  currentUser,
  setComments,
  articleComments,
  articleLikes,
  articleTitle,
}) => {
  const [isLike, setIsLike] = useState();
  // console.log("article like", articleLikes, currentUser._id);
  const [numLikes, setNumLikes] = useState(0);

  useEffect(() => {
    setIsLike({ articleId: articleId, userId: currentUser._id });
    setNumLikes(articleLikes && articleLikes);
  }, [articleId]);

  const [isLikedValidate, setIsLikeValidate] = useState(
    articleLikes && articleLikes.some((id) => id === currentUser._id)
  );

  const likeHandler = (e) => {
    setIsLikeValidate(!isLikedValidate);
    fetch(`/api/like-article`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(isLike),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Now this data is updating: ", isLikedValidate);
        console.log(data);
        setNumLikes(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <CommentInfoContainer>
        <FlexBox>
          <BigHeader>Share your thought here...</BigHeader>
          <CommentLike>
            <BodyText style={{ fontWeight: "500" }}>
              {numLikes.length + " "}
              {numLikes >= 2 ? "likes" : "like"}
            </BodyText>
            <BodyText style={{ marginLeft: "20px", fontWeight: "500" }}>
              {articleComments && articleComments.length + " "}
              {articleComments && articleComments.length >= 2
                ? "comments"
                : "comment"}
            </BodyText>
          </CommentLike>
        </FlexBox>
        {currentUser ? (
          <LikeButton isLikedValidate={isLikedValidate}>
            <BiHeart
              onClick={likeHandler}
              style={{ fontSize: "30px", marginTop: "5px" }}
            />
          </LikeButton>
        ) : null}
      </CommentInfoContainer>
      <CommentInputBox
        articleId={articleId}
        currentUser={currentUser}
        setComments={setComments}
        articleTitle={articleTitle}
      />
      <CommentsPosted comments={comments} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const FlexBox = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 20px;
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

const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
  padding-top: 20px;
  padding-bottom: 70px;
`;

const CommentLike = styled.div`
  display: flex;
  align-items: center;
`;

const CommentInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e9e9e9;
  margin-top: 50px;
`;

const LikeButton = styled.button`
  height: 49px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ isLikedValidate }) => {
    return isLikedValidate ? "black" : "#f84a55";
  }};
  border: none;
  color: white;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: black;
    transition: 0.3s ease-in-out;
  }
`;

export default CommentSection;
