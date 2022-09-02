import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo-black-01.png";
import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";

const Navigation = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  return (
    <NavContainer>
      <Container>
        <LogoBackground
          onClick={() => {
            navigate("/");
          }}
        >
          <img style={{ height: "50px", width: "auto" }} src={logo} />
        </LogoBackground>
        <NavLink
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("/quotes");
          }}
        >
          Get inspired
        </NavLink>
        <NavLink>Articles</NavLink>
        <NavLink>About</NavLink>
        <NavLink
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </NavLink>
        {!currentUser ? (
          <ContainerLogin>
            <LoginButton
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </LoginButton>
            <RegisterButton
              onClick={() => {
                navigate("/register");
              }}
            >
              Get started
            </RegisterButton>
          </ContainerLogin>
        ) : (
          <ContainerTwo>
            <BsSearch
              onClick={() => {
                navigate("search");
              }}
              style={{ fontSize: "20px", marginRight: "30px" }}
            />
            <AiOutlineUser
              onClick={() => {
                navigate("/profile");
              }}
              style={{ fontSize: "25px" }}
            />
          </ContainerTwo>
        )}
      </Container>
    </NavContainer>
  );
};

const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  margin-top: 0%;
  top: 0;
  background-color: white;
`;

const ContainerTwo = styled.div`
  display: flex;
  position: fixed;
  margin-left: 86.7%;
  align-items: center;
`;

const NavContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

const ContainerLogin = styled.div`
  display: flex;
  position: fixed;
  margin-left: 77.4%;
  align-items: center;
`;

const LoginButton = styled.button`
  padding: 10px 25px;
  border: 1px solid black;
  background-color: transparent;
  border-radius: 3px;
  border: none;
  :hover& {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.5s ease-in-out;
  }
`;

const RegisterButton = styled.button`
  padding: 10px 25px;
  height: 35px;
  background-color: #ed9c00;
  border-radius: 3px;
  color: white;
  border: none;
  margin-left: 15px;
  :hover& {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.5s ease-in-out;
  }
`;

const NavLink = styled.button`
  background-color: none;
  border: none;
  background-color: transparent;
  padding: 28px 28px;

  :hover& {
    cursor: pointer;
    background-color: aqua;

    background: rgb(247, 247, 247);
    background: linear-gradient(
      0deg,
      rgba(247, 247, 247, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    border-bottom: 3px black solid;
  }
  :focus& {
    background-color: aqua;

    background: rgb(247, 247, 247);
    background: linear-gradient(
      0deg,
      rgba(247, 247, 247, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    border-bottom: 3px black solid;
  }
`;

const LogoBackground = styled.div`
  /* background-color: black; */
  height: 100%;
  width: 100px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 8.58%;
  border-right: 1px solid #e9e9e9;
  border-left: 1px solid #e9e9e9;
  /* margin-right: 7px; */
  /* background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center; */
  /* position: absolute; */
  left: 0%;
  :hover& {
    cursor: pointer;
    background-color: #ed9c00;
    transition: 0.5s ease-in-out;
  }
`;
export default Navigation;
