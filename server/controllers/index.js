const router = require("express").Router();

const api_routes = require("./api");

router.use("/api", api_routes);

module.exports = router;
