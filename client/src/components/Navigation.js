import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <Container>
        <NavLink
          onClick={() => {
            navigate("/");
          }}
        >
          Home
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
      </Container>
    </NavContainer>
  );
};

const Container = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  margin-top: 0%;
  top: 0;
  background-color: white;
`;

const NavContainer = styled.div`
  position: absolute;
`;

const NavLink = styled.button`
  background-color: none;
  border: none;
  background-color: transparent;
  padding: 25px;

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
export default Navigation;
