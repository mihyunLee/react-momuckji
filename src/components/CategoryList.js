import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { foodList } from "../data";

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
      {foodList.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </CategoryListBlock>
  );
};

export default CategoryList;
