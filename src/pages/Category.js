import React from "react";
import Clock from "../components/Clock";
import CategoryList from "../components/CategoryList";
import CategoryTemplate from "../components/CategoryTemplate";

const Category = () => {
  return (
    <CategoryTemplate>
      <Clock />
      <h1>내가 먹고 싶은 음식은..</h1>
      <CategoryList />
    </CategoryTemplate>
  );
};

export default Category;
