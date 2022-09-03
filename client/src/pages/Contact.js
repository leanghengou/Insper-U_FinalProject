import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";
import { format, set } from "date-fns";

const Contact = () => {
  const sentTime = Date.now();
  const date = new Date(sentTime);
  const initialUserValue = {
    name: "",
    message: "",
    subject: "",
    email: "",
    date: date,
  };
  const [messageForm, setMessageForm] = useState(initialUserValue);
  console.log("NAME MESSAGE FORM", messageForm);
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
        console.log(data.message);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  return (
    <Container>
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
      <TwoColumnContainer>
        <SmallInputContainer>
          <LabelTitle>Phone number (Optional)</LabelTitle>
          <InputBox
            value={messageForm.phoneNumber}
            onChange={(e) => {
              setMessageForm({ ...messageForm, phoneNumber: e.target.value });
            }}
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
        <SendButton onClick={sendMessageHandler}>Send message</SendButton>
      </OneColumnContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
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
`;
const MessageInputBox = styled.textarea`
  padding: 15px 20px;
  height: 150px;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  margin-right: 5%;
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

export default Contact;
