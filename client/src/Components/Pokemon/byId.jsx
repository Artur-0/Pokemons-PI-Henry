import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../Redux/Actions/actions";

import defaultImg from "../../Assets/pikachu-ninja.jpg";
import { Card, Item, Style } from "./styledPokemon";
import Loading from "../Loading";

function ById() {
  const dispatch = useDispatch();
  const params = useParams();
  const pokemon = useSelector((state) => state.pokemon);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (pokemon.name) {
      setIsLoading(false);
    }
  }, [pokemon]);

  useEffect(() => {
    dispatch(getPokemonById(params.id));
  }, [params, dispatch]);
  return (
    <Style>
      {isLoading ? (
        <Loading />
      ) : (
        <Card>
          <Item>
            <img
              src={pokemon.image ? pokemon.image : defaultImg}
              alt="pokemon"
            />
            <h1>{pokemon.name}</h1>
            <ul>
              <li>types: {pokemon.types + " "}</li>
              <li>health: {pokemon.health}</li>
              <li>attack: {pokemon.attack}</li>
              <li>defense: {pokemon.defense}</li>
              <li>speed: {pokemon.speed}</li>
              <li>height: {pokemon.height}</li>
              <li>weight: {pokemon.weight}</li>
            </ul>
          </Item>
        </Card>
      )}
    </Style>
  );
}

export default ById;
