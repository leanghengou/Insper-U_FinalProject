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
  border-bottom: 1px solid white;
`;

const NavLink = styled.button`
  background-color: none;
  color: white;
`;
export default Navigation;
