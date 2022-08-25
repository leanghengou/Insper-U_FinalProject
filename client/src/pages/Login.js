import { set } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [allUser, setAllUser] = useState(null);
  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    fetch("/api/get-users")
      .then((res) => res.json())
      .then((data) => setAllUser(data.data));
  }, []);

  console.log("user", currentUser);

  // ------------Condition if user pasword and email is correct.......
  allUser &&
    allUser.filter((user) => {
      if (
        user &&
        user.email !== loginInfo.email &&
        user &&
        user.password !== loginInfo.password
      ) {
        setCurrentUser(null);
      } else if (
        user &&
        user.email === loginInfo.email &&
        user &&
        user.password === loginInfo.password
      ) {
        setCurrentUser(user);
      }
    });
  // ------------------------------------------------
  const loginHandler = (e) => {
    if (currentUser) {
      console.log(currentUser);
      navigate("/");
    }
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
