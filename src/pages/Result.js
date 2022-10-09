import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ResultTemplate from "../components/ResultTemplate";
import { useFoodState } from "../FoodContext";
import styled from "styled-components";

const ImgBox = styled.img`
  width: 400px;
  height: 400px;

  border-radius: 20%;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Result = () => {
  const foods = useFoodState();
  const src = foods.data ? foods.data.documents[0].image_url : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!foods.query) {
      alert("정상적인 접근이 아닙니다.");
      navigate("/", { replace: true });
    }
  }, [foods.query]);

  return (
    <ResultTemplate>
      <ImgBox src={src} />
      <h3>오늘의 메뉴는</h3>
      <h1>{foods.query}</h1>
      <span></span>
      <Button text={"다시 추천 받기"} onClick={() => navigate("/")} />
    </ResultTemplate>
  );
};

export default Result;
