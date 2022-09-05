import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileFeed from "../components/ProfileFeed";
import { CurrentUserContext } from "../CurrentUserContext";

const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [recentComment, setRecentComment] = useState(null);
  const [recentLike, setRecentLike] = useState(null);

  const navigate = useNavigate("");
  if (!currentUser) {
    navigate("/login");
  }

  useEffect(() => {
    fetch(`/api/user-comment-article/${id}`)
      .then((res) => res.json())
      .then((data) => setRecentComment(data.data));
  }, [id]);

  useEffect(() => {
    fetch(`/api/user-like-article/${id}`)
      .then((res) => res.json())
      .then((data) => setRecentLike(data.data));
  }, [id]);

  useEffect(() => {
    fetch(`/api/get-spec-user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  }, [id]);

  return (
    <Container>
      <UserInfoPart user={user} currentUser={currentUser} />
      {user && user.bio ? <BioBox bio={user.bio} /> : null}
      <ProfileFeed recentComment={recentComment} recentLike={recentLike} />
    </Container>
  );
};
// ---------------------------------------------------------------------------------------
const UserInfoPart = ({ user, currentUser }) => {
  return (
    <UserInfoContainer>
      <UserInfoProfile>
        <UserImage />
        <UserInfo>
          <LocationBox>
            <BodyText>{user && user.location}</BodyText>
          </LocationBox>
          <div>
            {currentUser ? (
              <Username>
                {user && user._id === currentUser._id
                  ? `${user.firstName + " " + user.lastName + " " + "(You)"}`
                  : user && user.lastName}
              </Username>
            ) : (
              <Username>
                {user && user.firstName + " " + user.lastName}
              </Username>
            )}
          </div>
          {user && user.nickname ? (
            <Nickname>{user && user.nickname}</Nickname>
          ) : null}
        </UserInfo>
      </UserInfoProfile>
      <ButtonContainer>
        <EditButton>Edit profile</EditButton>
      </ButtonContainer>
    </UserInfoContainer>
  );
};

const BioBox = ({ bio }) => {
  return (
    <BioContainer>
      <BioTextContainer>
        <Subtitle>Bio</Subtitle>
        <BioText>{bio}</BioText>
      </BioTextContainer>
    </BioContainer>
  );
};

// ---------------------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
`;

const UserInfoContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const UserInfoProfile = styled.div`
  display: flex;
  width: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: center;
`;

const UserImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: aqua;
`;

const LocationBox = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.h3`
  font-size: 25px;
  line-height: 35px;
  font-weight: 600;
`;

const Nickname = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: #6c6c6c;
  margin-top: 10px;
  font-style: italic;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditButton = styled.button`
  padding: 15px 25px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: transparent;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 25px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  padding-top: 10px;
  margin-block-start: 0em;
`;

const BioContainer = styled.div`
  margin-top: 50px;
  padding: 20px 0;
  border-top: 1px solid #c7c7c7;
  width: 100%;
`;

const BioTextContainer = styled.div`
  width: 60%;
`;

const BioText = styled.p`
  font-size: 16px;
  line-height: 25px;
  /* font-style: italic; */
  font-weight: 400;
  margin-top: 20px;
`;

export default Profile;
