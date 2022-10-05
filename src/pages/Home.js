import React from "react";
import Button from "../components/Button";
import HomeTemplate from "../components/HomeTemplate";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <HomeTemplate>
      <Slider direction="left" />
      <Slider direction="right" />
      <Button text={"메뉴 찾기"} search={true} />
    </HomeTemplate>
  );
};

export default Home;
