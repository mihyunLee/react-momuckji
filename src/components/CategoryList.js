import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(2, 200px);
  justify-content: space-around;
  align-content: space-between;

  width: 100%;
  height: 100%;

  padding: 50px 0;
`;

const CategoryList = () => {
  return (
    <CategoryListBlock>
      <CategoryItem category={"중식"} />
      <CategoryItem category={"일식"} />
      <CategoryItem category={"한식"} />
      <CategoryItem category={"양식"} />
      <CategoryItem category={"아시안"} />
      <CategoryItem category={"분식"} />
      <CategoryItem category={"패스트푸드"} />
      <CategoryItem category={"디저트"} />
    </CategoryListBlock>
  );
};

export default CategoryList;
