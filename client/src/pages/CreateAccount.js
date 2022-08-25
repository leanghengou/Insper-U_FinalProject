import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import { set } from "date-fns";

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
  // useEffect(() => {
  //   fetch("/api/get-users")
  //     .then((res) => res.json())
  //     .then((data) => setAllUser(data.data));
  // }, []);
  // allUser &&
  //   allUser.filter((user) => {
  //     if (user.email === registerUser.email) {
  //       setNewUserId(user._id);
  //     }
  //   });

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
      <LoginForm>
        <BodyText>Last name</BodyText>
        <InputBox
          onChange={(e) => {
            setRegisterUser({ ...registerUser, firstName: e.target.value });
          }}
          placeholder="First name"
        />
        <InputBox
          onChange={(e) => {
            setRegisterUser({ ...registerUser, lastName: e.target.value });
          }}
          placeholder="Last name"
        />
        <InputBox
          onChange={(e) => {
            setRegisterUser({ ...registerUser, nickname: e.target.value });
          }}
          placeholder="Nick name"
        />
        <InputBox
          onChange={(e) => {
            setRegisterUser({ ...registerUser, email: e.target.value });
          }}
          placeholder="Email"
        />
        <InputBox
          onChange={(e) => {
            setRegisterUser({ ...registerUser, location: e.target.value });
          }}
          placeholder="Address"
        />
        <InputBox
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          placeholder="Passwords"
        />
        <InputBox
          onChange={(e) => {
            if (newPassword === e.target.value) {
              setRegisterUser({ ...registerUser, password: e.target.value });
            }
            if (newPassword !== e.target.value) {
              setRegisterUser({ ...registerUser, password: "" });
            }
          }}
          placeholder="Comfirm passwords"
        />
        <InputBox
          onChange={(e) => {
            setRegisterUser({ ...registerUser, bio: e.target.value });
          }}
          placeholder="Bio"
        />
        <RegisterButton onClick={registerButton}>Login</RegisterButton>
      </LoginForm>
    </Container>
  );
};

const BodyText = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 25px;
`;
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

const RegisterButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: aqua;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CreateAccount;
