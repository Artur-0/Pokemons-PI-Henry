import React from "react";
import { useSelector } from "react-redux";
import defaultImg from "../../Assets/pikachu-ninja.jpg";
import { Card, HomeStyle, Item } from "./styledPokemons";
import { Link } from "react-router-dom";
import Buttons from "../Buttons";
import Pagination from "../../Footer";

function Pokemons() {
  const state = useSelector((state) => state);
  const page = state.page;

  return (
    <HomeStyle>
      <Buttons />
      <Card>
        {state.filteredPokemons.length
          ? state.filteredPokemons.map((p) => {
              return (
                <Item key={p.id}>
                  <img src={p.image ? p.image : defaultImg} alt="food" />
                  <Link to={`/pokemon/${p.id}`}>
                    <h2>{p.name}</h2>
                  </Link>
                  <p>{p.types ? p.types + " " : p.types.map((t) => t.name)}</p>
                </Item>
              );
            })
          : state.pokemons.slice(page[0], page[1]).map((p) => {
              return (
                <Item key={p.id}>
                  <img src={p.image ? p.image : defaultImg} alt="food" />
                  <Link to={`/pokemon/${p.id}`}>
                    <h2>{p.name}</h2>
                  </Link>
                  <p>{p.types + " "}</p>
                </Item>
              );
            })}
      </Card>
      <Pagination />
    </HomeStyle>
  );
}

export default Pokemons;
