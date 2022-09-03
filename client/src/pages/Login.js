import { set } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";
import image from "../images/topofthemountain.jpg";

const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser, currentUser } = useContext(CurrentUserContext);
  const [verifyUser, setVerifyUser] = useState(null);
  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  });

  setCurrentUser(null);

  // --------------------------
  const loginHandler = (e) => {
    fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVerifyUser(data);
        if (data && data.status === 200) {
          setCurrentUser(data.data);
          navigate("/");
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CreatAccount = () => {
    navigate("/register");
  };

  return (
    <Container>
      <LoginForm>
        <FormContiner>
          <TextContainer>
            <BigHeader>Login</BigHeader>
            <BodyText>
              Special, that is our asset. Talent is a common word that everyone
              knows and respects.
            </BodyText>
          </TextContainer>
          <LebelTag>
            <BodyText>Email</BodyText>
          </LebelTag>
          <InputBox
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <LebelTag>
            <BodyText>Passwords</BodyText>
          </LebelTag>
          <InputBox
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            type="password"
            style={{ fontSize: "20px" }}
          />
          <OrText>Don’t have an account?</OrText>
          <LoginButton onClick={loginHandler}>Login</LoginButton>
          <CreateAccountButton onClick={CreatAccount}>
            Create an account
          </CreateAccountButton>
        </FormContiner>
      </LoginForm>
      <ImageBackground image={image} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 120px;
  font-size: 16px;
  width: 55%;
  height: auto;
  margin-bottom: 40px;
  background-color: white;
  padding-right: 10px;
`;

const LebelTag = styled.div`
  width: 100%;
  height: 120px;
  font-size: 16px;
  width: 55%;
  height: auto;
  background-color: white;
  padding-right: 10px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-bottom: 10px;
`;
const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
`;

const OrText = styled.p`
  font-size: 16px;
  line-height: 25px;
  margin: 20px 0;
`;

const ImageBackground = styled.div`
  width: 60%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const FormContiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.input`
  font-size: 16px;
  width: 55%;
  padding-left: 15px;
  height: 6%;
  margin-bottom: 15px;
  border: 1px solid #c7c7c7;
  border-radius: 3px;
`;

const LoginButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  width: 58%;
  height: 7%;
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

const CreateAccountButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  width: 58%;
  height: 7%;
  border: 1px solid black;
  border-radius: 3px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;

const LoginForm = styled.div`
  width: 40%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;

export default Login;
