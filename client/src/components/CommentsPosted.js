import styled from "styled-components";
import CommentInputBox from "./CommentInputBox";

const CommentsPosted = ({ comments }) => {
  return (
    <Container>
      <div>
        {comments &&
          comments.map((comment, index) => {
            return (
              <CommentBox>
                <ProfilePic />
                <CommentContainer>
                  <CommentUserInfo>
                    <BodyText key={index}>
                      <Bolder>
                        {comment.firstName + " " + comment.lastName}
                      </Bolder>
                    </BodyText>
                  </CommentUserInfo>
                  <CommentTextContainer>
                    <BodyText key={index}>{comment.comment}</BodyText>
                  </CommentTextContainer>
                </CommentContainer>
              </CommentBox>
            );
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
  margin-top: 30px;
`;

const CommentBox = styled.div`
  width: 1280px;
  height: auto;
  padding: 20px 0;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 20px 0;
  width: 100%;
`;
const CommentUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentTextContainer = styled.div`
  max-width: 70%;
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
`;
const Bolder = styled.span`
  font-weight: 600;
`;

const ProfilePic = styled.div`
  width: 50px;
  height: 50px;
  background-color: aqua;
  border-radius: 50%;
`;

export default CommentsPosted;
