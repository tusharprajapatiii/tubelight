import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <div
          onClick={() => {
            navigate("/counter");
          }}
        >
          <h1> Counter</h1>
        </div>
        <div
          onClick={() => {
            navigate("/addForm");
          }}
        >
          <h1>AddForm</h1>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 100vh;
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    height: fit-content;
    width: 100%;
    justify-content: space-evenly;
    div {
      position: relative;
      height: 300px;
      cursor: pointer;
      width: 300px;
      border: 2px solid black;
      display: flex;
      align-items: center;
      color: white;
      text-shadow: 2px 4px 4px black;
      align-items: center;
      border-radius: 20px;

      font-weight: 900;
      background: linear-gradient(violet, blue);
      h1 {
        font-size: 40px;
      }
      &:hover {
        transform: rotate(180deg);
        transition: all 1s;
        h1 {
          transform: rotate(-180deg);
          transition: all 1s;
        }
      }
    }
  }
`;
export default Main;
