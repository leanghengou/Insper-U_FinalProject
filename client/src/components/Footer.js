import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <MidContainer>
        <NavContainer>
          <NavHeader>Navigation</NavHeader>
          <NavLink>Get inspired</NavLink>
          <NavLink>Articles</NavLink>
        </NavContainer>
        <NavContainer>
          <NavHeader>Information</NavHeader>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </NavContainer>
        <NavContainer>
          <NavHeader>My account</NavHeader>
          <NavLink>Login</NavLink>
          <NavLink>Register</NavLink>
          <NavLink>Account</NavLink>
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
  margin-top: 150px;
  border-top: 1px solid #e9e9e9;
  padding-top: 50px;
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
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Footer;
