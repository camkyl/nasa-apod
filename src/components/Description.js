import React from "react";
import styled from "styled-components";

const StyledDescription = styled.article`
  width: 70%;
  padding: 20px;
  display: flex;

  .explanation {
    width: 96%;
    height: 75%;
    margin: auto 0;
    overflow: scroll;
    padding: 0;
  }

  .explanation.expanded {
    overflow: visible;
  }

  .explanation p {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
  }

  .arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15%;
    cursor: pointer;
  }

  .arrow p {
    margin: 0;
    text-align: center;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: lighter;
    /*transform: rotate(135deg);*/
  }
`;

const Description = (props) => {
  return (
    <StyledDescription>
      <div className="explanation">
        <p>{props.children}</p>
      </div>

      <div className="arrow">
        <p>+</p>
      </div>
    </StyledDescription>
  );
};

export default Description;
