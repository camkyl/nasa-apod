import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image = (props) => {
  return (
    <StyledImage>
      <img src={props.src} alt={props.src} />
    </StyledImage>
  );
};

export default Image;
