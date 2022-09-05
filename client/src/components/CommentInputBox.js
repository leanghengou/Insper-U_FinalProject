import { set } from "date-fns";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import defaultProfileImage from "../images/defaultProfileImage.jpg";

const CommentInputBox = ({
  articleId,
  currentUser,
  setComments,
  articleTitle,
}) => {
  const initialValue = {
    firstName: currentUser && currentUser.firstName,
    lastName: currentUser && currentUser.lastName,
    comment: "",
    userId: currentUser && currentUser._id,
    articleId: articleId,
    articleTitle: articleTitle,
  };
  const [commentUser, setCommentUser] = useState(initialValue);
  const [sendButton, setSendButton] = useState(false);
  const [refeshInput, setRefreshInput] = useState(false);

  const refreshComment = () => {
    fetch(`/api/get-comments/${articleId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.data));
  };
  const submitButton = (e) => {
    if (
      commentUser.firstName &&
      commentUser.lastName &&
      commentUser.articleId &&
      commentUser.userId &&
      commentUser.articleTitle
    ) {
      fetch(`/api/post-comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(commentUser),
      })
        .then((res) => {
          console.log("Success!");
          setCommentUser({ ...commentUser, comment: "" });
          refreshComment();
          return res.json();
        })
        .catch((err) => {
          console.log("Not success!");
          console.log(err);
        });
    } else {
      return null;
    }
  };

  const cancelHandler = (e) => {
    setSendButton(false);
    setCommentUser({ ...commentUser, comment: "" });
  };

  return (
    <Container>
      <ProfileImage defaultProfileImage={defaultProfileImage} />
      <InputBoxContainer>
        <InputBox
          value={commentUser.comment}
          onChange={(e) => {
            setSendButton(true);
            console.log("E", e.target.value, sendButton);
            setCommentUser({ ...commentUser, comment: e.target.value });
          }}
          placeholder="Write your comment here..."
        />
        {sendButton ? (
          <ButtonContainer>
            <CancelButton onClick={cancelHandler}>Delete text</CancelButton>
            <SubmitButton onClick={submitButton}>Post a comment</SubmitButton>
          </ButtonContainer>
        ) : null}
      </InputBoxContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
`;

const InputBoxContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.textarea`
  font-family: "Roboto", sans-serif;
  width: auto;
  height: 45px;
  border: none;
  border-bottom: 1px solid #e9e9e9;
  outline: none;
  margin-left: 30px;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.defaultProfileImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
`;

const SubmitButton = styled.button`
  color: white;
  font-weight: 600;
  background-color: black;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    /* box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px; */
    background-color: #ed9c00;
    transition: 0.3s ease-in-out;
  }
`;

const CancelButton = styled.button`
  font-weight: 600;
  background-color: transparent;
  border: 2px solid #e9e9e9;
  border-radius: 5px;
  margin-right: 15px;
  padding: 15px 20px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: #ee3828;
    border: 2px solid #ee3828;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;

const ButtonContainer = styled.div`
  margin-right: 0px;
  margin-left: auto;
`;
export default CommentInputBox;
