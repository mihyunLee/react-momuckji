import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ResultTemplate from "../components/ResultTemplate";
import { useFoodDispatch, useFoodState } from "../FoodContext";
import styled from "styled-components";

const ImgBox = styled.img`
  width: 400px;
  height: 400px;

  border-radius: 20%;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 230px;
    height: 230px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 260px;
    height: 260px;
  }
`;

const Result = () => {
  const foods = useFoodState();
  const dispatch = useFoodDispatch();

  const src = foods.data ? foods.data.documents[1].image_url : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!foods.query) {
      alert("정상적인 접근이 아닙니다.");
      navigate("/", { replace: true });
    }
  }, [foods.query]);

  console.log(foods);
  console.log(src);

  return (
    <ResultTemplate>
      <ImgBox src={src} />
      <h3>오늘의 메뉴는</h3>
      <h1>{foods.query}</h1>
      <span></span>
      <Button
        text={"다시 추천 받기"}
        onClick={() => {
          navigate("/");
          dispatch({ type: "RESET" });
        }}
      />
    </ResultTemplate>
  );
};

export default Result;
