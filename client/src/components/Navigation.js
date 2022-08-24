import styled from "styled-components";

const Navigation = () => {
  return (
    <Container>
      <NavLink>Home</NavLink>
      <NavLink>Articles</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled.button`
  background-color: none;
  border: none;
  background-color: transparent;
`;
export default Navigation;
