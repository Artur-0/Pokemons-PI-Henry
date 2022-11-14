import styled from "styled-components";
import backgroundPikachu from "../../Assets/pikachu-background.jfif";

export const Landing = styled.div`
  background-image: url(${backgroundPikachu});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: absolute;
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 305%;
      font-family: "Fredoka One", cursive;
      /* position: absolute; */
      color: black;
      position: fixed;
      left: 5%;
      top: 7%;
    }
    p {
      display: table;
      border-radius: 25px;
      position: relative;
      top: 40vh;
      /* left: 10vw; */
      display: flex;
      font-family: "Fredoka One", cursive;
      font-size: 3vh;
      animation: text 1s infinite steps(10);
    }
    @keyframes text {
      from {
        color: black;
      }

      to {
        color: red;
      }
    }
  }
  @media screen and (min-width: 401px) {
    h1 {
      font-size: 415%;
      font-family: "Fredoka One", cursive;
      position: absolute;
      color: black;
      top: 15%;
      left: 21%;
      /* animation: maquina 5s infinite steps(46); */
    }
    p {
      display: table;
      border-radius: 25px;

      position: absolute;
      top: 40vh;
      left: 10vw;

      font-family: "Fredoka One", cursive;
      font-size: 3vh;
      animation: text 1s infinite steps(10);
    }
    @keyframes text {
      from {
        color: black;
      }

      to {
        color: red;
      }
    }
  }
`;

export const Button = styled.button`
  border-radius: 2vh;
  border-color: black;
  background-color: #fad61d;
  width: 15vw;
  height: 15vh;
  color: black;

  /* text-align: center; */
  font-family: "Fredoka One", cursive;
  font-size: 2vh;
  /* margin: 0;*/
  position: relative;
  top: 55vh;
  right: 17vw;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: aliceblue;
  }
`;
