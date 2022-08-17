import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #d2a813;
  background-image: linear-gradient(315deg, #d2a813 0%, #000000 34%);
  height: 10vh;
  font-family: "Fredoka One", cursive;
  & ul {
    display: flex;
    margin-top: -12vh;
    margin-left: 65vw;

    color: white;
  }
  & li {
    padding: 30px;

    list-style: none;
  }
  & img {
    margin-left: -86vw;
    height: 50px;
  }
`;