import axios from "axios";
import { GET_POKEMONS } from "./actionsTypes";

const HOSTING = "http://localhost:3001";

export const getPokemons = () => {
  return (dispatch) => {
    return axios.get(`${HOSTING}/pokemons`).then((res) =>
      dispatch({
        type: GET_POKEMONS,
        payload: res.data,
      })
    );
  };
};
