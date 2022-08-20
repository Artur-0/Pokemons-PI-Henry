import styled from "styled-components";
import pokeBackground from "../../Assets/home-background.jpg";

export const HomeStyle = styled.div`
  background-image: url(${pokeBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250vh;
  /* width: 50vw; */
`;

export const Card = styled.div`
  /* margin-top: 100px; */
  /* height: 800px; */
  /* align-items: baseline; */
  font-family: "Fredoka One", cursive;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  & h2 {
    display: inline;
    margin-top: -20px;
    color: aliceblue;
  }
`;
export const Item = styled.div`
  height: 200px;
  padding: 2.5rem;
  background: linear-gradient(315deg, #756213 10%, #000000 99%);
  margin: 20px;
  /* overflow: hidden; */
  /* align-items: center; */
  & p {
    color: yellow;
    font-size: small;
  }
  & a {
    text-decoration: none;
    /* margin-top: 50px; */
  }
  & img {
    width: 100px;
    height: 100px;
    /* background-size: 200px; */
  }
`;
