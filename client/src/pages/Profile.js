import styled from "styled-components";
import ProfileFeed from "../components/ProfileFeed";

const Profile = () => {
  return (
    <Container>
      <UserInfoPart />
      <BioBox />
      <ProfileFeed />
    </Container>
  );
};
// ---------------------------------------------------------------------------------------
const UserInfoPart = () => {
  return (
    <UserInfoContainer>
      <UserInfoProfile>
        <UserImage />
        <UserInfo>
          <LocationBox>
            <p>City : </p>
            <p>Montreal</p>
          </LocationBox>
          <Username>Cross Mevo (You)</Username>
          <Nickname>Call me Maybe</Nickname>
        </UserInfo>
      </UserInfoProfile>
      <ButtonContainer>
        <EditButton>Edit profile</EditButton>
      </ButtonContainer>
    </UserInfoContainer>
  );
};

const BioBox = () => {
  return (
    <BioContainer>
      <BioTextContainer>
        <Subtitle>Bio</Subtitle>
        <BioText>
          Hard work refers to the practice, it is the construction of talent.
          Talent wouldn’t exist in us if we didn’t do anything to achieve it.
          Talent isn’t a gift, it’s the reward that we receive from practicing.
          When we practice a lot, our skill and technique will be developed and
          improve, with better skill and technique, we’ll surely be able to
          perform better.
        </BioText>
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
  font-size: 25px;
  font-weight: 600;
`;

const BioContainer = styled.div`
  margin-top: 50px;
  padding: 30px 0;
  border-top: 1px solid #c7c7c7;
`;

const BioTextContainer = styled.div`
  width: 60%;
`;

const BioText = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-style: italic;
  font-weight: 400;
  margin-top: 20px;
`;

export default Profile;
