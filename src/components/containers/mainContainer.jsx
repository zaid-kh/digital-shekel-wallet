import React from "react";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f3f3f3;
  color: #333;
  font-family: sans-serif;
  gap: 20px;
`;

const MainContainer = ({ children }) => {
  return (
    <StyledMainContainer id="main-container">{children}</StyledMainContainer>
  );
};

export default MainContainer;
