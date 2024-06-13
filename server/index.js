const express = require("express");
const app = express();
const routes = require("./controllers/index");
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});