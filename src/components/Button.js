import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const DesktopBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 100px;

  margin-top: 200px;

  border: none;
  border-radius: 20em;

  background-color: #ff9b52;
  color: white;
  font-size: 32px;

  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
