import React from "react";
import styled from "styled-components";
import image from "./../media/network.svg";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 10%;
  height: 100%;
  padding: 20px;
  border-right: 1px solid white;

  nav {
    height: 10%;
    padding: 12px;
    cursor: pointer;
  }

  .line {
    height: 2px;
    background-color: white;
    margin-bottom: 5px;
  }

  .line1 {
    width: 26px;
  }

  .line2 {
    width: 20px;
  }

  .middle {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page-heading {
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
    margin: 0;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }

  .bottom {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .image-wrapper {
    width: 40%;
    height: 40%;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    color: white;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </nav>
      <div className="middle">
        <h2 className="page-heading">Astronomy Picture of the Day</h2>
      </div>
      <div className="bottom">
        <div className="image-wrapper">
          <img src={image} alt="" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
