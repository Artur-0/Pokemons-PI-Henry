import styled from "styled-components";

export const Select = styled.select`
  width: 10%;
  height: 35px;
  font-family: "Fredoka One", cursive;
  background: linear-gradient(315deg, #756213 10%, #000000 99%);
  color: white;
  padding-left: 5px;
  cursor: pointer;
  font-size: 14px;
  border: none;
  margin-left: 20px;
  margin-top: 15vh;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const FilterSort = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* color: #fff; */

  /* margin-left: -80vw; */
`;
