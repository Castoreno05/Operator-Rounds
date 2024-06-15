const express = require("express");
const app = express();
const routes = require("./controllers/index");
const cors = require("cors");
const PORT = process.env.SERVER_PORT || 3001;
// const path = require("path");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(routes);

// app.use(express.static("../client/build"));
// app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
