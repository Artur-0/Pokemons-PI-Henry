import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/Actions/actions";
import Loading from "../Loading";
import Pokemons from "../Pokemons";
// import { HomeStyle } from "../Pokemons/styledPokemons";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  useEffect(() => {
    pokemons.length ? setIsLoading(false) : setIsLoading(true);
  }, [pokemons]);

  return <div>{!isLoading ? <Pokemons /> : <Loading />}</div>;
}

export default Home;
