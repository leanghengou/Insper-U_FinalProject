import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";

const CommentInputBox = ({ articleId, currentUser, setComments }) => {
  const initialValue = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    comment: null,
    userId: currentUser._id,
    articleId: articleId,
  };
  const [commentUser, setCommentUser] = useState(initialValue);
  const [sendButton, setSendButton] = useState(false);

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
      commentUser.userId
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

  console.log("Comment user", commentUser.firstName);
  return (
    <Container>
      <ProfileImage />
      <InputBox
        onChange={(e) => {
          if (e.target.value) {
            setSendButton(true);
            setCommentUser({ ...commentUser, comment: e.target.value });
          } else {
            setSendButton(false);
          }
        }}
        placeholder="Write your comment here..."
      />
      {sendButton ? (
        <SubmitButton onClick={submitButton}>Post comment</SubmitButton>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
  margin-top: 100px;
`;

const InputBox = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  margin-left: 30px;
`;

const ProfileImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: aqua;
`;

const SubmitButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: aquamarine;
  border: none;
  border-radius: 5px;
  margin-left: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export default CommentInputBox;
