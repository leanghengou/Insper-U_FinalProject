import styled from "styled-components";
import CommentInputBox from "./CommentInputBox";

const CommentSection = () => {
  return (
    <Container>
      <CommentInputBox />
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
