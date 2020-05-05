import React from "react";
import StyledImage from "../components/Image";
import StyledVideo from "../components/Video";
import StyledTitle from "../components/Title";
import StyledDescription from "../components/Description";
import styled from "styled-components";

const StyledMain = styled.section`
  width: 90%;

  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75%;
    position: relative;
  }

  .article-title {
    width: 35%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding-right: 50px;
  }

  .orange-line {
    border-bottom: 1px solid orange;
    width: 80%;
  }

  .article-title.expanded {
    top: 0;
    position: absolute;
  }

  .article-media {
    width: 65%;
    padding-right: 50px;
  }

  .article-title,
  .article-media {
    height: 80%;
  }

  footer {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid white;
  }

  /*
  footer.expanded {
    width: unset;
    top: 60px;
    position: absolute;
  }
  */

  .date {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .month {
    font-size: 22px;
    color: orange;
    margin: 0;
  }

  .day {
    font-size: 38px;
    font-weight: bold;
    color: orange;
    margin: 0;
    line-height: 0.7;
  }
`;

const Main = () => {
  const [result, setResult] = React.useState(null);

  //const api = `https://api.nasa.gov/planetary/apod?date=2020-04-27&api_key=`;
  const api = "https://api.nasa.gov/planetary/apod?";
  const apiKey = process.env.REACT_APP_API_KEY;

  React.useEffect(() => {
    fetch(`${api}&api_key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        setResult(json);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // Display different component depending on if it is a video or image that is the media type
  let mediaComponent;

  if (result && result.media_type === "image") {
    mediaComponent = (
      <StyledImage src={result && result.url} alt={result && result.title} />
    );
  } else if (result && result.media_type === "video") {
    mediaComponent = (
      <StyledVideo src={result && result.url} alt={result && result.title} />
    );
  }

  // Change how format of date is displayed
  const date = result && result.date;
  const fromJsonToDate = new Date(date);

  // Add a 0 in front if the date is only one digit
  const dateAsTwoDigits = (dateToConvert) => {
    return (dateToConvert < 10 ? "0" : "") + dateToConvert;
  };

  const day = dateAsTwoDigits(fromJsonToDate.getDate());

  // Used to convert number into string, from 05 to May as an example
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const month = months[fromJsonToDate.getMonth()];

  return (
    <StyledMain>
      <section className="main">
        <div className="article-title">
          <div className="orange-line">
            <StyledTitle>{result && result.title}</StyledTitle>
          </div>
        </div>

        <div className="article-media">{mediaComponent}</div>
      </section>

      <footer>
        <div className="date">
          <p className="month">{month}</p>
          <p className="day">{day}</p>
        </div>

        <StyledDescription>{result && result.explanation}</StyledDescription>
      </footer>
    </StyledMain>
  );
};

export default Main;
