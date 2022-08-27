import { set } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  });

  // ------------Condition if user pasword and email is correct.......
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
        setCurrentUser(data.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <LoginForm>
        <InputBox
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
          placeholder="Email"
        />
        <InputBox
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
          placeholder="Passwords"
        />
        <LoginButton onClick={loginHandler}>Login</LoginButton>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 15px;
  border: 1px solid black;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: aqua;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Login;
