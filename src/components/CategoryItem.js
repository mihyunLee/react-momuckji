import React from "react";
import styled from "styled-components";

const CategoryButton = styled.button`
  border: none;
  border-radius: 50%;
  font-size: 2rem;

  cursor: pointer;
`;

const CategoryItem = ({ category }) => {
  return (
    <>
      <CategoryButton>{category}</CategoryButton>
    </>
  );
};

export default CategoryItem;
