import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CategoryList from "../components/CategoryList";
import CategoryTemplate from "../components/CategoryTemplate";

const Category = () => {
  const [curTime, setcurTime] = useState({
    ampm: "",
    hour: "",
    minutes: "",
    seconds: "",
  });

  const getTime = () => {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ampm = "";

    ampm = hh <= 12 ? "AM" : "PM";

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    setcurTime((time) => ({
      ampm,
      hour: hh,
      minutes: mm,
      seconds: ss,
    }));
  };

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  return (
    <CategoryTemplate>
      <h2>
        현재 시간 {curTime.ampm} {curTime.hour} : {curTime.minutes} :{" "}
        {curTime.seconds}
      </h2>
      <h1>내가 먹고 싶은 음식은..</h1>
      <CategoryList />
    </CategoryTemplate>
  );
};

export default Category;
