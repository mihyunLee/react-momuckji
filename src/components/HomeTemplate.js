import React from "react";
import styled from "styled-components";

const HomeTemplateBlock = styled.div`
  width: 100%;
  height: 700px;

  margin: 215px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeTemplate = ({ children }) => {
  return <HomeTemplateBlock>{children}</HomeTemplateBlock>;
};

export default HomeTemplate;
