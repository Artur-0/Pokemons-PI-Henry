import styled from "styled-components";

import Loading from "../../Assets/Loading.gif";

export const LoadingDiv = styled.div`
  background-image: url(${Loading});
  background-position: left;
  /* margin-top: -10vh; */
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  & h1 {
    /* display: table; */
    /* border-radius: 25px; */
    position: absolute;
    bottom: 16vh;
    left: 38%;
    font-family: "Fredoka One", cursive;
    animation: text 2s infinite steps(10);
  }
  @keyframes text {
    from {
      color: red;
    }

    to {
      color: black;
    }
  }
`;
