import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo-black-01.png";
import { CurrentUserContext } from "../CurrentUserContext";
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from "react";
import { IoSearch, IoLogOutOutline } from "react-icons/io5";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const logOutButton = (e) => {
    setCurrentUser(null);
    navigate("login");
  };
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
        <NavLink
          onClick={() => {
            navigate("/articles");
          }}
        >
          Articles
        </NavLink>
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
            <SearchButton
              onClick={() => {
                navigate("/search");
              }}
            />
            <AccountButton
              onClick={() => {
                navigate(`/profile/${currentUser._id}`);
              }}
            />
            <LogoutButton onClick={logOutButton} />
          </ContainerTwo>
        )}
      </Container>
    </NavContainer>
  );
};

const Container = styled.div`
  z-index: 99;
  width: 100%;
  height: 75px;
  display: flex;
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
  margin-left: 80%;
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
  border: 1px solid #e9e9e9;
  background-color: transparent;
  border-radius: 3px;
  :hover& {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
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
    transition: 0.3s ease-in-out;
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
  left: 0%;
  :hover& {
    cursor: pointer;
    background-color: #ed9c00;
    transition: 0.5s ease-in-out;
  }
`;

const LogoutButton = styled(IoLogOutOutline)`
  font-size: 25px;
  margin-left: 35px;
  &:hover {
    cursor: pointer;
    color: #ed9c00;
    transition: 0.3s ease-in-out;
  }
`;

const SearchButton = styled(IoSearch)`
  font-size: 20px;
  margin-left: 35px;
  &:hover {
    cursor: pointer;
    color: #ed9c00;
    transition: 0.3s ease-in-out;
  }
`;

const AccountButton = styled(AiOutlineUser)`
  font-size: 25px;
  margin-left: 35px;
  &:hover {
    cursor: pointer;
    color: #ed9c00;
    transition: 0.3s ease-in-out;
  }
`;
export default Navigation;
