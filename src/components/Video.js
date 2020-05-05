import React from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
  width: 100%;
  position: relative;
  /* padding-bottom: 56.25%;  aspect ratio 16:9 */
  /*height: 0;*/
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    border: none;
  }
`;

const Video = (props) => {
  return (
    <StyledVideo>
      <iframe src={props.src} alt={props.src} title={props.src} />
    </StyledVideo>
  );
};

export default Video;
