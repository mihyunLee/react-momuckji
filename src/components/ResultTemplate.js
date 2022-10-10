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

  font-size: 1.7rem;

  h3 {
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;

const ResultTemplate = ({ children }) => {
  return <ResultBlock>{children}</ResultBlock>;
};

export default ResultTemplate;
