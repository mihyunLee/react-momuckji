import React from "react";
import styled from "styled-components";

const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  font-size: 1.7rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 1.3rem;
  }
`;

const CategoryTemplate = ({ children }) => {
  return <CategoryBlock>{children}</CategoryBlock>;
};

export default CategoryTemplate;
