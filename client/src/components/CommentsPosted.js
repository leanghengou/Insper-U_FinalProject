import styled from "styled-components";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import defaultProfileImage from "../images/defaultProfileImage.jpg";

const CommentsPosted = ({ comments }) => {
  const nagivate = useNavigate();
  return (
    <Container>
      <div>
        {comments &&
          comments.map((comment, index) => {
            const date = new Date(comment && comment.date);
            const month = format(date, "MMMM");
            const day = format(date, "dd");
            const year = format(date, "yyyy");
            const profileHandler = (e) => {
              nagivate(`/profile/${comment && comment.userId}`);
            };
            return (
              <CommentBox key={index}>
                <ProfilePic
                  defaultProfileImage={defaultProfileImage}
                  onClick={profileHandler}
                />
                <CommentContainer>
                  <CommentUserInfo>
                    <UserInfo key={index}>
                      <Bolder onClick={profileHandler}>
                        {comment.firstName + " " + comment.lastName}
                      </Bolder>
                      <DateComment>
                        {month + " " + day + " " + year}
                      </DateComment>
                    </UserInfo>
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
  &:last-child {
    border-bottom: none;
  }
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;
const CommentUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentTextContainer = styled.div`
  max-width: 70%;
`;

const UserInfo = styled.p`
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 10px;
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
`;
const Bolder = styled.span`
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ProfilePic = styled.div`
  width: 50px;
  height: 47px;
  background-image: url(${(props) => props.defaultProfileImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const DateComment = styled.span`
  color: #6c6c6c;
  margin-left: 10px;
`;

export default CommentsPosted;
