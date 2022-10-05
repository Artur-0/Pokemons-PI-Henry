import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  background-color: #d2a813;
  background-image: linear-gradient(315deg, #d2a813 0%, #000000 34%);
  height: 10vh;
  width: 100%;
  font-family: "Fredoka One", cursive;
  & ul {
    display: flex;
    margin-top: -13vh;
    margin-left: 65vw;

    color: white;
  }
  & li {
    padding: 30px;
    list-style: none;
  }
  & a {
    color: aliceblue;
    text-decoration: none;
  }
  & img {
    margin-left: -86vw;
    height: 47px;
  }
`;
