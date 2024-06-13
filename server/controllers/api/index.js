const router = require("express").Router();

const round_routes = require("./round_routes");

router.use("/rounds", round_routes);

module.exports = router;
