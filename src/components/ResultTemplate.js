import React from "react";
import styled from "styled-components";

const ResultBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 100%;
  height: 100%;

  font-size: 1.8rem;

  h3 {
    padding-top: 20px;
    // margin-bottom: -30px;

    &:after {
      content: "";
      display: block;
      width: 90%;
      border-bottom: 8px solid #faeade;
      margin: 8px auto;
    }
  }

  h1 {
    color: #ff9b52;
    letter-spacing: 0.2em;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 1.7rem;
  }
`;

const ResultTemplate = ({ children }) => {
  return <ResultBlock>{children}</ResultBlock>;
};

export default ResultTemplate;
