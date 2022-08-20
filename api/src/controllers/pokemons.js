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

  //  ------------------------------------------------------------//-------------------------------------------------------------//
  let pokemonDb = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  pokemonDb = pokemonDb.map((p) => {
    return {
      id: p.dataValues.id,
      // image: pokemonDb.image,
      name: p.dataValues.name,
      types: p.dataValues.types.map((t) => t.name),
      health: p.dataValues.health,
      attack: p.dataValues.attack,
      defense: p.dataValues.defense,
      speed: p.dataValues.speed,
      height: p.dataValues.height,
      weight: p.dataValues.weight,
    };
  });
  const api = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
    params: { limit: 40 },
  });
  const data = await Promise.all(api.data.results.map((p) => axios.get(p.url)));
  const necessaryData = data.map((e) => {
    return {
      id: e.data.id,
      image: e.data.sprites.other.dream_world.front_default,
      name: e.data.name,
      types: e.data.types.map((t) => t.type.name),
      health: e.data.stats[0].base_stat,
      attack: e.data.stats[1].base_stat,
      defense: e.data.stats[2].base_stat,
      speed: e.data.stats[5].base_stat,
      height: e.data.height,
      weight: e.data.weight,
    };
  });
  return [...pokemonDb, ...necessaryData];
};

const getPokemonById = async (id) => {
  if (id.length > 30) {
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

    return {
      id: pokemonDb.dataValues.id,
      // image: pokemonDb.image,
      name: pokemonDb.dataValues.name,
      types: pokemonDb.dataValues.types.map((t) => t.name),
      health: pokemonDb.dataValues.health,
      attack: pokemonDb.dataValues.attack,
      defense: pokemonDb.dataValues.defense,
      speed: pokemonDb.dataValues.speed,
      height: pokemonDb.dataValues.height,
      weight: pokemonDb.dataValues.weight,
    };
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
