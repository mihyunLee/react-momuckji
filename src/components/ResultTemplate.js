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

  font-size: 1.7rem;

  h3 {
    padding-top: 20px;
  }
`;

const ResultTemplate = ({ children }) => {
  return <ResultBlock>{children}</ResultBlock>;
};

export default ResultTemplate;
