import React from "react";
import { useEffect, useState } from "react";

const Clock = () => {
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
    <>
      <h2>
        현재 시간 {curTime.ampm} {curTime.hour} : {curTime.minutes} :{" "}
        {curTime.seconds}
      </h2>
    </>
  );
};

export default Clock;
