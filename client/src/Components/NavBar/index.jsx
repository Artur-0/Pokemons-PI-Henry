import React from "react";
import Logo from "../../Assets/pokemon.png";
import Search from "../Search";
import { Nav } from "./styledNav";

function NavBar() {
  return (
    <Nav>
      <img src={Logo} alt="logo" />
      <Search />
    </Nav>
  );
}

export default NavBar;
