import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext";

const Message = () => {
  const { setLoading, loading } = useContext(CurrentUserContext);
  const [allMessages, setAllMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/get-message`)
      .then((res) => res.json())
      .then((data) => {
        setAllMessage(data.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/get-message`)
      .then((res) => res.json())
      .then((data) => {
        setAllMessage(data.data);
        setLoading(false);
      });
  }, [selectedMessageId]);

  return (
    <Container>
      <BoxContainer>
        {allMessages &&
          allMessages.map((message, index) => {
            return (
              <MessageBoxContainer
                onClick={() => {
                  setSelectedMessageId(message && message._id);
                }}
                key={index}
              >
                <MessageBox>
                  <DateText>{message && message.date}</DateText>
                  <TitleMessage>{message && message.subject}</TitleMessage>
                </MessageBox>
              </MessageBoxContainer>
            );
          })}
        {/* <MessageBoxContainer>
          <MessageBox>
            <DateText>Sep 08 2022</DateText>
            <TitleMessage>
              Talent is a common word that everyone knows and respects...
            </TitleMessage>
          </MessageBox>
        </MessageBoxContainer> */}
      </BoxContainer>
      <MessageContainer>
        <UserInfo>
          <BodyText>
            From:
            <Bold> Leangheng Ou</Bold>
          </BodyText>
          <EmailText>{"<leanghengou5555@gmail.com>"}</EmailText>
        </UserInfo>
        <MessageTitle>
          Talent is a common word that everyone knows and respects.
        </MessageTitle>
        <BodyText>
          These days, youths are more prone to be depressed than ever before.
          Due to parent's expectations, toxic people, competitive environments,
          social media, and social norms. Countless youths start to develop
          internal problems such as low self-esteem, stress, over-thinking,
          insecurities, powerlessness, and hopelessness. Many are be able to
          manage to handle these internal sicknesses. But some are too sensitive
          or lack the experience to deal with the obstacles. It could lead them
          to fall into some serious cases. Youths need positive messages and
          inspirations from others. They need to realize how lucky they are to
          be born in this peaceful, and prosperous time.
        </BodyText>
      </MessageContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const BoxContainer = styled.div`
  width: 25%;
`;
const MessageBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  border-bottom: 1px solid #c7c7c7;
  /* border-top: 1px solid #c7c7c7; */
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fff9ed;
    cursor: pointer;
  }
`;

const MessageBox = styled.div`
  width: 80%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

const BodyText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
`;

const EmailText = styled.p`
  color: #6c6c6c;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  font-style: italic;
  margin-left: 10px;
`;

const DateText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const TitleMessage = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  font-style: italic;
  margin-top: 15px;
`;

const MessageContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const MessageTitle = styled.div`
  font-size: 30px;
  line-height: 43px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const BigHeader = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-bottom: 20px;
  line-height: 60px;
`;
export default Message;
