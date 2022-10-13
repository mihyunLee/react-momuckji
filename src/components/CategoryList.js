import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { foodList } from "../utils/data";

const CategoryListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(2, 200px);
  justify-content: space-around;
  align-content: space-between;
  gap: 50px;

  width: 80%;
  height: 100%;

  padding: 50px 0;

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 75px);
    grid-template-rows: repeat(2, 75px);
    gap: 2px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(2, 100px);
    gap: 8px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 150px);
  }
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
