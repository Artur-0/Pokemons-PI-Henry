const axios = require("axios");

const getPokemons = async () => {
  const api = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  console.log(api.data);
  const necessaryData = api.data.results.map((p) => p.name);
  return necessaryData;
};

module.exports = {
  getPokemons,
};
