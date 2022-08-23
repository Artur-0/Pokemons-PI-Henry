import axios from "axios";
import {
  GET_POKEMONS,
  SEARCH_POKEMON,
  GET_BY_ID,
  FILTER_POKEMONS,
  CLEAN_POKEMONS,
  SORT_BY_NAME,
  GET_TYPES,
  SORT_BY_ATTACK,
  CHANGE_PAGE,
  POST_POKEMON,
} from "./actionsTypes";

export const getPokemons = () => {
  return (dispatch) => {
    return axios.get(`/pokemons`).then((res) =>
      dispatch({
        type: GET_POKEMONS,
        payload: res.data,
      })
    );
  };
};

export const searchPokemon = (name) => {
  return (dispatch) => {
    return axios
      .get(`/pokemons/?name=${name}`)
      .then((res) => dispatch({ type: SEARCH_POKEMON, payload: res.data }));
  };
};

export const getPokemonById = (id) => {
  return (dispatch) => {
    return axios.get(`/pokemons/${id}`).then((res) =>
      dispatch({
        type: GET_BY_ID,
        payload: res.data,
      })
    );
  };
};

export const filterPokemons = (filter) => {
  return (dispatch) => {
    dispatch({ type: FILTER_POKEMONS, payload: filter });
  };
};

export const clean = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAN_POKEMONS, payload: [] });
  };
};

export const getTypes = () => {
  return (dispatch) => {
    return axios
      .get(`/types`)
      .then((res) => dispatch({ type: GET_TYPES, payload: res.data }));
  };
};

export const sortByName = (ascDsc) => {
  return (dispatch) => {
    dispatch({ type: SORT_BY_NAME, payload: ascDsc });
  };
};

export const sortByAttack = (ascDsc) => {
  return (dispatch) => {
    dispatch({ type: SORT_BY_ATTACK, payload: ascDsc });
  };
};

export const changePage = (prevNext) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: prevNext,
    });
  };
};

export function postPokemon(newPokemon) {
  return async function (dispatch) {
    return axios.post(`/pokemons`, newPokemon).then((res) =>
      dispatch({
        type: POST_POKEMON,
        payload: res.data,
      })
    );
  };
}
