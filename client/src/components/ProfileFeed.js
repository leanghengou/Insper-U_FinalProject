import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <p>Hello</p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Profile;
