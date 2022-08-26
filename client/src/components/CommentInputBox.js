import { useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";

const CommentInputBox = ({ articleId, currentUser }) => {
  const initialValue = {
    firstName: () => {
      if (currentUser.firstName) {
        return currentUser.firstName;
      } else {
        return null;
      }
    },
    lastName: () => {
      if (currentUser.lastName) {
        return currentUser.lastName;
      } else {
        return null;
      }
    },
    comment: null,
    userId: () => {
      if (currentUser._id) {
        return currentUser._id;
      } else {
        return null;
      }
    },
    articleId: articleId,
  };
  const [commentUser, setCommentUser] = useState(initialValue);
  const [sendButton, setSendButton] = useState(false);
  console.log("currentUser", currentUser);
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
          return res.json();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return null;
    }
  };
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
