import styled from "styled-components";

const Message = () => {
  return (
    <Container>
      <p>This is search page!</p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 150px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Message;
