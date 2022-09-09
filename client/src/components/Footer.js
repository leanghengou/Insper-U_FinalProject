import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUserContext";

const Footer = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  return (
    <Container>
      <MidContainer>
        <NavContainer>
          <NavHeader>Navigation</NavHeader>
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
        </NavContainer>
        <NavContainer>
          <NavHeader>Information</NavHeader>
          <NavLink
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </NavLink>
        </NavContainer>
        <NavContainer>
          <NavHeader>My account</NavHeader>
          <NavLink
            onClick={() => {
              navigate(`/profile/${currentUser._id}`);
            }}
          >
            Profile
          </NavLink>
        </NavContainer>
      </MidContainer>
      <BottomBar>Insper-U | 2022</BottomBar>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  border-top: 1px solid #e9e9e9;
  padding-top: 30px;
`;

const MidContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #e9e9e9;
`;
const NavHeader = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;
const NavLink = styled.button`
  background-color: none;
  background-color: transparent;
  line-height: 27px;
  border: none;
  &:hover {
    cursor: pointer;
    color: #ed9c00;
    transition: 0.3s ease-in-out;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Footer;
