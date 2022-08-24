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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const NavLink = styled.button`
  background-color: none;
  color: white;
  background-color: transparent;
`;
export default Navigation;
