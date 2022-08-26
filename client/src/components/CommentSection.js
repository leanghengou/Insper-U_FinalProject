import styled from "styled-components";
import CommentInputBox from "./CommentInputBox";
import CommentsPosted from "./CommentsPosted";

const CommentSection = ({ comments, articleId, currentUser }) => {
  return (
    <Container>
      <CommentInputBox articleId={articleId} currentUser={currentUser} />
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
  margin-top: 100px;
`;

export default CommentSection;
