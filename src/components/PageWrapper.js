import React from "react";
import styled from "styled-components";
import Main from "./../pages/Main";
import Header from "./Header";

const StyledPageWrapper = styled.div`
  background-color: rgba(26, 28, 32, 0.94);
  border-radius: 10px;
  overflow: hidden;
  height: 88vh;
  width: 90vw;
  box-shadow: 0 10px 20px 2px rgba(0, 0, 0, 1);
  display: flex;
  position: relative;
`;

const PageWrapper = () => {
  return (
    <StyledPageWrapper>
      <Header />
      <Main />
    </StyledPageWrapper>
  );
};

export default PageWrapper;
