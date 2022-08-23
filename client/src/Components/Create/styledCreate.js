import styled from "styled-components";
import backgroundPikachu from "../../Assets/pikachu_with_hat.png";

export const Style = styled.div`
  background-image: url(${backgroundPikachu});
  background-size: cover;
  margin-top: 0vh;
  height: 90vh;
  font-family: "Fredoka One", cursive;
  & h1 {
    margin-top: 15vh;
    position: absolute;
    left: 8%;
    display: block;
  }
  & form {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5% rgba(0, 0, 0, 0.3);
    width: 38rem;
    max-width: 50%;
    right: 2%;
    /* padding-bottom: 3%; */
    position: absolute;
    margin-bottom: 2%;
    margin-top: 1%;
    padding-right: -3%;
    color: white;
    background: linear-gradient(315deg, #756213 10%, #000000 99%);
  }
`;

export const Types = styled.div`
  display: inline-block;
  padding: 5px;
  & input {
    /* margin-top: 15px; */
    margin-left: -38px;
  }
`;

export const FormDiv = styled.div`
  display: inline-block;
  font-size: smaller;
  & label {
    padding: 5px;
    display: inline-block;
    /* margin-left: 5%; */
  }
  & input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    /* display: block; */
    /* width: 50%; */
    /* padding: 10px; */
    font-size: 14px;
    font-family: inherit;
    margin-left: 2vw;
  }
`;
