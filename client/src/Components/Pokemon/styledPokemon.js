import styled from "styled-components";

import pokeBackground from "../../Assets/pikachu-searchingjpg.jpg";

export const Style = styled.div`
  background-image: url(${pokeBackground});
  display: grid;
  height: 90vh;
  & img {
    margin-top: 10vh;
    width: 100px;
    margin-right: 70vw;
  }
`;

export const Card = styled.div`
  /* display: grid; */

  display: table;
  background: linear-gradient(315deg, #756213 10%, #000000 99%);
  font-family: "Fredoka One", cursive;
  width: 30vw;
  height: 40vh;
  margin-top: -30vh;
  margin-left: 35vw;
  & p {
    color: black;
    font-size: small;
  }
`;
