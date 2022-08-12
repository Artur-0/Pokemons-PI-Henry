const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemons = async (name) => {
  if (name) {
    const pokemonDb = await Pokemon.findOne({
      where: { name: name },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (pokemonDb) return pokemonDb;

    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return {
      id: pokemon.data.id,
      image: pokemon.data.sprites.other.dream_world.front_default,
      name: pokemon.data.name,
      types: pokemon.data.types.map((t) => t.type.name),
    };
  }

  //  ------------------------------------------------------------//-------------------------------------------------------------//
  const pokemonDb = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  let urls = [];
  const api = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
    params: { limit: 40 },
  });
  api.data.results.map((p) => urls.push(p.url)); //
  const data = await Promise.all(urls.map((u) => axios.get(u)));

  const necessaryData = data.map((e) => {
    return {
      id: e.data.id,
      image: e.data.sprites.other.dream_world.front_default,
      name: e.data.name,
      types: e.data.types.map((t) => t.type.name),
    };
  });
  return [...pokemonDb, ...necessaryData];
};

// [ ] GET /pokemons?name="...":
// Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
// Si no existe ningún pokemon mostrar un mensaje adecuado

const getPokemonById = async (id) => {
  if (id.length > 35) {
    const pokemonDb = await Pokemon.findOne({
      where: { id: id },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return pokemonDb;
  } else {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      id: pokemon.data.id,
      image: pokemon.data.sprites.other["official-artwork"].front_default,
      name: pokemon.data.name,
      types: pokemon.data.types.map((t) => t.type.name),
      health: pokemon.data.stats[0].base_stat,
      attack: pokemon.data.stats[1].base_stat,
      defense: pokemon.data.stats[2].base_stat,
      speed: pokemon.data.stats[5].base_stat,
      height: pokemon.data.height,
      weight: pokemon.data.weight,
    };
  }
};

// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

module.exports = {
  getPokemons,
  getPokemonById,
};
