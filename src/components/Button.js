import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 260px;
  height: 70px;

  margin-top: 50px;

  border: none;
  border-radius: 20em;

  background-color: #ff9b52;
  color: white;
  font-size: 22px;

  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.25em);
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 45px;

    font-size: 16px;
  }

  @media (min-width: 481px) and (max-width: 1200px) {
    width: 200px;
    height: 55px;

    font-size: 18px;
  }
`;

const SearchIcon = styled.div`
  margin-left: 10px;
  font-size: smaller;
`;

const Button = ({ text, onClick, search }) => {
  return (
    <Btn onClick={onClick}>
      {text}
      {search && (
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
      )}
    </Btn>
  );
};

export default Button;
