import React from "react";
import styled from "styled-components";

const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1600px;
  height: 860px;

  margin: 0 auto;

  font-size: 2rem;
`;

const CategoryTemplate = ({ children }) => {
  return <CategoryBlock>{children}</CategoryBlock>;
};

export default CategoryTemplate;
