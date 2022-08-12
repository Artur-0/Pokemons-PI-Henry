import { GET_POKEMONS } from "../Actions/actionsTypes";

const initalState = {
  pokemons: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
      };
    default:
      return state;
  }
};
