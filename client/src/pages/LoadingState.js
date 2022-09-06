import styled, { keyframes } from "styled-components";
import { GiYinYang } from "react-icons/gi";

const LoadingState = () => {
  return (
    <Container>
      <LoadingRotating />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: white;
`;

const rotating = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const LoadingRotating = styled(GiYinYang)`
  font-weight: 200;
  margin: 0 auto;
  animation: ${rotating} 2s infinite linear;
  font-size: 50px;
`;

export default LoadingState;
