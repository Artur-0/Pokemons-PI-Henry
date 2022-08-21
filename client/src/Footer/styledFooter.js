import styled from "styled-components";

export const Styled = styled.div`
  font-family: "Fredoka One", cursive;
  display: flex;
  align-items: center;
  text-align: center;
  /* margin-left: 30vw; */
  justify-content: center;
  & button {
    justify-content: center;
    cursor: pointer;
    color: white;
    width: 15%;
    height: 35px;
    padding-left: 5px;
    border: none;
    border-radius: 2px;
    font-size: 14px;
    background: linear-gradient(315deg, #756213 10%, #000000 99%);
  }
  & p {
    align-self: center;
    margin-right: 10px;
    margin-left: 10px;
    border: none;
    border-radius: 2px;
    padding-top: 9px;
    color: white;
    width: 20px;
    height: 28px;
    background: linear-gradient(315deg, #756213 10%, #000000 99%);
  }
`;
