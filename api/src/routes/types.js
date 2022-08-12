const { Router } = require("express");
const { getTypes } = require("../controllers/types");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await getTypes());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
