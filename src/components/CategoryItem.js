import React from "react";
import styled from "styled-components";

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
`;

const CategoryItem = ({ category, src }) => {
  return (
    <>
      <CategoryButton>
        {category}
        <CategoryIcon src={src} />
      </CategoryButton>
    </>
  );
};

export default CategoryItem;
