import { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import backgroundImage from "../images/registerbackground.png";

const CreateAccount = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [newUserId, setNewUserId] = useState(null);
  const navigate = useNavigate();
  const initialUserValue = {
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    location: "",
    bio: "",
    password: "",
  };
  const [newPassword, setNewPassword] = useState(null);
  const [registerUser, setRegisterUser] = useState(initialUserValue);

  const registerButton = (e) => {
    if (
      registerUser.firstName &&
      registerUser.lastName &&
      registerUser.email &&
      registerUser.password
    ) {
      fetch(`/api/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(registerUser),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCurrentUser(data.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return null;
    }
  };
  console.log("current user", currentUser);
  return (
    <Container>
      <FormBox>
        <FormContainer>
          <LoginForm>
            <TwoColumnBox>
              <InputContainer>
                <LebelTag>First name</LebelTag>
                <InputBox
                  onChange={(e) => {
                    setRegisterUser({
                      ...registerUser,
                      firstName: e.target.value,
                    });
                  }}
                />
              </InputContainer>
              <InputContainer>
                <LebelTag>Last name</LebelTag>
                <InputBox
                  onChange={(e) => {
                    setRegisterUser({
                      ...registerUser,
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
                  onChange={(e) => {
                    setRegisterUser({
                      ...registerUser,
                      nickname: e.target.value,
                    });
                  }}
                />
              </InputContainer>
              <InputContainer>
                <LebelTag>Email</LebelTag>
                <InputBox
                  onChange={(e) => {
                    setRegisterUser({ ...registerUser, email: e.target.value });
                  }}
                />
              </InputContainer>
            </TwoColumnBox>
            <OneColumnBox>
              <LebelTag>Address</LebelTag>
              <InputBox
                onChange={(e) => {
                  setRegisterUser({
                    ...registerUser,
                    location: e.target.value,
                  });
                }}
              />
            </OneColumnBox>
            <TwoColumnBox>
              <InputContainer>
                <LebelTag>Passwords</LebelTag>
                <InputBox
                  type="password"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </InputContainer>

              <InputContainer>
                <LebelTag>Confirm passwords</LebelTag>
                <InputBox
                  type="password"
                  onChange={(e) => {
                    if (newPassword === e.target.value) {
                      setRegisterUser({
                        ...registerUser,
                        password: e.target.value,
                      });
                    }
                    if (newPassword !== e.target.value) {
                      setRegisterUser({ ...registerUser, password: "" });
                    }
                  }}
                />
              </InputContainer>
            </TwoColumnBox>
            <LebelTag>Tell us more about you...</LebelTag>
            <BioInputBox
              onChange={(e) => {
                setRegisterUser({ ...registerUser, bio: e.target.value });
              }}
            />

            <OneColumnBox>
              <RegisterButton onClick={registerButton}>
                Create an account
              </RegisterButton>
            </OneColumnBox>
          </LoginForm>
        </FormContainer>
      </FormBox>
      <ImageBox backgroundImage={backgroundImage}>
        <TextContainer>
          <BigHeader>Already have an account?</BigHeader>
          <BodyText>
            Click on the button below to sign in your account.
          </BodyText>
          <LoginButton
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </LoginButton>
        </TextContainer>
      </ImageBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999999999;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: white;
`;

const FormBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageBox = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const LebelTag = styled.p`
  width: 100%;
  height: 120px;
  font-size: 16px;
  width: 55%;
  height: auto;
  background-color: white;
  padding-right: 10px;
  margin-bottom: 2px;
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
  width: 70%;
  margin-top: 80px;
  margin-left: 100px;
  color: white;
`;

const LoginButton = styled.button`
  padding: 15px 45px;
  border: 1px solid white;
  border-radius: 3px;
  margin-top: 30px;
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    transition: 0.3s ease-in-out;
  }
`;
export default CreateAccount;
