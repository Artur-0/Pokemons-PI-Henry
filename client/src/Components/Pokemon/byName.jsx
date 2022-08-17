import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchPokemon } from "../../Redux/Actions/actions";
import { Card, Style } from "./styledPokemon";
import Loading from "../Loading/index.jsx";

function Pokemon() {
  const dispatch = useDispatch();
  const params = useParams();
  const pokemon = useSelector((state) => state.pokemon);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if ([pokemon].length === 1) {
      setIsLoading(false);
    }
  }, [pokemon]);

  useEffect(() => {
    dispatch(searchPokemon(params.name));
  }, [dispatch, params]);
  return (
    <Style>
      {isLoading ? (
        <Loading />
      ) : !pokemon.name ? (
        <h1>Pokemon not found</h1>
      ) : !isLoading ? (
        <>
          <img src={pokemon.image} alt="pokemon" />
          <Card>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.types}</p>
            <p>{pokemon.health}</p>
            <p>{pokemon.attack}</p>
            <p>{pokemon.defense}</p>
            <p>{pokemon.speed}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon.weight}</p>
          </Card>
        </>
      ) : (
        <Loading />
      )}
    </Style>
  );
}

export default Pokemon;
