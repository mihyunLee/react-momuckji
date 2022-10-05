import React from "react";
import Button from "../components/Button";
import HomeTemplate from "../components/HomeTemplate";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeTemplate>
      <Slider direction="left" />
      <Slider direction="right" />
      <Button
        text={"메뉴 찾기"}
        search={true}
        onClick={() => navigate("/category")}
      />
    </HomeTemplate>
  );
};

export default Home;
