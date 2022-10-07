import React from "react";
import styled from "styled-components";

const ResultBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 1200px;
  height: 100%;

  h1 {
    font-size: 56px;
  }
  h3 {
    font-size: 32px;
  }
`;

const ResultTemplate = ({ children }) => {
  return <ResultBlock>{children}</ResultBlock>;
};

export default ResultTemplate;
