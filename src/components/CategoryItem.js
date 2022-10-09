import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useFoodDispatch } from "../FoodContext";

const CategoryIcon = styled.img`
  display: none;
  width: 86px;
  height: 86px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  position: absolute; /* 텍스트 위에 이미지를 표시하기 위함 */

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CategoryButton = styled.button`
  &:hover {
    ${CategoryIcon} {
      display: initial;
      z-index: 5;
    }
    background-color: #fff;
    text-indent: -9999px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  }
  border: none;
  border-radius: 50%;
  font-size: 2rem;

  cursor: pointer;

  display: block;
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }
`;

const pickRandomFood = (food) => {
  let randomIndex = Math.floor(Math.random() * food.length);
  let randomFood = food[randomIndex];

  return randomFood;
};

const CategoryItem = ({ id, category, src, food }) => {
  const dispatch = useFoodDispatch();

  const navigate = useNavigate();

  const onClick = () => {
    const pickedFood = pickRandomFood(food);

    if (pickedFood) {
      dispatch({
        type: "QUERY",
        query: pickedFood,
      });
      navigate("/result");
    }
  };

  return (
    <>
      <CategoryButton onClick={onClick}>
        {category}
        <CategoryIcon src={src} />
      </CategoryButton>
    </>
  );
};

export default CategoryItem;
