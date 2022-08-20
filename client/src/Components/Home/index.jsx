import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/Actions/actions";
import Loading from "../Loading";
import Pokemons from "../Pokemons";
import { HomeStyle } from "./styledHome";

function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    !pokemons.length && dispatch(getPokemons());
  }, [dispatch, pokemons.length]);
  useEffect(() => {
    pokemons.length ? setIsLoading(false) : setIsLoading(true);
  }, [pokemons]);

  return <HomeStyle>{!isLoading ? <Pokemons /> : <Loading />}</HomeStyle>;
}

export default Home;
