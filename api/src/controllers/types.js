const axios = require("axios");
const { Type } = require("../db");

const getTypes = async () => {
  const types = await axios.get(`https://pokeapi.co/api/v2/type`);

  types.data.results.map(
    async (t) => await Type.findOrCreate({ where: { name: t.name } })
  );
  return await Type.findAll();
};

module.exports = {
  getTypes,
};
