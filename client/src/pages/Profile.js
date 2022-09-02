import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext";

const Profile = () => {
  return (
    <Container>
      <p>This is profile page!</p>
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

export default Profile;
