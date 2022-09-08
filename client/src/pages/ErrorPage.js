import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/errorPage500.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container backgroundImage={backgroundImage}>
      <ObjectsContainer>
        <BigHeader>
          <RedColor> Error</RedColor> :(
        </BigHeader>
        <BodyText>
          The page is crashed. You can refresh the broswer or go back to refresh
          the page.
        </BodyText>
        <HomepageButton
          onClick={() => {
            navigate("/");
          }}
        >
          Go back to homepage
        </HomepageButton>
      </ObjectsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 999999999;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: white;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 100px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  border-top: 0.5px solid rgba(255, 255, 255, 0.5);
`;

const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
  margin-top: 50px;
`;

const ObjectsContainer = styled.div`
  width: 50%;
  margin-left: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
`;

const RedColor = styled.span`
  color: #ed0000;
`;

const HomepageButton = styled.button`
  margin-top: 40px;
  padding: 15px 25px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: transparent;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;
export default ErrorPage;
