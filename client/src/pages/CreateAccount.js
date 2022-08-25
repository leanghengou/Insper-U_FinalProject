import styled from "styled-components";

const CreateAccount = () => {
  return (
    <Container>
      <LoginForm>
        <BodyText>Last name</BodyText>
        <InputBox placeholder="First name" />
        <InputBox placeholder="Last name" />
        <InputBox placeholder="Email" />
        <InputBox placeholder="Address" />
        <InputBox placeholder="Passwords" />
        <InputBox placeholder="Comfirm passwords" />
        <InputBox placeholder="Bio" />
        <LoginButton>Login</LoginButton>
      </LoginForm>
    </Container>
  );
};

const BodyText = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 25px;
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 15px;
  border: 1px solid black;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: aqua;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CreateAccount;
