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

  & h1 {
    font-size: 15vh;
    font-family: "Fredoka One", cursive;
    position: absolute;
    color: black;
    top: 4vh;
    left: 15vw;
    /* animation: maquina 5s infinite steps(46); */
  }
  & p {
    display: table;
    border-radius: 25px;
    /* text-shadow: 0.8px 0.8px 0.8px rgba(0, 0, 0, 0.39); */
    /* background-color: red; */
    /* color: black; */
    position: absolute;
    top: 40vh;
    left: 10vw;
    /* height: 4rem; */
    /* width: 50%; */
    /* padding: 10px 20px; */
    font-family: "Fredoka One", cursive;
    font-size: 3vh;
    /* text-shadow: black; */
    /* border-left: 1px solid transparent; */
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
