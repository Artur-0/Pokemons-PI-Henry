import {
  CHANGE_PAGE,
  CLEAN_POKEMONS,
  FILTER_POKEMONS,
  GET_BY_ID,
  GET_POKEMONS,
  GET_TYPES,
  POST_POKEMON,
  SEARCH_POKEMON,
  SORT_BY_ATTACK,
  SORT_BY_NAME,
} from "../Actions/actionsTypes";

const initalState = {
  pokemons: [],
  pokemon: [],
  filteredPokemons: [],
  types: [],
  page: [0, 12],
  pageNumber: 1,
  newPokemon: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        pokemon: payload,
      };

    case FILTER_POKEMONS:
      let filteredPokemons = [];
      if (payload === "created" || payload === "existing") {
        payload === "created"
          ? (filteredPokemons = state.pokemons.filter(
              (p) => typeof p.id !== "number"
            ))
          : (filteredPokemons = state.pokemons.filter(
              (p) => typeof p.id === "number"
            ));
      } else {
        filteredPokemons = [...state.pokemons].filter((p) =>
          p.types.find((p) => p === payload)
        );
      }

      return {
        ...state,
        filteredPokemons: filteredPokemons,
      };
    case CLEAN_POKEMONS:
      return {
        ...state,
        filteredPokemons: payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: payload,
      };
    case SORT_BY_NAME:
      let sortedByName = state.pokemons;
      payload === "asc"
        ? sortedByName.sort((a, b) => a.name.localeCompare(b.name))
        : sortedByName.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        pokemons: sortedByName,
      };
    case SORT_BY_ATTACK:
      let sortedByAttack = state.pokemons;
      payload === "asc"
        ? sortedByAttack.sort((a, b) => {
            return a.attack - b.attack;
          })
        : sortedByAttack.sort((a, b) => {
            return b.attack - a.attack;
          });
      return {
        ...state,
        pokemons: sortedByAttack,
      };
    case CHANGE_PAGE:
      const page =
        payload === "next"
          ? state.page.map((e) => e + 12)
          : state.page.map((e) => e - 12);
      return {
        ...state,
        page: page,
        pageNumber:
          payload === "next" ? state.pageNumber + 1 : state.pageNumber - 1,
      };
    case POST_POKEMON:
      return {
        ...state,
        newPokemon: payload,
      };
    default:
      return state;
  }
};
