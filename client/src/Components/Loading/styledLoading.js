import styled from "styled-components";

import Loading from "../../Assets/Loading.gif";

export const LoadingDiv = styled.div`
  background-image: url(${Loading});
  background-position: left;
  /* margin-top: -10vh; */
  height: 90vh;
  & h1 {
    /* display: table; */
    /* border-radius: 25px; */
    position: absolute;
    top: 16rem;
    left: 50%;
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
