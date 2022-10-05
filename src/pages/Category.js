import React from "react";
import CategoryList from "../components/CategoryList";
import CategoryTemplate from "../components/CategoryTemplate";

const Category = () => {
  return (
    <CategoryTemplate>
      <h2>현재 시간 00:00</h2>
      <h1>내가 먹고 싶은 음식은..</h1>
      <CategoryList />
    </CategoryTemplate>
  );
};

export default Category;
