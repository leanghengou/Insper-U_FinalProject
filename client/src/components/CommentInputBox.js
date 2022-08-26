import { useState } from "react";
import styled from "styled-components";

const CommentInputBox = () => {
  const [sendButton, setSendButton] = useState(false);
  console.log(sendButton);
  return (
    <Container>
      <ProfileImage />
      <InputBox
        onChange={(e) => {
          if (e.target.value) {
            setSendButton(true);
          } else {
            setSendButton(false);
          }
        }}
        placeholder="Write your comment here..."
      />
      {sendButton ? <SubmitButton>Post comment</SubmitButton> : null}
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
