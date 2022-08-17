import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../Assets/pokemon.png";
import { clean, getPokemons } from "../../Redux/Actions/actions";
import Search from "../Search";
import { Nav } from "./styledNav";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <Nav>
      <Link to="/pokemon">
        <img src={Logo} alt="logo" onClick={() => dispatch(clean())} />
      </Link>
      <Search />
      <ul>
        <Link to="/pokemon">
          <li>HOME</li>
        </Link>
        <Link to="/pokemon/create/newPokemon">
          <li>CREATE</li>
        </Link>
      </ul>
    </Nav>
  );
}

export default NavBar;
