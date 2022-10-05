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
        <img alt="bibimbap" src="images/bibimbap.png" />
        <img alt="bubble-tea" src="/images/bubble-tea.png" />
        <img alt="hamburger" src="/images/hamburger.png" />
        <img alt="ice-cream" src="/images/ice-cream.png" />
        <img alt="sandwich" src="/images/sandwich.png" />
        <img alt="sushi" src="/images/sushi.png" />
        <img alt="tteok" src="/images/tteok.png" />
      </SliderBlock>
    </Marquee>
  );
};

export default Slider;
