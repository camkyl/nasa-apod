import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 26px;
  line-height: 1.5;
  color: white;
  margin: 0;
  padding: 70px 50px 0px 0px;
`;

const Title = (props) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;
