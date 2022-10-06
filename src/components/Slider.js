import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const SliderBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  margin: 80px 0;
  font-size: 128px;

  img {
    width: 128px;
    height: 128px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const Slider = ({ direction }) => {
  return (
    <Marquee speed={80} direction={direction} gradient={false}>
      <SliderBlock>
        <img alt="food1" src="images/food1.png" />
        <img alt="food2" src="images/food2.png" />
        <img alt="food3" src="images/food3.png" />
        <img alt="food4" src="images/food4.png" />
        <img alt="food5" src="images/food5.png" />
        <img alt="food6" src="images/food6.png" />
        <img alt="food7" src="images/food7.png" />
      </SliderBlock>
    </Marquee>
  );
};

export default Slider;
