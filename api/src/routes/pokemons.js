const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const { getPokemons, getPokemonById } = require("../controllers/pokemons");
const { getTypes } = require("../controllers/types");

const router = Router();

router.get("/", async (req, res, next) => {
  const name = req.query.name;
  try {
    res.send(await getPokemons(name));
  } catch (error) {
    res
      .status(404)
      .send("Sorry, that Pokemon does not exist. Try typing the name again!");
    console.log(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    res.send(await getPokemonById(id));
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { name, health, attack, defense, speed, height, weight, types } =
    req.body;
  await getTypes();
  try {
    const exist = await Pokemon.findOne({
      where: { name: name },
    });
    console.log(exist);
    if (!exist) {
      const newPokemon = await Pokemon.create({
        name,
        health,
        attack,
        defense,
        speed,
        height,
        weight,
      });
      const typesDb = await Type.findAll({
        where: {
          name: types,
        },
      });
      newPokemon.addType(typesDb);
      return res.status(200).send("Pokemon created successfully!");
    } else {
      return res.status(400).send("Pokemon already exists");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
