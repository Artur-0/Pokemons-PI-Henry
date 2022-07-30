const { Router } = require("express");
const { getPokemons } = require("../controllers/pokemons");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await getPokemons());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
