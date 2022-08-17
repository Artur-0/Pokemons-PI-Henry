import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../Redux/Actions/actions";

import defaultImg from "../../Assets/pikachu-ninja.jpg";

function ById() {
  const dispatch = useDispatch();
  const params = useParams();
  const pokemon = useSelector((state) => state.pokemon);
  useEffect(() => {
    console.log(params.id);
    dispatch(getPokemonById(params.id));
  }, [params]);
  return (
    <div>
      <img src={pokemon.image ? pokemon.image : defaultImg} alt="pokemon" />
      <h1>{pokemon.name}</h1>
      <p>{pokemon.types + " "}</p>
      <p>{pokemon.health}</p>
      <p>{pokemon.attack}</p>
      <p>{pokemon.defense}</p>
      <p>{pokemon.speed}</p>
      <p>{pokemon.height}</p>
      <p>{pokemon.weight}</p>
    </div>
  );
}

export default ById;
