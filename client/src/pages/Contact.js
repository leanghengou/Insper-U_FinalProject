import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiFillCheckCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
  const navigate = useNavigate();
  const sentTime = Date.now();
  const date = new Date(sentTime);
  const initialUserValue = {
    name: "",
    message: "",
    subject: "",
    email: "",
    date: date,
  };
  // ------------------------------
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sendClick, setSendClick] = useState(false);
  // -------------------------------
  const [messageForm, setMessageForm] = useState(initialUserValue);
  const sendMessageHandler = (e) => {
    e.preventDefault();
    fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(messageForm),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 200) {
          setMessageForm(initialUserValue);
          setSuccess(true);
          setSendClick(true);
          setTimeout(() => {
            setSuccess(false);
            setSendClick(false);
          }, 7000);
        } else {
          setSendClick(true);
          setError(true);
          setTimeout(() => {
            setError(false);
            setSendClick(false);
          }, 7000);
        }
      })
      .catch((err) => {
        navigate("/error");
        console.log("Error: ", err);
      });
  };

  return (
    <Container>
      {/* --------------------------------------- */}

      {success ? <SuccessMessage /> : null}
      {error ? <ErrorMessage /> : null}

      {/* --------------------------------------- */}

      <BigHeader>Have any question?</BigHeader>
      <BodyText>
        If you have any question to ask, or if you wish to disccus something
        with us, we always feel free to participate.
      </BodyText>
      <TwoColumnContainer>
        <SmallInputContainer>
          <LabelTitle>Name</LabelTitle>
          <InputBox
            value={messageForm.name}
            onChange={(e) => {
              setMessageForm({ ...messageForm, name: e.target.value });
            }}
          />
        </SmallInputContainer>
        <SmallInputContainer>
          <LabelTitle>Email</LabelTitle>
          <InputBox
            value={messageForm.email}
            onChange={(e) => {
              setMessageForm({ ...messageForm, email: e.target.value });
            }}
            type="email"
          />
        </SmallInputContainer>
      </TwoColumnContainer>

      <OneColumnContainer>
        <LabelTitle>Subject</LabelTitle>
        <InputBox
          value={messageForm.subject}
          onChange={(e) => {
            setMessageForm({ ...messageForm, subject: e.target.value });
          }}
        />
        <LabelTitle>Message</LabelTitle>
        <MessageInputBox
          value={messageForm.message}
          onChange={(e) => {
            setMessageForm({ ...messageForm, message: e.target.value });
          }}
        />
        <SendButton onClick={sendMessageHandler}>
          {sendClick ? <LoadingObject /> : "Send message"}
        </SendButton>
      </OneColumnContainer>
    </Container>
  );
};

// ----------------------------

const SuccessMessage = () => {
  return (
    <SuccessBox>
      <AiFillCheckCircle
        style={{ fontSize: "35px", color: "white", marginRight: "15px" }}
      />
      <MessageText>
        Your message is successfully sent. We will take a look at it soon!
      </MessageText>
    </SuccessBox>
  );
};

const ErrorMessage = () => {
  return (
    <ErrorBox>
      <AiOutlineExclamationCircle
        style={{ fontSize: "35px", color: "white", marginRight: "15px" }}
      />
      <MessageText>
        There are some error in the message form. Please, check your email if
        it's correct.
      </MessageText>
    </ErrorBox>
  );
};
// ----------------------------
const Container = styled.div`
  margin-top: 150px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BigHeader = styled.h1`
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-bottom: 10px;
  margin-bottom: 15px;
`;

const InputBox = styled.input`
  padding: 15px 20px;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  margin-right: 5%;
  margin-bottom: 30px;
  &:focus {
    outline: 1px solid #ed9c00;
  }
`;
const MessageInputBox = styled.textarea`
  padding: 15px 20px;
  height: 150px;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  margin-right: 5%;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 25px;
  &:focus {
    outline: 1px solid #ed9c00;
  }
`;

const TwoColumnContainer = styled.div`
  width: 100%;
  display: flex;
`;

const OneColumnContainer = styled.div`
  width: 82.2%;
  display: flex;
  flex-direction: column;
`;
const SmallInputContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
const LabelTitle = styled.p`
  font-size: 16px;
  line-height: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const BodyText = styled.p`
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 50px;
`;

const SendButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  width: 20%;
  height: 60px;
  color: white;
  border: none;
  background-color: #ed9c00;
  border-radius: 3px;
  margin-top: 50px;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.5s ease-in-out;
  }
`;
const animationOne = keyframes`
 0% {
    transform: translateY(-1000px);
  }
  25%{ 
    transform: translateY(-400px);
  }

  75%{ 
    transform: translateY(-400px);
  }
  100%{ 
    transform: translateY(-1000px);
  }
`;
const SuccessBox = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 65px;
  background-color: #ed9c00;
  position: fixed;
  border-radius: 10px;
  align-items: center;
  animation: ${animationOne} 7s linear forwards;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 65px;
  background-color: #ed0000;
  position: fixed;
  border-radius: 10px;
  align-items: center;
  animation: ${animationOne} 7s linear forwards;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const MessageText = styled.div`
  color: white;
  font-weight: 500;
`;

// --------------------------

const rotating = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const LoadingObject = styled(AiOutlineLoading3Quarters)`
  font-weight: 200;
  margin: 0 auto;
  animation: ${rotating} 2s infinite linear;
  font-size: 35px;
`;

// --------------------------

export default Contact;
