import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Redux/Actions/actions";
import defaultImg from "../../Assets/pikachu-ninja.jpg";
import { Card, HomeStyle, Item } from "./styledPokemons";

function Pokemons() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <HomeStyle>
      <Card>
        {pokemons.map((p) => {
          return (
            <Item>
              <img src={p.image ? p.image : defaultImg} alt="food" />
              <h2>{p.name}</h2>
              <p>{p.types + " "}</p>
            </Item>
          );
        })}
      </Card>
    </HomeStyle>
  );
}

export default Pokemons;
