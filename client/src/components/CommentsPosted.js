import styled from "styled-components";
import CommentInputBox from "./CommentInputBox";

const CommentsPosted = ({ comments }) => {
  return (
    <Container>
      <BigHeader>Comments</BigHeader>
      <div>
        {comments &&
          comments.map((comment, index) => {
            return <p key={index}>{comment.comment}</p>;
          })}
      </div>
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
  margin-top: 100px;
`;

const BigHeader = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-top: 70px;
  margin-bottom: 40px;
  padding-top: 20px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.5);
`;

export default CommentsPosted;
