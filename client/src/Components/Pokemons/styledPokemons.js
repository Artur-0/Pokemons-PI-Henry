import styled from "styled-components";
import pokeBackground from "../../Assets/home-background.jpg";

export const HomeStyle = styled.div`
  background-image: url(${pokeBackground});
  /* background-size: cover; */
  /* background-position: bottom; */
  /* background-repeat: no-repeat; */
  /* height: 100vh;
  width: 100vw; */
`;

export const Card = styled.div`
  /* margin-top: 100px; */
  /* height: 800px; */
  font-family: "Fredoka One", cursive;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* text-align: center; */
  & h2 {
    margin-top: -20px;
    /* color: aliceblue; */
  }
`;
export const Item = styled.div`
  /* height: 100px; */
  padding: 2.5rem;
  background: linear-gradient(315deg, #756213 10%, #000000 99%);
  margin: 20px;
  overflow: hidden;
  & p {
    color: black;
    font-size: small;
  }
  & a {
    text-decoration: none;
  }
  & img {
    width: 100px;
    background-size: auto;
  }
`;
