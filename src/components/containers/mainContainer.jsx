import React from "react";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #333;
  gap: 20px;
`;

const MainContainer = ({ children }) => {
  return (
    <StyledMainContainer id="main-container">{children}</StyledMainContainer>
  );
};

export default MainContainer;
