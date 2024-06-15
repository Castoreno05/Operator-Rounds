const mysql = require("mysql2");
const fs = require("fs");
require("dotenv").config();

const db = mysql.createConnection({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	// ssl: {
	// 	ca: fs.readFileSync(process.env.DB_SSL_CA),
	// 	rejectUnauthorized: false,
	// },
});

db.connect((err) => {
	if (err) {
		console.error("Database connection failed: ", err.stack);
		return;
	}
	console.log("Connected to database.");
});

module.exports = { db };
