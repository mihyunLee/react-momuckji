import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const DesktopBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  height: 90px;

  margin-top: 50px;

  border: none;
  border-radius: 20em;

  background-color: #ff9b52;
  color: white;
  font-size: 28px;

  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 480px) {
    width: 160px;
    height: 45px;

    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 240px;
    height: 60px;

    font-size: 20px;
  }

  @media screen and (max-width: 1200px) {
    width: 280px;
    height: 70px;

    font-size: 24px;
  }
`;

const SearchIcon = styled.div`
  margin-left: 10px;
  font-size: smaller;
`;

const Button = ({ text, onClick, search }) => {
  return (
    <DesktopBtn onClick={onClick}>
      {text}
      {search && (
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
      )}
    </DesktopBtn>
  );
};

export default Button;
