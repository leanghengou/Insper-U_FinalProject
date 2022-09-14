import styled, { keyframes } from "styled-components";
import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../CurrentUserContext";
import { format } from "date-fns";
import LoadingState from "../pages/LoadingState";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const Message = () => {
  const { setLoading, loading, currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  if (currentUser.status !== "admin") {
    navigate("/login");
  }
  const [allMessages, setAllMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [messageReady, setMessageReading] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/get-message`)
      .then((res) => res.json())
      .then((data) => {
        setEmptyMessage(data.status);
        setAllMessage(data.data);

        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedMessageId) {
      setMessageReading(false);
      fetch(`/api/get-spec-message/${selectedMessageId}`)
        .then((res) => res.json())
        .then((data) => {
          setMessage(data.data);
          setMessageReading(true);
          console.log(message);
        });
    }
  }, [selectedMessageId]);

  // --------------------Pagination states----------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const lastIndexMessage = currentPage * postPerPage;
  const firstIndexMessage = lastIndexMessage - postPerPage;
  const messageGroup =
    allMessages && allMessages.slice(firstIndexMessage, lastIndexMessage);

  const movePage = (num) => {
    setCurrentPage(num);
  };

  console.log("All message", allMessages);
  // -----------------------------------------------------------

  if (loading) {
    return <LoadingState />;
  }
  if (emptyMessage && emptyMessage === 404) {
    return (
      <div style={{ textAlign: "center", marginTop: "120px" }}>
        <BodyText>There is no message yet.</BodyText>
      </div>
    );
  } else {
    return (
      <BigTitle>
        <BigHeader>Message Box</BigHeader>
        <Container>
          <BoxContainer>
            {messageGroup &&
              messageGroup.map((message, index) => {
                const date = new Date(message && message.date);
                const month = format(date, "MMMM");
                const day = format(date, "dd");
                const year = format(date, "yyyy");
                return (
                  <MessageBoxContainer
                    onClick={() => {
                      setSelectedMessageId(message && message._id);
                    }}
                    key={index}
                  >
                    <MessageBox>
                      <DateText>{month + " " + day + " " + year}</DateText>
                      <TitleMessage>
                        {message && message.subject.length >= 50
                          ? message.subject.slice(0, 50) + "..."
                          : message.subject}
                      </TitleMessage>
                    </MessageBox>
                  </MessageBoxContainer>
                );
              })}
            <Pagination
              messageGroupNum={postPerPage}
              totalMessages={allMessages && allMessages.length}
              movePage={movePage}
            />
          </BoxContainer>

          {messageReady ? (
            <MessageDetail message={message} />
          ) : (
            <MessageLoad messageReady={messageReady} />
          )}
        </Container>
      </BigTitle>
    );
  }
};

const MessageDetail = ({ message }) => {
  const date = new Date(message && message.date);
  const month = format(date, "MMMM");
  const day = format(date, "dd");
  const year = format(date, "yyyy");
  return (
    <MessageContainer>
      <UserInfo>
        <BodyText>
          From:
          <Bold> {message && message.name}</Bold>
        </BodyText>
        <EmailText>{`<${message && message.email}>`}</EmailText>
      </UserInfo>
      <MessageTitle>{message && message.subject}</MessageTitle>
      <BodyText>{message && message.message}</BodyText>
      <DateText style={{ marginTop: "55px", color: "#6C6C6C" }}>
        {"Date: " + month + " " + day + " " + year}
      </DateText>
    </MessageContainer>
  );
};

const MessageLoad = ({ messageReady }) => {
  return (
    <MessageContainer>
      {!messageReady ? (
        <BodyText>Select the message box to read...</BodyText>
      ) : (
        <BodyText>Loading...</BodyText>
      )}
    </MessageContainer>
  );
};
const BigTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const Container = styled.div`
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

  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #fff9ed;
    cursor: pointer;
  }
  &:first-child {
    border-top: 1px solid #c7c7c7;
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
  /* font-style: italic; */
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
  font-size: 30px;
  font-family: "Anton", sans-serif;
  font-style: normal;
  text-align: left;
  margin-bottom: 10px;
  line-height: 60px;
`;

// ---------------------

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
  font-size: 50px;
`;

// ---------------------

export default Message;
