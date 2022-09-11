import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";

const UpdateUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  if (!currentUser) {
    navigate("/login");
  }
  const initialUserValue = {
    _id: currentUser._id,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    nickname: currentUser.nickname,
    location: currentUser.location,
    bio: currentUser.bio,
  };
  const [updateInfo, setUpdateInfo] = useState(initialUserValue);
  const registerButton = (e) => {
    if (
      updateInfo.firstName ||
      updateInfo.lastName ||
      updateInfo.nickname ||
      updateInfo.location ||
      updateInfo.bio
    ) {
      fetch(`/api/update-user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(updateInfo),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCurrentUser(data.data);
          navigate(`/profile/${currentUser._id}`);
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
      <TextContainer>
        <BigHeader>Update account</BigHeader>
        <BodyText>
          Update your profile by changing the current user info down below.
          Press <Bold>"Update account"</Bold> when you are finish.
        </BodyText>
      </TextContainer>
      <FormBox>
        <FormContainer>
          <LoginForm>
            <TwoColumnBox>
              <InputContainer>
                <LebelTag>First name</LebelTag>
                <InputBox
                  value={updateInfo.firstName}
                  onChange={(e) => {
                    setUpdateInfo({
                      ...updateInfo,
                      firstName: e.target.value,
                    });
                  }}
                />
              </InputContainer>
              <InputContainer>
                <LebelTag>Last name</LebelTag>
                <InputBox
                  value={updateInfo.lastName}
                  onChange={(e) => {
                    setUpdateInfo({
                      ...updateInfo,
                      lastName: e.target.value,
                    });
                  }}
                />
              </InputContainer>
            </TwoColumnBox>
            <TwoColumnBox>
              <InputContainer>
                <LebelTag>Nickname</LebelTag>
                <InputBox
                  value={updateInfo.nickname}
                  onChange={(e) => {
                    setUpdateInfo({
                      ...updateInfo,
                      nickname: e.target.value,
                    });
                  }}
                />
              </InputContainer>
            </TwoColumnBox>
            <OneColumnBox>
              <LebelTag>Address</LebelTag>
              <InputBox
                value={updateInfo.location}
                onChange={(e) => {
                  setUpdateInfo({
                    ...updateInfo,
                    location: e.target.value,
                  });
                }}
              />
            </OneColumnBox>

            <LebelTag>Tell us more about you...</LebelTag>
            <BioInputBox
              value={updateInfo.bio}
              onChange={(e) => {
                setUpdateInfo({ ...updateInfo, bio: e.target.value });
              }}
            />

            <OneColumnBox>
              <RegisterButton onClick={registerButton}>
                Update acccount
              </RegisterButton>
            </OneColumnBox>
          </LoginForm>
        </FormContainer>
      </FormBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  margin-top: 100px;
  justify-content: space-between;
`;

const FormBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const LebelTag = styled.p`
  width: 100%;
  height: 120px;
  font-size: 16px;
  width: 55%;
  height: auto;
  background-color: white;
  padding-right: 10px;
  font-weight: 600;
`;

const InputBox = styled.input`
  font-size: 16px;
  padding-left: 15px;
  height: 35px;
  margin-bottom: 15px;
  border: 1px solid #c7c7c7;
  border-radius: 3px;
`;

const BioInputBox = styled.textarea`
  height: 120px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  border: 1px solid #c7c7c7;
  padding-left: 15px;
  padding-top: 15px;
  border-radius: 3px;
`;

const LoginForm = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const TwoColumnBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OneColumnBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const RegisterButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  height: 45px;
  color: white;
  border: none;
  background-color: #ed9c00;
  border-radius: 3px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-bottom: 20px;
`;
const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
`;

const TextContainer = styled.div`
  width: 30%;
  margin-bottom: 50px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

export default UpdateUser;
