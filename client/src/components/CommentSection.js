import styled from "styled-components";
import CommentInputBox from "./CommentInputBox";
import CommentsPosted from "./CommentsPosted";

const CommentSection = ({
  comments,
  articleId,
  currentUser,
  setComments,
  articleComments,
}) => {
  return (
    <Container>
      <FlexBox>
        <BigHeader>Share your thought here...</BigHeader>
        <BodyText>
          {articleComments && articleComments.length + " "}
          {articleComments && articleComments.length >= 2
            ? "comments"
            : "comments"}
        </BodyText>
      </FlexBox>
      <CommentInputBox
        articleId={articleId}
        currentUser={currentUser}
        setComments={setComments}
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
  border-top: 0.5px solid #e9e9e9;
  width: 100%;
  height: auto;
  align-items: center;
  margin-top: 100px;
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

export default CommentSection;
