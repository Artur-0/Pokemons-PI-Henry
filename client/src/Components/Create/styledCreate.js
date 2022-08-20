import styled from "styled-components";
import backgroundPikachu from "../../Assets/pikachu_with_hat.png";

export const Style = styled.div`
  background-image: url(${backgroundPikachu});
  background-size: cover;
  margin-top: 0vh;
  height: 90vh;
  font-family: "Fredoka One", cursive;
  /* width: 50vw; */
  & form {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5% rgba(0, 0, 0, 0.3);
    width: 38rem;
    max-width: 50%;
    right: 0%;
    padding-bottom: 3%;
    position: absolute;
    margin-bottom: 1%;
    margin-top: 1%;
    padding-right: -3%;
  }
  & label {
    /* position: absolute; */
    /* border: 1px solid #ccc; Gray border */
    /* box-sizing: border-box; */

    /* justify-content: left; */
    /* text-align: center; */
    /* padding: 20px; */
    /* box-sizing: border-box; */
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
    padding: 1px;
    display: inline-block;
    /* margin-left: 5%; */
    margin-bottom: 5px;
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
