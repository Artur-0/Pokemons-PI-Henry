import styled from "styled-components";

import pokeBackground from "../../Assets/pikachu-searchingjpg.jpg";

export const Style = styled.div`
  background-image: url(${pokeBackground});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 90vh;
  /* margin-top: -5vh; */
`;

export const Card = styled.div`
  /* background: linear-gradient(315deg, #756213 10%, #000000 99%); */
  font-family: "Fredoka One", cursive;
  /* border: 2px solid black; */
  position: absolute;
  margin-top: 2.5vh;
  margin-left: 30vw;
  width: 30vw;
`;

export const Item = styled.div`
  background: linear-gradient(315deg, #756213 10%, #000000 99%);
  /* height: 90vh; */

  /* display: flex; */
  /* background-position: center; */
  /* align-items: center;
  justify-content: center; */
  margin-top: 5vh;

  & h1 {
    color: aliceblue;
  }
  & li {
    color: red;
    list-style: none;
    margin-right: 50px;
  }
  & img {
    width: 100px;
    height: 100px;
  }
`;
